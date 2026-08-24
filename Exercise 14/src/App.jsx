import { useState } from "react";
import LanguageContext from "./LanguageText";
import Greating from "./Greating";

function App() {
  const [language, setLanguage] = useState("en");

  const ToggleButton = () => {
    setLanguage((prevLan) => (prevLan === "en" ? "es" : "en"));
  };
  return (
    <LanguageContext.Provider value={language}>
      <Greating />
      <button onClick={ToggleButton}>
        switch to {language === "en" ? "Spanish" : "English"}
      </button>
    </LanguageContext.Provider>
  );
}

export default App;
