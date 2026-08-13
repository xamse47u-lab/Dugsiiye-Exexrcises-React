import { useEffect, useState } from "react";

export const App = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    if (!name) {
      document.title = "Welcome!";
    } else {
      document.title = `${greeting},${name}`;
    }
  }, [name, greeting]);

  return (
    <div>
      <h1>Enter Your Name:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Greeting</h1>
      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
    </div>
  );
};
