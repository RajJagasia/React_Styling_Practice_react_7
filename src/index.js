//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let customStyle = {
  color: "red"
};

const time = new Date();
console.log(time.getHours());
let text = "check";
if (time.getHours() < 12) {
  text = "Good Morning";
} else if (time.getHours() < 18 && time.getHours() >= 12) {
  text = "Good Afternoon";
  customStyle.color = "green";
} else {
  text = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle} className="heading">
      {text}
    </h1>
  </div>,
  document.getElementById("root")
);
