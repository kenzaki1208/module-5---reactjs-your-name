import React from "react";
import ReactDOM from "react-dom/client";

const name = "Trinh Dinh Duy - Practice ReactJs Name P1";
const element = React.createElement("h1", {style: {textAlign: "center"}}, name);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);