import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { DissolveMaterial } from "./DissolveMaterial";

import * as THREE from "three";
import { useControls } from "leva";
import { useState } from "react";

const boxMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const sphereMaterial = new THREE.MeshStandardMaterial({ color: "white" });

export const Experience = () => {
  const { itemDisplayed } = useControls({
    itemDisplayed: {
      value: "box",
      options: ["box", "sphere"],
    },
  });

  const [visibleItem, setVisibleItem] = useState(itemDisplayed);
  const onFadeOut = () => setVisibleItem(itemDisplayed);

  return (
    <>
      <OrbitControls />
      {visibleItem === "box" && (
        <mesh>
          <boxGeometry />
          <DissolveMaterial
            baseMaterial={boxMaterial}
            visible={itemDisplayed === "box"}
            onFadeOut={onFadeOut}
          />
        </mesh>
      )}
      {visibleItem === "sphere" && (
        <mesh scale={0.5}>
          <sphereGeometry />
          <DissolveMaterial
            baseMaterial={sphereMaterial}
            visible={itemDisplayed === "sphere"}
            onFadeOut={onFadeOut}
          />
        </mesh>
      )}
      <Environment preset="sunset" />
      <ContactShadows position-y={-1} />
    </>
  );
};
