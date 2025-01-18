import { useState } from "react";

export default function Cube() {
  const [active, setActive] = useState(false);
  return (
    <mesh scale={active ? 2 : 1} onClick={() => setActive(!active)}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}
