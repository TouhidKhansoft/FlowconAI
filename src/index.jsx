import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { BlogList } from "./components/BlogList";
import { BlogDetail } from "./components/BlogDetail";
import './i18n';

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
