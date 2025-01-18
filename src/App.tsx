import Scene from "./r3f/Scene";
import SunIcon from "./ui/SunIcon";

export default function App() {
  return (
    <>
      <SunIcon />
      <div style={{ width: "100%", height: "100%", position: "fixed" }}>
        <Scene />
      </div>
    </>
  );
}
