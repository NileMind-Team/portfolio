import { mkdir, writeFile } from "node:fs/promises";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

class NodeFileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((result) => {
      this.result = result;
      this.onloadend?.({ target: this });
    });
  }

  readAsDataURL(blob) {
    blob.arrayBuffer().then((result) => {
      const bytes = Buffer.from(result);
      this.result = `data:${blob.type};base64,${bytes.toString("base64")}`;
      this.onloadend?.({ target: this });
    });
  }
}

globalThis.FileReader ??= NodeFileReader;

const scene = new THREE.Scene();
scene.name = "DoGetherGenericLaptop";

const laptop = new THREE.Group();
laptop.name = "Laptop";
scene.add(laptop);

const aluminum = new THREE.MeshStandardMaterial({
  name: "SpaceGrayAluminum",
  color: 0x666c73,
  metalness: 0.58,
  roughness: 0.34,
});
const aluminumDark = new THREE.MeshStandardMaterial({
  name: "DarkAluminumEdge",
  color: 0x343a40,
  metalness: 0.5,
  roughness: 0.38,
});
const bezel = new THREE.MeshStandardMaterial({
  name: "DisplayBezel",
  color: 0x05070a,
  metalness: 0.08,
  roughness: 0.28,
});
const keyMaterial = new THREE.MeshStandardMaterial({
  name: "KeyboardKeys",
  color: 0x111419,
  metalness: 0.04,
  roughness: 0.58,
});
const trackpadMaterial = new THREE.MeshStandardMaterial({
  name: "TrackpadGlass",
  color: 0x747b82,
  metalness: 0.18,
  roughness: 0.3,
});
const portMaterial = new THREE.MeshStandardMaterial({
  name: "Ports",
  color: 0x080a0d,
  metalness: 0.12,
  roughness: 0.48,
});

const addRoundedMesh = ({ name, size, radius, position, material, parent = laptop, segments = 5 }) => {
  const geometry = new RoundedBoxGeometry(size[0], size[1], size[2], segments, radius);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

addRoundedMesh({
  name: "BaseBody",
  size: [6.4, 0.19, 4.05],
  radius: 0.075,
  position: [0, -1.22, 0.13],
  material: aluminum,
  segments: 7,
});
addRoundedMesh({
  name: "KeyboardDeck",
  size: [6.16, 0.045, 3.78],
  radius: 0.075,
  position: [0, -1.102, 0.08],
  material: aluminum,
  segments: 6,
});

const lid = new THREE.Group();
lid.name = "DisplayAssembly";
laptop.add(lid);

addRoundedMesh({
  name: "LidShell",
  size: [6.26, 3.8, 0.14],
  radius: 0.11,
  position: [0, 0.75, -1.75],
  material: aluminum,
  parent: lid,
  segments: 7,
});
addRoundedMesh({
  name: "FrontBezel",
  size: [6.04, 3.56, 0.055],
  radius: 0.09,
  position: [0, 0.75, -1.64],
  material: bezel,
  parent: lid,
  segments: 6,
});

const screenAnchor = new THREE.Object3D();
screenAnchor.name = "ScreenAnchor";
screenAnchor.position.set(0, 0.77, -1.602);
lid.add(screenAnchor);

const cameraDotGeometry = new THREE.SphereGeometry(0.032, 16, 8);
const cameraDot = new THREE.Mesh(cameraDotGeometry, portMaterial);
cameraDot.name = "Webcam";
cameraDot.position.set(0, 2.42, -1.605);
lid.add(cameraDot);

const hingeGeometry = new THREE.CylinderGeometry(0.105, 0.105, 5.72, 24, 1, false);
const hinge = new THREE.Mesh(hingeGeometry, aluminumDark);
hinge.name = "PhysicalHinge";
hinge.rotation.z = Math.PI / 2;
hinge.position.set(0, -1.1, -1.7);
hinge.castShadow = true;
hinge.receiveShadow = true;
laptop.add(hinge);

const hingeCapGeometry = new THREE.CylinderGeometry(0.115, 0.115, 0.19, 24);
for (const x of [-2.98, 2.98]) {
  const cap = new THREE.Mesh(hingeCapGeometry, aluminum);
  cap.name = x < 0 ? "HingeCapLeft" : "HingeCapRight";
  cap.rotation.z = Math.PI / 2;
  cap.position.set(x, -1.1, -1.7);
  cap.castShadow = true;
  laptop.add(cap);
}

const keyboard = new THREE.Group();
keyboard.name = "IndividualKeyboardKeys";
laptop.add(keyboard);

const rowDefinitions = [
  { z: -1.08, count: 14, width: 0.35, gap: 0.055 },
  { z: -0.68, count: 14, width: 0.35, gap: 0.055 },
  { z: -0.28, count: 13, width: 0.38, gap: 0.055 },
  { z: 0.12, count: 12, width: 0.41, gap: 0.06 },
  { z: 0.52, count: 11, width: 0.42, gap: 0.065 },
];

const sharedKeyGeometries = new Map();
const getKeyGeometry = (width) => {
  const key = width.toFixed(3);
  if (!sharedKeyGeometries.has(key)) {
    sharedKeyGeometries.set(key, new RoundedBoxGeometry(width, 0.072, 0.31, 3, 0.03));
  }
  return sharedKeyGeometries.get(key);
};

rowDefinitions.forEach((row, rowIndex) => {
  const totalWidth = row.count * row.width + (row.count - 1) * row.gap;
  const startX = -totalWidth / 2 + row.width / 2;
  for (let keyIndex = 0; keyIndex < row.count; keyIndex += 1) {
    const key = new THREE.Mesh(getKeyGeometry(row.width), keyMaterial);
    key.name = `Key_${rowIndex + 1}_${keyIndex + 1}`;
    key.position.set(startX + keyIndex * (row.width + row.gap), -1.045, row.z);
    key.castShadow = true;
    key.receiveShadow = true;
    keyboard.add(key);
  }
});

const spacebar = new THREE.Mesh(getKeyGeometry(2.38), keyMaterial);
spacebar.name = "Spacebar";
spacebar.position.set(0, -1.045, 0.92);
spacebar.castShadow = true;
keyboard.add(spacebar);

for (const [index, x] of [-2.48, -2.02, 2.02, 2.48].entries()) {
  const modifier = new THREE.Mesh(getKeyGeometry(0.39), keyMaterial);
  modifier.name = `ModifierKey_${index + 1}`;
  modifier.position.set(x, -1.045, 0.92);
  modifier.castShadow = true;
  keyboard.add(modifier);
}

addRoundedMesh({
  name: "TrackpadRecess",
  size: [2.48, 0.045, 1.08],
  radius: 0.09,
  position: [0, -1.07, 1.48],
  material: trackpadMaterial,
  segments: 6,
});

addRoundedMesh({
  name: "FrontLip",
  size: [1.12, 0.052, 0.085],
  radius: 0.025,
  position: [0, -1.315, 2.17],
  material: aluminumDark,
  segments: 4,
});

const portGeometry = new RoundedBoxGeometry(0.48, 0.085, 0.07, 3, 0.025);
for (const [index, side] of [-1, 1].entries()) {
  const port = new THREE.Mesh(portGeometry, portMaterial);
  port.name = side < 0 ? "LeftUSBPort" : "RightUSBPort";
  port.rotation.y = Math.PI / 2;
  port.position.set(side * 3.205, -1.27, -0.34 + index * 0.68);
  laptop.add(port);
}

const speakerHoleGeometry = new THREE.CylinderGeometry(0.018, 0.018, 0.022, 10);
for (const side of [-1, 1]) {
  for (let row = 0; row < 4; row += 1) {
    for (let column = 0; column < 12; column += 1) {
      const hole = new THREE.Mesh(speakerHoleGeometry, portMaterial);
      hole.name = `Speaker_${side < 0 ? "L" : "R"}_${row}_${column}`;
      hole.position.set(side * (2.62 + column * 0.032), -1.005, -0.9 + row * 0.13);
      laptop.add(hole);
    }
  }
}

laptop.position.y = 0.05;

scene.updateMatrixWorld(true);

const exporter = new GLTFExporter();
const result = await exporter.parseAsync(scene, {
  binary: true,
  onlyVisible: true,
  truncateDrawRange: true,
  maxTextureSize: 1024,
});

await mkdir("public/models", { recursive: true });
await writeFile("public/models/laptop.glb", Buffer.from(result));
console.log(`Wrote public/models/laptop.glb (${Math.round(result.byteLength / 1024)} KB)`);
