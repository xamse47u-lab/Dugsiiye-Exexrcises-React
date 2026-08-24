import React, { useContext } from "react";
import LanguageText from "./LanguageText";

function Greating() {
  const language = useContext(LanguageText);

  const messages = {
    en: "Hello!",
    es: "¡Hola!",
  };

  return <h1>{messages[language]}</h1>;
}

export default Greating;
