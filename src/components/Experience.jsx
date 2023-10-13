import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { DissolveMaterial } from "./DissolveMaterial";

import * as THREE from "three";

const boxMaterial = new THREE.MeshStandardMaterial({ color: "white" });

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <DissolveMaterial baseMaterial={boxMaterial} />
      </mesh>
      <Environment preset="sunset" />
      <ContactShadows position-y={-1} />
    </>
  );
};
