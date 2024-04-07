//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 0;
//render your react application

setInterval(() => {
    ReactDOM.render(<Home Seconds={seconds} />, document.querySelector("#app"));
    seconds++
}, 1000);


