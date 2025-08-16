import React from "react";
import ArticlePage from "./pages/ArticlePage";
import { Routes, Route } from "react-router-dom";

import AuthorPage from "./pages/AuthorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticlePage />} />
      <Route path="/author/:id" element={<AuthorPage />} />
    </Routes>
  );
}

export default App;
