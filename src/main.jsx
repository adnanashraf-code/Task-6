import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UsercontextProvider from "./context/UsercontextProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UsercontextProvider>
        <App />
      </UsercontextProvider>
    </BrowserRouter>
  </StrictMode>
);
