'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/laptop.glb";

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

const useProjectScreenTexture = (project) => {
  const canvas = useMemo(() => {
    const element = document.createElement("canvas");
    element.width = 1024;
    element.height = 576;
    return element;
  }, []);
  const texture = useMemo(() => {
    const nextTexture = new THREE.CanvasTexture(canvas);
    nextTexture.colorSpace = THREE.SRGBColorSpace;
    nextTexture.anisotropy = 8;
    nextTexture.minFilter = THREE.LinearMipmapLinearFilter;
    nextTexture.magFilter = THREE.LinearFilter;
    return nextTexture;
  }, [canvas]);

  useEffect(() => {
    const context = canvas.getContext("2d");
    if (!context || !project) return undefined;
    const [start, glow, end] = projectPalettes[project.id] || projectPalettes[4];
    const background = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    background.addColorStop(0, start);
    background.addColorStop(0.54, glow);
    background.addColorStop(1, end);
    context.fillStyle = background;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const vignette = context.createRadialGradient(512, 245, 40, 512, 288, 620);
    vignette.addColorStop(0, "rgba(255,255,255,0.08)");
    vignette.addColorStop(0.52, "rgba(255,255,255,0.01)");
    vignette.addColorStop(1, "rgba(0,0,0,0.58)");
    context.fillStyle = vignette;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "rgba(255,255,255,0.92)";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "700 34px Arial, sans-serif";
    context.letterSpacing = "2px";
    context.fillText(project.titleEn, 512, 486);

    const logoSource = normalizeAssetSource(project.logo);
    let cancelled = false;
    if (!logoSource) {
      context.font = "800 82px Arial, sans-serif";
      context.fillText(project.titleEn, 512, 270);
      texture.needsUpdate = true;
      return undefined;
    }

    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (cancelled) return;
      drawCoverImage(context, image, 512, 255, 470, 330);
      texture.needsUpdate = true;
    };
    image.onerror = () => {
      if (cancelled) return;
      context.font = "800 76px Arial, sans-serif";
      context.fillText(project.titleEn, 512, 270);
      texture.needsUpdate = true;
    };
    image.src = logoSource;
    texture.needsUpdate = true;
    return () => { cancelled = true; };
  }, [canvas, project, texture]);

  useEffect(() => () => texture.dispose(), [texture]);
  return texture;
};

const ResponsiveCamera = ({ viewport }) => {
  const { camera } = useThree();
  useEffect(() => {
    const mobile = viewport === "mobile";
    const tablet = viewport === "tablet";
    camera.position.set(0, mobile ? 0.82 : tablet ? 1.18 : 1.34, mobile ? 6.6 : tablet ? 8.55 : 8.05);
    camera.fov = mobile ? 43 : 41;
    camera.near = 0.1;
    camera.far = 50;
    camera.lookAt(0, 0.08, 0);
    camera.updateProjectionMatrix();
  }, [camera, viewport]);
  return null;
};

const LaptopModel = ({ project, activeIndex, travelProgress, total, reduceMotion, onReady }) => {
  const groupRef = useRef(null);
  const { scene } = useGLTF(MODEL_URL, false, true);
  const model = useMemo(() => scene.clone(true), [scene]);
  const screenTexture = useProjectScreenTexture(project);
  const lastIndex = Math.max(0, total - 1);

  useEffect(() => {
    model.traverse((object) => {
      if (!object.isMesh) return;
      object.castShadow = true;
      object.receiveShadow = true;
      object.material = object.material.clone();
      if (object.material?.name === "SpaceGrayAluminum") {
        object.material.metalness = 0.56;
        object.material.roughness = 0.34;
      }
    });
    onReady?.(true);
    return () => {
      model.traverse((object) => {
        if (object.isMesh && object.material?.dispose) object.material.dispose();
      });
    };
  }, [model, onReady]);

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;
    const value = travelProgress.get();
    const bounded = Math.min(lastIndex, Math.max(0, value));
    const local = bounded >= lastIndex ? 0 : bounded - Math.floor(bounded);
    const depth = Math.sin(Math.PI * local);
    const tail = lastIndex === 0 ? Math.min(1, value / 0.35) : Math.min(1, Math.max(0, (value - lastIndex) / 0.35));
    group.rotation.y = reduceMotion ? Math.min(lastIndex, Math.max(0, activeIndex)) * Math.PI * 2 : bounded * Math.PI * 2 + tail * THREE.MathUtils.degToRad(18);
    group.rotation.x = THREE.MathUtils.degToRad(reduceMotion ? 0 : depth * 4.5 + tail * 1.5);
    group.rotation.z = reduceMotion ? 0 : THREE.MathUtils.degToRad(depth * (Math.floor(bounded) % 2 === 0 ? 0.7 : -0.7));
  });

  return (
    <group ref={groupRef} scale={0.96} position={[0, -0.05, 0]}>
      <primitive object={model} />
      <mesh name="DynamicProjectScreen" position={[0, 0.77, -1.595]} renderOrder={3}>
        <planeGeometry args={[5.69, 3.2]} />
        <meshStandardMaterial map={screenTexture} emissiveMap={screenTexture} emissive="#ffffff" emissiveIntensity={0.28} roughness={0.18} metalness={0.02} side={THREE.FrontSide} toneMapped />
      </mesh>
      <mesh name="ScreenGlass" position={[0, 0.77, -1.588]} renderOrder={4}>
        <planeGeometry args={[5.7, 3.21]} />
        <meshPhysicalMaterial color="#ffffff" transparent opacity={0.045} roughness={0.08} metalness={0} transmission={0.05} side={THREE.FrontSide} depthWrite={false} />
      </mesh>
    </group>
  );
};

const PortfolioLaptop3D = ({ project, activeIndex, travelProgress, total, viewport, reduceMotion, isVisible, linkLabel }) => {
  const [ready, setReady] = useState(false);
  const mobile = viewport === "mobile";

  return (
    <div className="relative aspect-[1.42] w-full" data-real-3d-laptop>
      <img
        src="/models/laptop-poster.png"
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`}
      />
      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={linkLabel} className="pointer-events-auto absolute inset-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        <Canvas
          className={`transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
          shadows
          dpr={mobile ? [1, 1.25] : [1, 1.5]}
          frameloop={isVisible ? "always" : "never"}
          camera={{ fov: mobile ? 43 : 41, near: 0.1, far: 50, position: [0, mobile ? 0.82 : 1.34, mobile ? 6.6 : 8.05] }}
          gl={{ alpha: true, antialias: !mobile, powerPreference: "high-performance", preserveDrawingBuffer: true }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
            gl.outputColorSpace = THREE.SRGBColorSpace;
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.05;
          }}
        >
          <ResponsiveCamera viewport={viewport} />
          <ambientLight intensity={0.52} color="#dbeafe" />
          <directionalLight position={[-4.5, 6.5, 6]} intensity={2.1} color="#fff7ed" castShadow shadow-mapSize-width={mobile ? 256 : 512} shadow-mapSize-height={mobile ? 256 : 512} shadow-bias={-0.00015} />
          <directionalLight position={[5, 2.5, 2.5]} intensity={0.8} color="#dbeafe" />
          <spotLight position={[0, 5, -5]} intensity={1.45} color="#ffffff" angle={0.56} penumbra={0.9} />
          <Environment preset="studio" resolution={mobile ? 32 : 64} environmentIntensity={0.42} />
          <LaptopModel project={project} activeIndex={activeIndex} travelProgress={travelProgress} total={total} reduceMotion={reduceMotion} onReady={setReady} />
          <ContactShadows position={[0, -1.52, 0.28]} opacity={0.42} scale={8.2} blur={2.5} far={3.4} resolution={mobile ? 128 : 256} color="#020617" frames={isVisible ? Infinity : 1} />
        </Canvas>
      </a>
    </div>
  );
};

export default PortfolioLaptop3D;
