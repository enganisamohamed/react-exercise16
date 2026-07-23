import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    if (language === "English") {
      setLanguage("Spanish");
    } else {
      setLanguage("English");
    }
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === "English"
          ? "Switch to Spanish"
          : "Switch to English"}
      </button>

      <h1>
        {language === "English" ? "Hello!" : "¡Hola!"}
      </h1>
    </div>
  );
}

export default App;