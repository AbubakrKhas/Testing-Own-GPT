import React from "react";
import { createRoot } from 'react-dom/client';
import "./components/useToggle.js";

// CSS Attachments
import "./index.css";
import "./style/teilwindcss.css"

import App from "./App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
