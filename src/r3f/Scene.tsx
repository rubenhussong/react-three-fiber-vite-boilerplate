import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";

export default function Scene() {
  return (
    <Canvas style={{ background: "black" }}>
      <Stats />
      <Cube />
      <OrbitControls />
    </Canvas>
  );
}
