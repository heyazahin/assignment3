import { Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import AuthorPage from "./pages/AuthorPage";

function App() {
  return (
    <>
      <h2> App is rendering</h2>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/author/:id" element={<AuthorPage />} />
      </Routes>
    </>
  );
}

export default App;
