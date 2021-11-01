import { useState } from "react";
import Ad from "./Ad";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("chocolate");
  const [darkMode, setDarkMode] = useState(true);
  const [adFontsize, setAdFontsize] = useState(24);
  const decreaseSize = () => {
    setAdFontsize((prev) => prev - 1);
  };
  const increaseSize = () => {
    setAdFontsize((prev) => prev + 1);
  };

  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <Ad flavor={flavor} darkTheme={darkMode} fontSize={adFontsize} />
      <h3>What to support</h3>
      <div className="button-container">
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor === "Chocolate"}
          //   className={flavor === "Chocolate" ? "disabled" : ""}
        >
          Chocolate
        </button>
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor === "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <h3>Color Theme</h3>
      <div className="button-container">
        <button onClick={() => setDarkMode(false)} disabled={!darkMode}>
          Light
        </button>
        <button onClick={() => setDarkMode(true)} disabled={darkMode}>
          Dark
        </button>
      </div>
      <h3>Font Size</h3>

      <div className="button-container">
        <button onClick={decreaseSize}>Down</button>
        <p>{adFontsize}</p>
        <button onClick={increaseSize}>Up</button>
      </div>
    </div>
  );
};

export default AdDesigner;
