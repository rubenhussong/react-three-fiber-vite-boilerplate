export default function SunIcon() {
  return (
    <img
      src="/sun.svg"
      alt="Sun"
      style={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        width: "2.5rem",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    />
  );
}
