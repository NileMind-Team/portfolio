'use client'

import { Component, Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/macbook-pro-14.glb";

/* The rear brand mark of the source model is hidden: the showcase runs on unbranded hardware. */
const BRAND_MARK_MESH = "FnbkdmFKVeCCxTX";

/* Display plane placement, expressed in the untouched local space of the source model. */
const SCREEN_POSITION = [0.00008, 0.10231, -0.15686];
const SCREEN_ROTATION_X = Math.atan(-0.362152);
/*
 * The panel covers the whole lid face, not just the active area: the source model exposes a bright
 * aluminium frame there, and a modern machine shows continuous black glass instead. The bezel is
 * painted into the same texture so the display keeps one uniform, very thin border.
 */
/*
 * 2% larger than the lid's active area. At exactly the active area the model's aluminium frame
 * stayed visible as a bright hairline tracing the display, which read as a glowing border once
 * the panel itself was darkened. The small overlap buries it under the painted bezel.
 */
const SCREEN_SIZE = [0.31569, 0.19737];
const BEZEL_X = 0.025;
const BEZEL_Y = 0.04;

const SCREEN_TEXTURE_WIDTH = 1100;
const SCREEN_TEXTURE_HEIGHT = Math.round((SCREEN_TEXTURE_WIDTH * SCREEN_SIZE[1]) / SCREEN_SIZE[0]);

/* Restrained, brand-derived display backgrounds. Each tone is sampled from the project logo itself. */
const SCREEN_THEMES = {
  7: { base: "#04202f", deep: "#010c14", glow: "rgba(56,170,205,0.30)", ink: "#eaf4fb" },
  8: { base: "#08080a", deep: "#000000", glow: "rgba(206,166,86,0.26)", ink: "#f4ead6" },
  9: { base: "#2a1710", deep: "#120a06", glow: "rgba(196,148,104,0.24)", ink: "#f6ece3" },
  2: { base: "#150c0d", deep: "#050303", glow: "rgba(209,32,36,0.26)", ink: "#fbeaea" },
  4: { base: "#05161f", deep: "#01080d", glow: "rgba(41,178,222,0.28)", ink: "#e6f6fd" },
};
const DEFAULT_THEME = { base: "#12161c", deep: "#05080b", glow: "rgba(148,163,184,0.22)", ink: "#eef2f6" };

const clamp01 = (value) => Math.min(1, Math.max(0, value));
const themeFor = (project) => SCREEN_THEMES[project?.id] || DEFAULT_THEME;
const resolveSource = (source) => (typeof source === "string" ? source : source?.src || "");

/* ---------------------------------------------------------------- screen art */

const roundedRect = (context, x, y, width, height, radius) => {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
};

const paintPanel = (context, width, height, project, image) => {
  const theme = themeFor(project);

  const backdrop = context.createLinearGradient(0, 0, width * 0.35, height);
  backdrop.addColorStop(0, theme.base);
  backdrop.addColorStop(1, theme.deep);
  context.fillStyle = backdrop;
  context.fillRect(0, 0, width, height);

  const glow = context.createRadialGradient(width * 0.5, height * 0.42, 0, width * 0.5, height * 0.42, width * 0.52);
  glow.addColorStop(0, theme.glow);
  glow.addColorStop(1, "rgba(0,0,0,0)");
  context.fillStyle = glow;
  context.fillRect(0, 0, width, height);

  const vignette = context.createRadialGradient(width * 0.5, height * 0.46, width * 0.24, width * 0.5, height * 0.5, width * 0.78);
  vignette.addColorStop(0, "rgba(0,0,0,0)");
  vignette.addColorStop(1, "rgba(0,0,0,0.42)");
  context.fillStyle = vignette;
  context.fillRect(0, 0, width, height);

  const centerY = height * 0.43;
  if (image && image.naturalWidth) {
    const maxWidth = width * 0.4;
    const maxHeight = height * 0.5;
    const ratio = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
    const drawWidth = image.naturalWidth * ratio;
    const drawHeight = image.naturalHeight * ratio;
    context.save();
    context.shadowColor = "rgba(0,0,0,0.45)";
    context.shadowBlur = width * 0.03;
    context.drawImage(image, width * 0.5 - drawWidth / 2, centerY - drawHeight / 2, drawWidth, drawHeight);
    context.restore();
  } else {
    context.fillStyle = theme.ink;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = `700 ${Math.round(width * 0.075)}px "Segoe UI", Inter, Arial, sans-serif`;
    context.fillText(project?.titleEn || "", width * 0.5, centerY);
  }

  const label = (project?.titleEn || "").toUpperCase();
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = `600 ${Math.round(width * 0.031)}px "Segoe UI", Inter, Arial, sans-serif`;
  context.letterSpacing = `${Math.round(width * 0.009)}px`;
  context.fillStyle = theme.ink;
  context.globalAlpha = 0.92;
  context.fillText(label, width * 0.5, height * 0.78);
  context.globalAlpha = 1;

  context.strokeStyle = "rgba(255,255,255,0.16)";
  context.lineWidth = Math.max(1, width * 0.0016);
  const underlineWidth = Math.min(width * 0.2, context.measureText(label).width * 0.62);
  context.beginPath();
  context.moveTo(width * 0.5 - underlineWidth / 2, height * 0.855);
  context.lineTo(width * 0.5 + underlineWidth / 2, height * 0.855);
  context.stroke();

  /* Soft off-axis sheen so the panel never reads as a flat sticker. */
  const sheen = context.createLinearGradient(0, 0, width * 0.7, height);
  sheen.addColorStop(0, "rgba(255,255,255,0.035)");
  sheen.addColorStop(0.35, "rgba(255,255,255,0.006)");
  sheen.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = sheen;
  context.fillRect(0, 0, width, height);
};

const paintScreen = (canvas, project, image) => {
  const context = canvas.getContext("2d");
  if (!context) return;
  const { width, height } = canvas;

  context.clearRect(0, 0, width, height);

  /* Glass face with the rounded display corners of a modern lid. */
  context.save();
  roundedRect(context, 0, 0, width, height, height * 0.062);
  context.clip();
  context.fillStyle = "#050608";
  context.fillRect(0, 0, width, height);

  const insetX = width * BEZEL_X;
  const insetY = height * BEZEL_Y;
  const panelWidth = width - insetX * 2;
  const panelHeight = height - insetY * 2;

  context.save();
  roundedRect(context, insetX, insetY, panelWidth, panelHeight, height * 0.028);
  context.clip();
  context.translate(insetX, insetY);
  paintPanel(context, panelWidth, panelHeight, project, image);
  context.restore();

  /* Camera housing, centred in the top border like the real machine. */
  context.fillStyle = "#0a0c0f";
  roundedRect(context, width * 0.455, 0, width * 0.09, insetY * 0.72, insetY * 0.22);
  context.fill();
  context.fillStyle = "#1b2027";
  context.beginPath();
  context.arc(width * 0.5, insetY * 0.36, insetY * 0.13, 0, Math.PI * 2);
  context.fill();

  context.restore();
};

const loadImage = (source) =>
  new Promise((resolve) => {
    if (!source) {
      resolve(null);
      return;
    }
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";
    image.onload = async () => {
      try {
        await image.decode();
      } catch {
        /* Already-decoded pixels stay valid. */
      }
      resolve(image);
    };
    image.onerror = () => resolve(null);
    image.src = source;
  });

const useScreenTextures = (projects, onReady) => {
  const [textures, setTextures] = useState(null);
  const signature = projects.map((project) => `${project.id}:${resolveSource(project.logo)}`).join("|");

  useEffect(() => {
    let cancelled = false;
    const build = async () => {
      const images = await Promise.all(projects.map((project) => loadImage(resolveSource(project.logo))));
      if (cancelled) return;
      const built = projects.map((project, index) => {
        const canvas = document.createElement("canvas");
        canvas.width = SCREEN_TEXTURE_WIDTH;
        canvas.height = SCREEN_TEXTURE_HEIGHT;
        paintScreen(canvas, project, images[index]);
        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 8;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = true;
        texture.needsUpdate = true;
        return texture;
      });
      setTextures(built);
      onReady?.();
    };
    build();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature]);

  useEffect(
    () => () => {
      textures?.forEach((texture) => texture.dispose());
    },
    [textures],
  );

  return textures;
};

const makeShadowTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
  /*
   * Steep falloff on purpose. A gentle one spreads a large, faintly darker pool across a wide part
   * of the frame; over a background that is already almost black that does not read as a shadow at
   * all, it reads as a second block of colour whose edge you can see — and because the device
   * alternates sides between projects, the block visibly swaps left and right as you scroll. Almost
   * all of the density is kept inside the first third of the radius so the pool stays under the
   * chassis and its edge dissolves before it becomes an area.
   */
  gradient.addColorStop(0, "rgba(0,0,0,0.9)");
  gradient.addColorStop(0.28, "rgba(0,0,0,0.5)");
  gradient.addColorStop(0.52, "rgba(0,0,0,0.16)");
  gradient.addColorStop(0.75, "rgba(0,0,0,0.03)");
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
};

/* ---------------------------------------------------------------- model setup */

const luminanceOf = (color) => color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;

const useSpaceBlackModel = () => {
  const { scene } = useGLTF(MODEL_URL, false, true);

  return useMemo(() => {
    const root = scene.clone(true);
    /*
     * Neutral, not blue. The earlier shell colour carried more blue than red, and the studio's
     * cool key multiplied it, which is what made the chassis read as blue graphite rather than
     * Space Black. These are measured values: at #3b3a3a the settled chassis sits at a neutral
     * dark grey and the closed rear lid still resolves as shaped metal instead of a flat hole.
     */
    const shell = new THREE.Color("#3b3a3a");
    const secondary = new THREE.Color("#262525");

    root.traverse((object) => {
      if (!object.isMesh) return;
      if (object.name === BRAND_MARK_MESH) {
        object.visible = false;
        return;
      }
      object.castShadow = false;
      object.receiveShadow = false;
      object.frustumCulled = false;
      const source = object.material;
      const material = Array.isArray(source) ? source[0].clone() : source.clone();
      object.material = material;
      if (!material.color) return;

      const luminance = luminanceOf(material.color);
      if (luminance > 0.5) {
        /*
         * Bead-blasted Space Black anodising: metal, but broad and soft rather than chrome.
         * Metalness stays deliberately low. A metal tints its reflections by its own albedo,
         * so pushing metalness up on a near-black shell drains the reflection along with it
         * and the rear lid collapses to a silhouette. Keeping it part dielectric preserves an
         * uncoloured specular that describes the edges while the albedo stays dark.
         */
        material.color.copy(shell);
        material.metalness = 0.35;
        material.roughness = 0.34;
        material.envMapIntensity = 1.1;
      } else if (luminance > 0.12) {
        material.color.copy(secondary);
        material.metalness = 0.39;
        material.roughness = 0.4;
        material.envMapIntensity = 0.94;
      } else {
        material.metalness = Math.max(material.metalness ?? 0, 0.15);
        material.roughness = THREE.MathUtils.clamp(material.roughness ?? 0.5, 0.26, 0.75);
        material.envMapIntensity = 0.5;
      }
    });

    const box = new THREE.Box3().setFromObject(root);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const metrics = {
      object: root,
      fitScale: 1 / size.x,
      offset: [-center.x, -center.y, -center.z],
      normalizedHeight: size.y / size.x,
      normalizedDepth: size.z / size.x,
    };
    return metrics;
  }, [scene]);
};

/* ---------------------------------------------------------------- camera rig */

const CameraRig = ({ frameWidth, pitch, fov }) => {
  const { camera, size } = useThree();

  useLayoutEffect(() => {
    const aspect = Math.max(0.35, size.width / Math.max(1, size.height));
    const distance = frameWidth / (2 * Math.tan(THREE.MathUtils.degToRad(fov) / 2) * aspect);
    const radians = THREE.MathUtils.degToRad(pitch);
    camera.fov = fov;
    camera.aspect = aspect;
    camera.near = 0.1;
    camera.far = 60;
    camera.position.set(0, Math.sin(radians) * distance, Math.cos(radians) * distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, size.width, size.height, frameWidth, pitch, fov]);

  return null;
};

/* ---------------------------------------------------------------- laptop */

const Laptop = ({ projects, motion, layout, reduceMotion, onReady }) => {
  const groupRef = useRef(null);
  const shadowRef = useRef(null);
  const currentRef = useRef(null);
  const previousRef = useRef(null);
  const sheenRef = useRef(null);
  const shownRef = useRef(-1);
  const blendStartedRef = useRef(0);
  const lastValueRef = useRef(0);
  const lastMovedRef = useRef(0);
  const readyRef = useRef(false);

  const model = useSpaceBlackModel();
  const textures = useScreenTextures(projects, null);
  const shadowTexture = useMemo(() => makeShadowTexture(), []);
  useEffect(() => () => shadowTexture.dispose(), [shadowTexture]);

  const lastIndex = Math.max(0, projects.length - 1);

  useFrame(({ clock }) => {
    const group = groupRef.current;
    if (!group || !textures) return;

    if (!readyRef.current) {
      readyRef.current = true;
      onReady?.();
    }

    const now = performance.now();
    const travel = THREE.MathUtils.clamp(motion.travel.get(), 0, lastIndex);
    const entry = clamp01(motion.entry.get());
    const exit = clamp01(motion.exit.get());

    const segment = Math.min(Math.max(0, Math.floor(travel)), Math.max(0, lastIndex - 1));
    const local = lastIndex === 0 ? 0 : clamp01(travel - segment);
    const lift = Math.sin(Math.PI * local);
    const facing = segment % 2 === 0 ? 1 : -1;

    if (Math.abs(travel - lastValueRef.current) > 0.0004) {
      lastValueRef.current = travel;
      lastMovedRef.current = now;
    }
    const resting = !reduceMotion && now - lastMovedRef.current > 420 && lift < 0.06;
    const breathe = resting ? Math.sin(clock.elapsedTime * 0.9) : 0;

    /* Horizontal journey: settles beside a project, sweeps to the opposite side between them. */
    const settledSide = Math.round(travel) % 2 === 0 ? 1 : -1;
    const startX = layout.offsetX * facing;
    const positionX = reduceMotion ? layout.offsetX * settledSide : startX - 2 * startX * local;
    const positionY = (layout.centerY || 0) + lift * layout.arc + breathe * 0.006 - (1 - entry) * 0.3 + exit * 0.55;
    const positionZ = -lift * layout.depth;

    group.position.set(positionX, positionY, positionZ);
    group.rotation.y = reduceMotion ? 0 : travel * Math.PI * 2;
    group.rotation.x = reduceMotion ? 0 : lift * 0.045 + breathe * 0.0035;
    group.rotation.z = reduceMotion ? 0 : Math.sin(Math.PI * 2 * local) * 0.016 * facing;

    const growth = (1 - lift * 0.05) * (0.9 + 0.1 * entry) * (1 - exit * 0.08);
    group.scale.setScalar(model.fitScale * growth);

    /* A soft contact pool tracks the device instead of paying for a second render pass. */
    const shadow = shadowRef.current;
    if (shadow) {
      const spread = Math.abs(Math.cos(group.rotation.y)) + Math.abs(Math.sin(group.rotation.y)) * model.normalizedDepth;
      /*
       * The sprite has to stay comfortably inside the framed width. It only reads as a shadow
       * because of the transparent rim of its gradient; once the sprite is wider than the frame
       * that rim falls outside the canvas and all that remains on screen is a flat tint covering
       * the whole canvas rectangle, with a hard edge exactly at the canvas bounds. Mobile frames
       * the least world width, so that is where it showed: the sprite was 1.6 units across a
       * 1.3 unit frame. Clamping against frameWidth keeps the falloff on screen at every
       * breakpoint without needing a per-breakpoint constant.
       */
      /*
       * As the device lifts through the turn the pool spreads and softens rather than switching
       * off. Fading it out on lift alone left the laptop with no contact at all mid-turn, which is
       * what made it look like it was floating; a real object rising from a surface throws a wider,
       * fainter shadow, not none.
       */
      const reach = Math.min(spread * growth * (1.15 + lift * 0.38), layout.frameWidth * 0.7);
      const depth = Math.min(model.normalizedDepth * growth * (1.55 + lift * 0.3), layout.frameWidth * 0.46);
      shadow.position.set(positionX, positionY - model.normalizedHeight * 0.5 * growth - 0.03, positionZ + model.normalizedDepth * 0.2);
      shadow.scale.set(reach, depth, 1);
      shadow.material.opacity = (0.44 - lift * 0.16) * entry * (1 - exit);
    }

    /* The panel changes only while the lid faces away from the viewer. */
    const nextIndex = THREE.MathUtils.clamp(Math.round(travel), 0, lastIndex);
    if (nextIndex !== shownRef.current) {
      const current = currentRef.current;
      const previous = previousRef.current;
      if (current && previous) {
        if (shownRef.current >= 0) {
          previous.material.map = current.material.map;
          previous.material.emissiveMap = current.material.emissiveMap;
          previous.material.needsUpdate = true;
        }
        current.material.map = textures[nextIndex];
        current.material.emissiveMap = textures[nextIndex];
        current.material.needsUpdate = true;
        blendStartedRef.current = now;
      }
      shownRef.current = nextIndex;
    }

    const blend = reduceMotion ? THREE.MathUtils.smoothstep((now - blendStartedRef.current) / 420, 0, 1) : 1;
    if (currentRef.current) currentRef.current.material.opacity = blend;
    if (previousRef.current) previousRef.current.material.opacity = 1 - blend;

    if (sheenRef.current) {
      sheenRef.current.position.x = -0.115 + ((clock.elapsedTime * 0.028) % 0.23);
      sheenRef.current.material.opacity = reduceMotion ? 0.012 : 0.018 + lift * 0.012;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <group position={model.offset}>
          <primitive object={model.object} />
          <group position={SCREEN_POSITION} rotation={[SCREEN_ROTATION_X, 0, 0]}>
            {/*
              * The panel is fully matte and takes no environment. A glossy display material
              * gathered a specular sheet from the five studio lights and the bounce card, which
              * washed the artwork out to pale grey and buried the project logo. The screen is a
              * light source, not a mirror: the emissive map alone carries it, and the thin sheen
              * plane below supplies the one glass reflection that reads as real.
              */}
            <mesh ref={previousRef} position={[0, 0, 0.0007]} renderOrder={3}>
              <planeGeometry args={SCREEN_SIZE} />
              <meshStandardMaterial
                emissive="#ffffff"
                emissiveIntensity={1}
                envMapIntensity={0}
                color="#000000"
                transparent
                opacity={0}
                roughness={1}
                metalness={0}
              />
            </mesh>
            <mesh ref={currentRef} position={[0, 0, 0.0009]} renderOrder={4}>
              <planeGeometry args={SCREEN_SIZE} />
              <meshStandardMaterial
                emissive="#ffffff"
                emissiveIntensity={1}
                envMapIntensity={0}
                color="#000000"
                transparent
                opacity={1}
                roughness={1}
                metalness={0}
              />
            </mesh>
            <mesh ref={sheenRef} position={[-0.115, 0.006, 0.0012]} rotation={[0, 0, -0.19]} renderOrder={5}>
              <planeGeometry args={[0.03, 0.2]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.018} depthWrite={false} blending={THREE.AdditiveBlending} />
            </mesh>
          </group>
        </group>
      </group>

      <mesh ref={shadowRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.32, 0]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={shadowTexture} transparent opacity={0.45} depthWrite={false} />
      </mesh>
    </>
  );
};

/* ---------------------------------------------------------------- studio */

const Studio = ({ quality }) => (
  <>
    <ambientLight intensity={0.09} color="#a9adb3" />
    <directionalLight position={[-2.4, 3.4, 2.8]} intensity={0.8} color="#fff4e6" />
    <directionalLight position={[3.2, 1.6, 2.2]} intensity={0.3} color="#e6eefb" />
    <directionalLight position={[0, 2.2, -3.4]} intensity={0.5} color="#c3cfdd" />
    {/* Camera-side key so the closed rear lid still reads as shaped metal when it faces the viewer. */}
    <directionalLight position={[-1.6, 2, 5.5]} intensity={1.15} color="#eef3fb" />
    <Environment resolution={quality === "low" ? 96 : 192} frames={1}>
      <color attach="background" args={["#0b0e13"]} />
      {/* A softbox above and two wrap panels: the classic product-photography set. */}
      <Lightformer form="rect" intensity={2.8} position={[-0.4, 3.4, 1.6]} rotation={[-Math.PI / 2.1, 0, 0]} scale={[4, 1.7, 1]} color="#ffffff" />
      <Lightformer form="rect" intensity={1.5} position={[-3.6, 1.2, 1.6]} rotation={[0, Math.PI / 2.3, 0]} scale={[3.4, 3.2, 1]} color="#eef3ff" />
      <Lightformer form="rect" intensity={1.2} position={[3.6, 0.8, 1.4]} rotation={[0, -Math.PI / 2.3, 0]} scale={[3.4, 2.8, 1]} color="#fff0dc" />
      <Lightformer form="rect" intensity={0.9} position={[0, 0.6, -3.8]} rotation={[0, Math.PI, 0]} scale={[6, 2.6, 1]} color="#aab8c8" />
      <Lightformer form="circle" intensity={0.35} position={[1.4, -2.6, 1.2]} rotation={[Math.PI / 2, 0, 0]} scale={[3, 3, 1]} color="#39424e" />
      {/* Bounce card behind the camera: without it the closed rear lid reflects nothing at 180 degrees. */}
      <Lightformer form="rect" intensity={2.6} position={[-0.9, 1.6, 6]} scale={[8, 5, 1]} color="#e8eef7" />
      <Lightformer form="rect" intensity={1.5} position={[2.8, -0.8, 5.4]} scale={[4, 3.4, 1]} color="#b9c6d6" />
    </Environment>
  </>
);

/* ---------------------------------------------------------------- shell */

class RenderErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onFail?.();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

let webGLSupport = null;
const detectWebGL = () => {
  if (webGLSupport !== null) return webGLSupport;
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") || canvas.getContext("webgl");
    webGLSupport = Boolean(context);
    const lose = context?.getExtension?.("WEBGL_lose_context");
    lose?.loseContext?.();
  } catch {
    webGLSupport = false;
  }
  return webGLSupport;
};

/*
 * frameWidth is the world width the camera frames, and the device is exactly one unit wide,
 * so every ratio below is resolution independent. A long focal length (small fov) keeps the
 * side and rear angles free of the wide-angle stretch a close camera would introduce.
 */
/* Stable identity so React Three Fiber applies it once and leaves the rig in control afterwards. */
const INITIAL_CAMERA = { fov: 15, near: 0.1, far: 60, position: [0, 1, 4.6] };

const LAYOUTS = {
  desktop: { frameWidth: 2.85, offsetX: 0.62, arc: 0.09, depth: 0.52, pitch: 13, fov: 15 },
  tablet: { frameWidth: 2.15, offsetX: 0.36, arc: 0.08, depth: 0.44, pitch: 12.5, fov: 17 },
  /*
   * offsetX is 0 on mobile on purpose. The device stacks above the copy rather than sitting beside
   * it, so there is no column to alternate around: it stays centred through the whole journey and
   * only turns. Any non-zero offset here just reads as the laptop drifting off-centre.
   */
  /*
   * frameWidth is how much world the camera frames, so raising it makes the device smaller inside
   * the same box. At 1.3 the laptop filled 77% of the stage width, and since its height scales with
   * that it ended up nearly touching both edges of a short mobile stage — it read as glued to the
   * header at the top and cropped at the bottom. 1.5 buys clearance at both ends without spending
   * any of the vertical space the journey just reclaimed.
   *
   * centerY lifts the device inside the frame. The model is centred on its bounding box, but an
   * open laptop carries its visual mass low and the camera pitch drops it further, so on the short
   * mobile stage it measured 49px of clearance above and only 17px below. The nudge evens that up.
   */
  mobile: { frameWidth: 1.5, offsetX: 0, arc: 0.045, depth: 0.24, pitch: 11, fov: 21, centerY: 0.07 },
};

const PortfolioLaptop3D = ({ projects, motion, viewport, reduceMotion, active, onReady, onUnavailable }) => {
  const [supported] = useState(() => (typeof window === "undefined" ? false : detectWebGL()));
  const mobile = viewport === "mobile";
  const layout = LAYOUTS[viewport] || LAYOUTS.desktop;

  useEffect(() => {
    if (!supported) onUnavailable?.();
  }, [supported, onUnavailable]);

  if (!supported || !projects.length) return null;

  return (
    <RenderErrorBoundary onFail={onUnavailable}>
      <Canvas
        className="!absolute inset-0"
        dpr={mobile ? [1, 1.25] : [1, 1.6]}
        frameloop={active ? "always" : "never"}
        gl={{ alpha: true, antialias: !mobile, powerPreference: "high-performance", failIfMajorPerformanceCaveat: false }}
        camera={INITIAL_CAMERA}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.02;
        }}
      >
        <Suspense fallback={null}>
          <CameraRig frameWidth={layout.frameWidth} pitch={layout.pitch} fov={layout.fov} />
          <Studio quality={mobile ? "low" : "high"} />
          <Laptop projects={projects} motion={motion} layout={layout} reduceMotion={reduceMotion} onReady={onReady} />
        </Suspense>
      </Canvas>
    </RenderErrorBoundary>
  );
};

useGLTF.preload(MODEL_URL, false, true);

export default PortfolioLaptop3D;
