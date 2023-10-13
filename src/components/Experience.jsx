import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
      <Environment preset="sunset" />
      <ContactShadows position-y={-1} />
    </>
  );
};
