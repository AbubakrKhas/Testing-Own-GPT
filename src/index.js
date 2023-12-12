import React from "react";
import { createRoot } from 'react-dom/client';
import "./components/useToggle.js";
import "./components/chat-right-side/chatedscript.js"

// CSS Attachments
import "./index.css";
import "./components/input-and-result/inputed.css"
import "./components/chat-right-side/chated-side.css"
import "./style/teilwindcss.css"
import "vanilla-tilt"


import App from "./App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
