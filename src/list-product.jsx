import React from "react";
import ReactDOM from "react-dom/client";

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const Element = (
    <div>
        <h1>List of fruits</h1>
        <ul>
            {fruits.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(Element);