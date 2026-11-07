import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type DiagnosticModuleId =
  | 'overview'
  | 'zygomatic-plate'
  | 'neural-bus'
  | 'ocular-sync'
  | 'carbon-chassis';

interface CyberneticPortrait3DProps {
  activeModule: DiagnosticModuleId;
  scanlineIntensity: number;
  circuitPulseSpeed: number;
  xrayMode: boolean;
}

const PORTRAIT_VERTEX_SHADER = `
  uniform sampler2D uDepthMap;
  uniform vec2 uMouse;
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vViewPos;

  void main() {
    vUv = uv;
    float depth = texture2D(uDepthMap, uv).r;
    vElevation = depth;

    vec3 pos = position;
    // True 3D relief displacement from anatomical + dermal armor depth map
    pos.z += depth * 0.62;

    // Subtle breathing micro-motion on chest & head
    float breath = sin(uTime * 1.6) * 0.018 * smoothstep(0.0, 0.6, depth);
    pos.y += breath;

    // Cursor-driven 3D perspective tilt weighted by subject depth
    pos.x += uMouse.x * depth * 0.24;
    pos.y += uMouse.y * depth * 0.16;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vViewPos = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const PORTRAIT_FRAGMENT_SHADER = `
  uniform sampler2D uAlbedoMap;
  uniform sampler2D uDepthMap;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScanlineIntensity;
  uniform float uCircuitSpeed;
  uniform float uXrayMode;
  uniform int uActiveModule;

  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vViewPos;

  void main() {
    vec4 texColor = texture2D(uAlbedoMap, vUv);
    float mask = texColor.a;
    if (mask < 0.01) discard;

    vec3 col = texColor.rgb;

    // Detect glowing molten-orange sub-dermal circuit seams & rim light on the right side of the face
    // Circuit region is concentrated on viewer's right side of the face: uv.x in [0.49..0.64], uv.y in [0.38..0.78]
    float inImplantZone =
      smoothstep(0.47, 0.51, vUv.x) * (1.0 - smoothstep(0.62, 0.67, vUv.x)) *
      smoothstep(0.36, 0.42, vUv.y) * (1.0 - smoothstep(0.76, 0.83, vUv.y));

    // Detect titanium dermal plate metallic surfaces (cool dark grey-silver in implant zone)
    float luma = dot(col, vec3(0.299, 0.587, 0.114));
    float orangeWarmth = max(0.0, col.r - col.b * 1.35);

    // Dynamic cursor-reactive specular sheen on titanium cheek/temple armor plates
    vec2 lightPos = vec2(0.54 + uMouse.x * 0.18, 0.56 + uMouse.y * 0.18);
    float specDist = distance(vUv, lightPos);
    float titaniumSpec = exp(-specDist * 14.0) * inImplantZone * 0.55;
    col += vec3(1.0, 0.78, 0.58) * titaniumSpec;

    // Traveling molten-orange sub-dermal plasma pulse along the cybernetic fissures
    float wavePhase = sin((vUv.y * 22.0 - uTime * uCircuitSpeed * 3.8) + vUv.x * 12.0);
    float pulseBoost = smoothstep(0.2, 0.95, wavePhase);

    // Amplify existing molten-orange circuit fissures on the face & neck
    float fissureMask = smoothstep(0.22, 0.58, orangeWarmth) * inImplantZone;
    vec3 moltenCore = mix(vec3(1.0, 0.38, 0.02), vec3(1.0, 0.86, 0.42), pulseBoost);
    col += moltenCore * fissureMask * (0.45 + 0.75 * pulseBoost);

    // Highlight active diagnostic module zone when selected
    vec2 moduleFocus = vec2(0.55, 0.56);
    if (uActiveModule == 1) moduleFocus = vec2(0.565, 0.54); // Zygomatic Titanium Plate
    else if (uActiveModule == 2) moduleFocus = vec2(0.545, 0.66); // Neural Cortex Temple Bus
    else if (uActiveModule == 3) moduleFocus = vec2(0.525, 0.635); // Ocular Sync
    else if (uActiveModule == 4) moduleFocus = vec2(0.50, 0.25); // Carbon Collar Chassis

    if (uActiveModule > 0) {
      float dMod = distance(vUv, moduleFocus);
      float ring = exp(-pow((dMod - 0.055) * 38.0, 2.0));
      float innerGlow = exp(-dMod * 18.0) * 0.32;
      col += vec3(1.0, 0.52, 0.12) * (ring * 0.85 + innerGlow);
    }

    // Optional Biometric X-Ray / Telemetry Scanline Overlay
    if (uScanlineIntensity > 0.01 || uXrayMode > 0.5) {
      float scanLine = sin(vUv.y * 260.0 - uTime * 8.0) * 0.5 + 0.5;
      float sweepBar = exp(-pow((vUv.y - fract(uTime * 0.28)) * 28.0, 2.0));
      float effectStrength = max(uScanlineIntensity, uXrayMode * 0.85);
      col += vec3(1.0, 0.45, 0.08) * (sweepBar * 0.45 + scanLine * 0.06 * inImplantZone) * effectStrength;

      if (uXrayMode > 0.5) {
        float edge = fwidth(luma) * 3.5;
        vec3 xrayCol = mix(
          vec3(0.12, 0.03, 0.01),
          vec3(1.0, 0.48, 0.08),
          clamp(edge + orangeWarmth * 1.4, 0.0, 1.0)
        );
        col = mix(col, xrayCol, 0.62 * inImplantZone);
      }
    }

    gl_FragColor = vec4(col, mask);
  }
`;

/**
 * Extracts and cleans the central cybernetic portrait from `/reference-frame.jpg`,
 * removing all surrounding browser UI, left typography, top navbar pill, right arcs,
 * and bottom dock, while building a matching 3D depth map.
 */
function buildCleanPortraitAndDepthTextures(
  sourceImg: HTMLImageElement | null
): { albedoTex: THREE.CanvasTexture; depthTex: THREE.CanvasTexture } {
  const width = 1024;
  const height = 1024;

  const albedoCanvas = document.createElement('canvas');
  albedoCanvas.width = width;
  albedoCanvas.height = height;
  const ctx = albedoCanvas.getContext('2d')!;

  const depthCanvas = document.createElement('canvas');
  depthCanvas.width = width;
  depthCanvas.height = height;
  const depthCtx = depthCanvas.getContext('2d')!;

  if (sourceImg && sourceImg.width > 0) {
    // Source screenshot crop coordinates:
    // y from 12.1% (just below Chrome toolbar) to 92.8% (just above macOS dock)
    const sy = sourceImg.height * 0.121;
    const sh = sourceImg.height * 0.807;
    const sx = sourceImg.width * 0.18;
    const sw = sourceImg.width * 0.64;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d')!;

    // Draw the clean portrait region onto the upper 91% of our 1024x1024 canvas
    const drawH = Math.round(height * 0.91);
    tempCtx.drawImage(sourceImg, sx, sy, sw, sh, 0, 0, width, drawH);

    // Repair top hair crown region where the floating pill navbar overlapped (y: 2%..8.5%)
    // Sample natural dark hair + orange rim light from just below the pill bar (y: 9.5%..13%)
    tempCtx.save();
    tempCtx.beginPath();
    tempCtx.ellipse(width * 0.495, height * 0.075, width * 0.13, height * 0.068, -0.05, 0, Math.PI * 2);
    tempCtx.clip();

    const hairGrad = tempCtx.createRadialGradient(
      width * 0.49,
      height * 0.13,
      width * 0.02,
      width * 0.50,
      height * 0.08,
      width * 0.14
    );
    hairGrad.addColorStop(0.0, '#120805');
    hairGrad.addColorStop(0.65, '#1D0C06');
    hairGrad.addColorStop(0.88, '#7A2405');
    hairGrad.addColorStop(1.0, '#D34106');
    tempCtx.fillStyle = hairGrad;
    tempCtx.fillRect(width * 0.34, 0, width * 0.32, height * 0.14);
    tempCtx.restore();

    // Extend the matte-black high-collar techwear jacket smoothly from y=90% to y=100%
    // so there is zero dock and the shoulders reach the bottom of any screen
    tempCtx.save();
    tempCtx.beginPath();
    tempCtx.moveTo(width * 0.16, drawH - 12);
    tempCtx.quadraticCurveTo(width * 0.5, drawH - 28, width * 0.94, drawH - 12);
    tempCtx.lineTo(width * 0.97, height);
    tempCtx.lineTo(width * 0.13, height);
    tempCtx.closePath();
    const jacketGrad = tempCtx.createLinearGradient(width * 0.15, drawH, width * 0.92, height);
    jacketGrad.addColorStop(0.0, '#1C0D08');
    jacketGrad.addColorStop(0.35, '#110907');
    jacketGrad.addColorStop(0.75, '#0C0706');
    jacketGrad.addColorStop(1.0, '#170805');
    tempCtx.fillStyle = jacketGrad;
    tempCtx.fill();
    tempCtx.restore();

    // Now apply a feathered anatomical subject silhouette mask so ONLY the central portrait + warm halo
    // is kept, completely excluding the left text and right orbital arcs!
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = width;
    maskCanvas.height = height;
    const maskCtx = maskCanvas.getContext('2d')!;

    maskCtx.filter = 'blur(26px)';
    maskCtx.fillStyle = '#FFFFFF';
    maskCtx.beginPath();
    // Lower shoulders silhouette (x: 0.14 to 0.94 at bottom)
    maskCtx.moveTo(width * 0.13, height);
    maskCtx.quadraticCurveTo(width * 0.17, height * 0.78, width * 0.34, height * 0.69);
    // Left neck & face contour (avoids left text which ends at x ~ 0.23 in cropped space)
    maskCtx.quadraticCurveTo(width * 0.36, height * 0.54, width * 0.33, height * 0.34);
    // Hair crown top
    maskCtx.quadraticCurveTo(width * 0.35, height * 0.03, width * 0.51, height * 0.025);
    // Right hair & ear contour (includes warm golden-orange rim light halo)
    maskCtx.quadraticCurveTo(width * 0.68, height * 0.04, width * 0.71, height * 0.38);
    // Right neck & shoulder slope
    maskCtx.quadraticCurveTo(width * 0.68, height * 0.60, width * 0.84, height * 0.72);
    maskCtx.quadraticCurveTo(width * 0.94, height * 0.82, width * 0.96, height);
    maskCtx.closePath();
    maskCtx.fill();

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(tempCanvas, 0, 0);
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(maskCanvas, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
  }

  // Generate 3D Anatomical Depth Map for vertex displacement
  depthCtx.fillStyle = '#000000';
  depthCtx.fillRect(0, 0, width, height);

  // Head 3D dome
  const headDepth = depthCtx.createRadialGradient(
    width * 0.49,
    height * 0.36,
    width * 0.02,
    width * 0.50,
    height * 0.36,
    width * 0.21
  );
  headDepth.addColorStop(0.0, 'rgba(255, 255, 255, 0.95)');
  headDepth.addColorStop(0.55, 'rgba(190, 190, 190, 0.68)');
  headDepth.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
  depthCtx.fillStyle = headDepth;
  depthCtx.fillRect(0, 0, width, height);

  // Shoulders & High-Collar Techwear Jacket 3D volume
  const torsoDepth = depthCtx.createRadialGradient(
    width * 0.52,
    height * 0.84,
    width * 0.05,
    width * 0.52,
    height * 0.86,
    width * 0.38
  );
  torsoDepth.addColorStop(0.0, 'rgba(220, 220, 220, 0.75)');
  torsoDepth.addColorStop(0.7, 'rgba(120, 120, 120, 0.42)');
  torsoDepth.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
  depthCtx.globalCompositeOperation = 'lighter';
  depthCtx.fillStyle = torsoDepth;
  depthCtx.fillRect(0, 0, width, height);

  const albedoTex = new THREE.CanvasTexture(albedoCanvas);
  albedoTex.colorSpace = THREE.SRGBColorSpace;
  albedoTex.minFilter = THREE.LinearFilter;
  albedoTex.magFilter = THREE.LinearFilter;

  const depthTex = new THREE.CanvasTexture(depthCanvas);
  depthTex.minFilter = THREE.LinearFilter;
  depthTex.magFilter = THREE.LinearFilter;

  return { albedoTex, depthTex };
}

export const CyberneticPortrait3D: React.FC<CyberneticPortrait3DProps> = ({
  activeModule,
  scanlineIntensity,
  circuitPulseSpeed,
  xrayMode,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef({
    activeModule,
    scanlineIntensity,
    circuitPulseSpeed,
    xrayMode,
  });

  useEffect(() => {
    propsRef.current = {
      activeModule,
      scanlineIntensity,
      circuitPulseSpeed,
      xrayMode,
    };
  }, [activeModule, scanlineIntensity, circuitPulseSpeed, xrayMode]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.04;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      34,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6.2);

    // 1. SOLAR-ORANGE TO DEEP-CRIMSON ATMOSPHERIC SHADER BACKDROP (matches m_intro_01.jpg)
    const bgUniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    };
    const bgMat = new THREE.ShaderMaterial({
      uniforms: bgUniforms,
      depthWrite: false,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;
        void main() {
          // Left: vivid solar orange (#EE6B0E), Center: fiery vermilion (#D13605), Right: deep crimson (#930703)
          vec3 leftOrange = vec3(0.933, 0.420, 0.055);
          vec3 midVermilion = vec3(0.835, 0.215, 0.020);
          vec3 rightCrimson = vec3(0.576, 0.027, 0.012);

          float x = vUv.x;
          vec3 bg = mix(leftOrange, midVermilion, smoothstep(0.05, 0.52, x));
          bg = mix(bg, rightCrimson, smoothstep(0.45, 0.96, x));

          // Warm golden-orange rim-light bloom behind the central portrait's head & right cheek
          vec2 haloCenter = vec2(0.54 + uMouse.x * 0.02, 0.58 + uMouse.y * 0.02);
          float haloDist = distance(vUv, haloCenter);
          float rimBloom = exp(-haloDist * 4.2) * 0.24;
          bg += vec3(0.98, 0.42, 0.04) * rimBloom;

          gl_FragColor = vec4(bg, 1.0);
        }
      `,
    });
    const bgPlane = new THREE.Mesh(new THREE.PlaneGeometry(24, 14), bgMat);
    bgPlane.position.z = -1.5;
    scene.add(bgPlane);

    // 2. 3D DEPTH-DISPLACED CYBERNETIC PORTRAIT MESH
    const initialTextures = buildCleanPortraitAndDepthTextures(null);
    const moduleMap: Record<DiagnosticModuleId, number> = {
      overview: 0,
      'zygomatic-plate': 1,
      'neural-bus': 2,
      'ocular-sync': 3,
      'carbon-chassis': 4,
    };

    const portraitUniforms = {
      uAlbedoMap: { value: initialTextures.albedoTex },
      uDepthMap: { value: initialTextures.depthTex },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScanlineIntensity: { value: scanlineIntensity },
      uCircuitSpeed: { value: circuitPulseSpeed },
      uXrayMode: { value: xrayMode ? 1.0 : 0.0 },
      uActiveModule: { value: moduleMap[activeModule] },
    };

    const portraitMat = new THREE.ShaderMaterial({
      uniforms: portraitUniforms,
      vertexShader: PORTRAIT_VERTEX_SHADER,
      fragmentShader: PORTRAIT_FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
    });

    const portraitGeo = new THREE.PlaneGeometry(4.55, 3.85, 140, 140);
    const portraitMesh = new THREE.Mesh(portraitGeo, portraitMat);
    portraitMesh.position.set(0.04, -0.06, 0);
    scene.add(portraitMesh);

    // Load the high-res portrait source image and build the clean masked 3D textures
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const { albedoTex, depthTex } = buildCleanPortraitAndDepthTextures(img);
      portraitUniforms.uAlbedoMap.value.dispose();
      portraitUniforms.uDepthMap.value.dispose();
      portraitUniforms.uAlbedoMap.value = albedoTex;
      portraitUniforms.uDepthMap.value = depthTex;
    };
    img.src = '/reference-frame.jpg';

    // 3. SUBTLE 3D MOLTEN-ORANGE NEURAL CIRCUIT SPLINES & TITANIUM MICRO-NODES OVER IMPLANT ZONE
    const implantOverlayGroup = new THREE.Group();
    scene.add(implantOverlayGroup);

    // 3D glowing sub-dermal circuit trace matching the exact temple -> cheekbone -> jaw fissure path
    const circuitCurvePoints = [
      new THREE.Vector3(0.18, 0.92, 0.36),
      new THREE.Vector3(0.32, 0.80, 0.38),
      new THREE.Vector3(0.28, 0.56, 0.42),
      new THREE.Vector3(0.42, 0.38, 0.40),
      new THREE.Vector3(0.31, 0.14, 0.39),
      new THREE.Vector3(0.16, -0.14, 0.36),
      new THREE.Vector3(0.34, -0.34, 0.34),
    ];
    const circuitCurve = new THREE.CatmullRomCurve3(circuitCurvePoints);
    const circuitTubeGeo = new THREE.TubeGeometry(circuitCurve, 64, 0.0045, 8, false);
    const circuitTubeMat = new THREE.MeshBasicMaterial({
      color: '#FF7B1A',
      transparent: true,
      opacity: 0.48,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const circuitTube = new THREE.Mesh(circuitTubeGeo, circuitTubeMat);
    implantOverlayGroup.add(circuitTube);

    // Mouse Parallax Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const {
        activeModule: mod,
        scanlineIntensity: scan,
        circuitPulseSpeed: speed,
        xrayMode: xray,
      } = propsRef.current;

      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      bgUniforms.uTime.value = elapsed;
      bgUniforms.uMouse.value.set(mouse.x, mouse.y);

      portraitUniforms.uTime.value = elapsed;
      portraitUniforms.uMouse.value.set(mouse.x, mouse.y);
      portraitUniforms.uScanlineIntensity.value = scan;
      portraitUniforms.uCircuitSpeed.value = speed;
      portraitUniforms.uXrayMode.value = xray ? 1.0 : 0.0;
      portraitUniforms.uActiveModule.value = moduleMap[mod];

      // Subtle 3D rotation of portrait & cybernetic circuit overlay with mouse
      portraitMesh.rotation.y = mouse.x * 0.065;
      portraitMesh.rotation.x = -mouse.y * 0.045;

      implantOverlayGroup.rotation.copy(portraitMesh.rotation);
      implantOverlayGroup.position.set(
        0.04 + mouse.x * 0.09,
        -0.06 + mouse.y * 0.06,
        0.02
      );
      circuitTubeMat.opacity = (0.32 + Math.sin(elapsed * speed * 3.2) * 0.22) * (xray ? 1.4 : 1.0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-label="Real-time WebGL Cybernetic Human Portrait and Neural Implant Simulation"
    />
  );
};
