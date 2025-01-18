import ReactThreeTestRenderer from "@react-three/test-renderer";
import Cube from "../../../r3f/components/Cube";

describe("Cube has two children", async () => {
  const renderer = await ReactThreeTestRenderer.create(<Cube />);
  it("Should have two children", async () => {
    const mesh = renderer.scene.children[0];
    expect(mesh.allChildren.length).toBe(2);
  });
});

describe("Cube gets bigger on click", async () => {
  const renderer = await ReactThreeTestRenderer.create(<Cube />);
  it("Should get bigger", async () => {
    const mesh = renderer.scene.children[0];
    expect(mesh.props.scale).toBe(1);
    await renderer.fireEvent(mesh, "click");
    expect(mesh.props.scale).toBe(2);
    await renderer.fireEvent(mesh, "click");
    expect(mesh.props.scale).toBe(1);
  });
});
