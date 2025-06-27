import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { BlogList } from "./components/BlogList";
import { BlogDetail } from "./components/BlogDetail";
import { Layout } from "./components/Layout";
import './i18n';
import { ChatPage } from "./screens/ChatPage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Routes with chatbot bubble */}
        <Route path="/" element={<Layout><Desktop /></Layout>} />
        <Route path="/blogs" element={<Layout><BlogList /></Layout>} />
        <Route path="/blogs/:blogId" element={<Layout><BlogDetail /></Layout>} />
        
        {/* Chat route without chatbot bubble (has its own full-screen chat) */}
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
