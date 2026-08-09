import { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <button onClick={handleToggle}>Turn {isToggled ? "of" : "on"}</button>
      <p>{isToggled ? "Button is ON" : "Button is OFF"}</p>
    </>
  );
};

export default ToggleButton;





