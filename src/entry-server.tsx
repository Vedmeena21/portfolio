import { StrictMode } from "react";
import { renderToString } from "react-dom/server";

import App from "./App";

/** Renders the full page to static HTML for the build-time prerender step. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
