'use client'

import { Component, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/macbook-pro-14.glb";
const MODEL_SCALE = 17.25;
const SCREEN_POSITION = [0.00008, 0.10231, -0.15686];
const SCREEN_ROTATION_X = Math.atan(-0.362152);
const SCREEN_SIZE = [0.294, 0.178];

const projectPalettes = {
  7: ["#031b2b", "#08758a", "#04141f"],
  8: ["#080d16", "#5f4211", "#111827"],
  9: ["#0a0f17", "#51402f", "#182235"],
  2: ["#22070c", "#8b1625", "#170509"],
  4: ["#071827", "#0e7490", "#06111c"],
};

const normalizeAssetSource = (source) => (typeof source === "string" ? source : source?.src || "");

const drawCoverImage = (context, image, centerX, centerY, maxWidth, maxHeight) => {
  const ratio = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
  const width = image.naturalWidth * ratio;
  const height = image.naturalHeight * ratio;
  context.drawImage(image, centerX - width / 2, centerY - height / 2, width, height);
};

const paintScreen = (canvas, project, image) => {
  const context = canvas.getContext("2d");
  if (!context || !project) return;
  const [start, glow, end] = projectPalettes[project.id] || projectPalettes[4];
  const background = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  background.addColorStop(0, start);
  background.addColorStop(0.54, glow);
  background.addColorStop(1, end);
  context.fillStyle = background;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const vignette = context.createRadialGradient(512, 238, 42, 512, 288, 620);
  vignette.addColorStop(0, "rgba(255,255,255,0.09)");
  vignette.addColorStop(0.54, "rgba(255,255,255,0.01)");
  vignette.addColorStop(1, "rgba(0,0,0,0.62)");
  context.fillStyle = vignette;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "rgba(255,255,255,0.94)";
  context.textAlign = "center";
  context.textBaseline = "middle";
  if (image) {
    drawCoverImage(context, image, 512, 252, 460, 300);
  } else {
    context.font = "800 70px Arial, sans-serif";
    context.fillText(project.titleEn, 512, 258);
  }
  context.font = "700 32px Arial, sans-serif";
  context.fillText(project.titleEn, 512, 468);

  // The physical model includes the display notch; this keeps the dynamic screen aligned with it.
  context.fillStyle = "#020306";
  context.beginPath();
  context.roundRect(458, -8, 108, 34, 14);
  context.fill();
};

const useProjectScreenTexture = (project) => {
  const [texture, setTexture] = useState(null);
  const texturesRef = useRef([]);

  useEffect(() => {
    let cancelled = false;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 576;
    const finish = (image = null) => {
      if (cancelled) return;
      paintScreen(canvas, project, image);
      const nextTexture = new THREE.CanvasTexture(canvas);
      nextTexture.colorSpace = THREE.SRGBColorSpace;
      nextTexture.anisotropy = 8;
      nextTexture.minFilter = THREE.LinearMipmapLinearFilter;
      nextTexture.magFilter = THREE.LinearFilter;
      nextTexture.needsUpdate = true;
      texturesRef.current.push(nextTexture);
      setTexture(nextTexture);
    };

    const logoSource = normalizeAssetSource(project?.logo);
    if (!logoSource) {
      finish();
      return () => { cancelled = true; };
    }

    const image = new Image();
    image.decoding = "async";
    image.onload = async () => {
      try { await image.decode(); } catch { /* Loaded pixels remain valid. */ }
      finish(image);
    };
    image.onerror = () => finish();
    image.src = logoSource;

    return () => { cancelled = true; };
  }, [project]);

  useEffect(() => () => texturesRef.current.forEach((item) => item.dispose()), []);
  return texture;
};

const ResponsiveCamera = ({ viewport }) => {
  const { camera } = useThree();
  useEffect(() => {
    const mobile = viewport === "mobile";
    const tablet = viewport === "tablet";
    camera.position.set(0, mobile ? 0.76 : 1.05, mobile ? 7.5 : tablet ? 8 : 7.7);
    camera.fov = mobile ? 41 : 40;
    camera.near = 0.1;
    camera.far = 50;
    camera.lookAt(0, -0.18, 0);
    camera.updateProjectionMatrix();
  }, [camera, viewport]);
  return null;
};

const LaptopModel = ({ project, activeIndex, travelProgress, total, reduceMotion, onReady }) => {
  const groupRef = useRef(null);
  const currentScreenRef = useRef(null);
  const previousScreenRef = useRef(null);
  const currentMaterialRef = useRef(null);
  const previousMaterialRef = useRef(null);
  const reflectionRef = useRef(null);
  const transitionStartedRef = useRef(0);
  const lastProgressRef = useRef(0);
  const lastMovementAtRef = useRef(0);
  const { scene } = useGLTF(MODEL_URL, false, true);
  const model = useMemo(() => scene.clone(true), [scene]);
  const nextTexture = useProjectScreenTexture(project);
  const [currentTexture, setCurrentTexture] = useState(null);
  const [previousTexture, setPreviousTexture] = useState(null);
  const currentTextureRef = useRef(null);
  const lastIndex = Math.max(0, total - 1);

  useEffect(() => {
    model.traverse((object) => {
      if (!object.isMesh) return;
      if (object.name === "FnbkdmFKVeCCxTX") {
        // Remove the source model's rear Apple mark; the portfolio uses unbranded hardware.
        object.visible = false;
        return;
      }
      object.castShadow = true;
      object.receiveShadow = true;
      object.frustumCulled = true;
      object.material = object.material.clone();
      const material = object.material;
      const luminance = material?.color
        ? material.color.r * 0.2126 + material.color.g * 0.7152 + material.color.b * 0.0722
        : 0;
      if (material?.isMeshStandardMaterial && luminance > 0.42) {
        material.metalness = Math.max(0.66, material.metalness || 0);
        material.roughness = THREE.MathUtils.clamp(material.roughness || 0.38, 0.28, 0.46);
        material.envMapIntensity = 0.72;
      }
    });
    return () => {
      model.traverse((object) => {
        if (object.isMesh && object.material?.dispose) object.material.dispose();
      });
    };
  }, [model]);

  useEffect(() => {
    if (!nextTexture || nextTexture === currentTextureRef.current) return;
    setPreviousTexture(currentTextureRef.current);
    setCurrentTexture(nextTexture);
    currentTextureRef.current = nextTexture;
    transitionStartedRef.current = performance.now();
    onReady?.(true);
  }, [nextTexture, onReady]);

  useFrame(({ clock }) => {
    const group = groupRef.current;
    if (!group) return;
    const now = performance.now();
    const value = travelProgress.get();
    const bounded = Math.min(lastIndex, Math.max(0, value));
    const segment = Math.min(Math.max(0, Math.floor(bounded)), Math.max(0, lastIndex - 1));
    const local = bounded >= lastIndex ? 0 : bounded - segment;
    const transitionLift = Math.sin(Math.PI * local);
    if (Math.abs(value - lastProgressRef.current) > 0.0002) {
      lastProgressRef.current = value;
      lastMovementAtRef.current = now;
    }
    const idle = !reduceMotion && now - lastMovementAtRef.current > 320;
    const idleFloat = idle ? Math.sin(clock.elapsedTime * 1.05) * 0.022 : 0;
    const exactIndex = reduceMotion ? Math.min(lastIndex, Math.max(0, activeIndex)) : bounded;

    group.rotation.y = exactIndex * Math.PI * 2;
    group.rotation.x = reduceMotion ? 0 : THREE.MathUtils.degToRad(2 - 4 * Math.sin(Math.PI * local) ** 2 + (idle ? Math.sin(clock.elapsedTime * 0.8) * 0.12 : 0));
    group.rotation.z = reduceMotion ? 0 : THREE.MathUtils.degToRad(transitionLift * (segment % 2 === 0 ? 0.45 : -0.45));
    group.position.y = -1.43 + transitionLift * 0.095 + idleFloat;
    const scale = MODEL_SCALE * (1 - transitionLift * 0.026);
    group.scale.setScalar(scale);

    const blend = reduceMotion ? 1 : THREE.MathUtils.smoothstep((now - transitionStartedRef.current) / 620, 0, 1);
    if (currentMaterialRef.current) currentMaterialRef.current.opacity = blend;
    if (previousMaterialRef.current) previousMaterialRef.current.opacity = 1 - blend;
    if (currentScreenRef.current) currentScreenRef.current.scale.setScalar(0.985 + blend * 0.015);
    if (previousScreenRef.current) previousScreenRef.current.scale.setScalar(1 + blend * 0.012);
    if (reflectionRef.current) {
      reflectionRef.current.position.x = -0.128 + ((clock.elapsedTime * 0.035) % 0.256);
      reflectionRef.current.material.opacity = reduceMotion ? 0.018 : 0.028 + transitionLift * 0.015;
    }
  });

  return (
    <group ref={groupRef} scale={MODEL_SCALE} position={[0, -1.43, 0]}>
      <primitive object={model} />
      <group position={SCREEN_POSITION} rotation={[SCREEN_ROTATION_X, 0, 0]}>
        {previousTexture && (
          <mesh ref={previousScreenRef} position={[0, 0, 0.0007]} renderOrder={3}>
            <planeGeometry args={SCREEN_SIZE} />
            <meshStandardMaterial ref={previousMaterialRef} map={previousTexture} emissiveMap={previousTexture} emissive="#ffffff" emissiveIntensity={0.34} transparent opacity={1} roughness={0.16} metalness={0.01} toneMapped />
          </mesh>
        )}
        {currentTexture && (
          <mesh ref={currentScreenRef} position={[0, 0, 0.0009]} renderOrder={4}>
            <planeGeometry args={SCREEN_SIZE} />
            <meshStandardMaterial ref={currentMaterialRef} map={currentTexture} emissiveMap={currentTexture} emissive="#ffffff" emissiveIntensity={0.34} transparent opacity={1} roughness={0.16} metalness={0.01} toneMapped />
          </mesh>
        )}
        <mesh ref={reflectionRef} position={[-0.128, 0.004, 0.00115]} rotation={[0, 0, -0.2]} renderOrder={5}>
          <planeGeometry args={[0.025, 0.165]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.03} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>
      </group>
    </group>
  );
};

const LaptopFallback = ({ project, linkLabel }) => {
  const [start, glow, end] = projectPalettes[project.id] || projectPalettes[4];
  const logoSource = normalizeAssetSource(project.logo);
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={linkLabel} className="pointer-events-auto absolute inset-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
      <img src="/models/laptop-poster.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-contain" />
      <span className="absolute left-[20%] right-[20%] top-[13%] flex h-[47%] flex-col items-center justify-center gap-2 overflow-hidden bg-slate-950 px-4 text-center" style={{ background: `radial-gradient(circle at 50% 42%, ${glow} 0%, ${start} 50%, ${end} 100%)` }}>
        {logoSource ? <img src={logoSource} alt="" aria-hidden="true" className="max-h-[62%] max-w-[58%] object-contain" /> : <strong className="text-lg text-white sm:text-3xl">{project.titleEn}</strong>}
        <span className="text-[9px] font-bold text-white sm:text-sm">{project.titleEn}</span>
      </span>
    </a>
  );
};

class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(window.WebGL2RenderingContext && canvas.getContext("webgl2")) || Boolean(canvas.getContext("webgl"));
  } catch {
    return false;
  }
};

const PortfolioLaptop3D = ({ project, activeIndex, travelProgress, total, viewport, reduceMotion, isVisible, linkLabel }) => {
  const [ready, setReady] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(null);
  const mobile = viewport === "mobile";

  useEffect(() => setWebGLAvailable(supportsWebGL()), []);

  const fallback = <LaptopFallback project={project} linkLabel={linkLabel} />;
  return (
    <div className="relative aspect-[1.42] w-full" data-real-3d-laptop data-model-source={MODEL_URL}>
      <img src="/models/laptop-poster.png" alt="" aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`} />
      {webGLAvailable === false && fallback}
      {webGLAvailable && (
        <WebGLErrorBoundary fallback={fallback}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={linkLabel} className="pointer-events-auto absolute inset-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <Canvas
              className={`transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
              shadows="basic"
              dpr={mobile ? [1, 1.2] : [1, 1.5]}
              frameloop={isVisible ? "always" : "never"}
              camera={{ fov: mobile ? 41 : 40, near: 0.1, far: 50, position: [0, mobile ? 0.76 : 1.05, mobile ? 7.5 : 7.7] }}
              gl={{ alpha: true, antialias: !mobile, powerPreference: "high-performance", preserveDrawingBuffer: false }}
              onCreated={({ gl }) => {
                gl.setClearColor(0x000000, 0);
                gl.outputColorSpace = THREE.SRGBColorSpace;
                gl.toneMapping = THREE.ACESFilmicToneMapping;
                gl.toneMappingExposure = 1.04;
              }}
            >
              <Suspense fallback={null}>
                <ResponsiveCamera viewport={viewport} />
                <ambientLight intensity={0.34} color="#dbeafe" />
                <directionalLight position={[-4.8, 7.5, 6.5]} intensity={2.4} color="#fff7ed" castShadow shadow-mapSize-width={mobile ? 256 : 512} shadow-mapSize-height={mobile ? 256 : 512} shadow-bias={-0.00018} />
                <directionalLight position={[5.5, 3, 3]} intensity={1.05} color="#dbeafe" />
                <spotLight position={[0, 6, -5]} intensity={1.6} color="#ffffff" angle={0.58} penumbra={0.92} />
                <Environment preset="studio" resolution={mobile ? 32 : 64} environmentIntensity={0.5} />
                <LaptopModel project={project} activeIndex={activeIndex} travelProgress={travelProgress} total={total} reduceMotion={reduceMotion} onReady={setReady} />
                <ContactShadows position={[0, -1.64, 0.25]} opacity={0.48} scale={7.8} blur={2.3} far={3.8} resolution={mobile ? 128 : 256} color="#020617" frames={isVisible ? Infinity : 1} />
              </Suspense>
            </Canvas>
          </a>
        </WebGLErrorBoundary>
      )}
    </div>
  );
};

useGLTF.preload(MODEL_URL, false, true);

export default PortfolioLaptop3D;
