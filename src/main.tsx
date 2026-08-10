import { StrictMode, type ReactElement } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container: HTMLElement | null = document.getElementById("root");

if (!container) {
  throw new Error("Root container #root is missing from index.html");
}

const app: ReactElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The build prerenders the page into #root, so a populated container must be
// hydrated rather than re-rendered from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
