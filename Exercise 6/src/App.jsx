import { useState, useEffect } from "react";

function App() {
  const [coodes, setCoodes] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setCoodes({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div>
      <p>Mouse X:{coodes.x}</p>
      <p>Mouse y:{coodes.y}</p>
    </div>
  );
}

export default App;
