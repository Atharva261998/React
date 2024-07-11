import React from "react";
import pi,{doublePi,triplePi} from "./maths";
<ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    //doublePi is a function tghats why we using () to activate import
    <li>{triplePi()}</li>
</ul>

///////////////////////

import React from "react";
import ReactDOM from "react-dom";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png
import React from "react"
import {add,multiply,subtract,divide} from "./maths"

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
