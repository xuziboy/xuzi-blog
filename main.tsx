import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./app/page";
import ArticlePage from "./app/article";
import "./app/globals.css";

const isArticlePage = window.location.pathname.includes("/article/ming-dynasty");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isArticlePage ? <ArticlePage /> : <Home />}
  </StrictMode>,
);
