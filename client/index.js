import { App } from "../shared/app.js";
import React from "react";
import ReactDOM from "react-dom";

const app = document.querySelector("#app");
ReactDOM.hydrate(<App />, app);
