import logo from "./logo.svg";
import refreshBtn from "./refreshBtnDefault.svg";
import "./App.css";
import React, { useState } from "react";

// Logo component
const Logo = () => <img src={logo} width={180} height={40} alt="logo" />;

// Header component
const Header = () => (
  <div className="App-header">
    <Logo />
  </div>
);

// Hex color generator function
function hexColor() {
  let colorString = "0123456789ABCDEF";
  let color = "";
  // loop to loop through the colorString
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * colorString.length);
    color += colorString[index];
    //conosle log for debug purposes
  }
  console.log("hex function: " + color);
  return "#" + color;
}

// Variable color to store the invocation the the hexColor function
const color = hexColor();
console.log("color variable: " + color);

// Color Pallet component: houses entire color pallet
const ColorPallet = (nColor) => {
  
// Use useState to change the state of color using a button
  const [newColor, setNewColor] = useState(color);
  console.log("state color: " + newColor);

  // Refresh click handler: It invokes hexColor to generate new color
  const handleRefreshclick = () => {
  const i = hexColor();
    setNewColor(i);
    console.log("refresh btn clicked. New i: " + i);
  };

  // JSX return for ColorPallet component
  return (
    <div className="color-pallet">
      <div className="color-hex-display">
        <p style={{ textAlign: "center" }}> {newColor}</p>
        {console.log('hex display color: ' + newColor)}
      </div>
      <div
        className="color-window-display"
        style={{ backgroundColor: newColor }}></div>
        {console.log('color window color: ' + newColor)}
      <div className="">
        <button className="refresh-btn" onClick={handleRefreshclick}>
          <img src={refreshBtn} alt="refresh" className="btn-icon App-logo" />
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-bg-blur">
        <ColorPallet nColor={color} />
      </div>
    </div>
  );
}

export default App;
