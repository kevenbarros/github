import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/index.css";
import { QueryProvider } from "@/providers/QueryProvider";
import { Home } from "@/pages/home";
import "@/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <Home />
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>
);
