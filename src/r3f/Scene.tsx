import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas style={{ background: "black" }}>
      <Stats />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
