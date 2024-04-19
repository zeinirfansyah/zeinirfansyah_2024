import "./App.css";
import Home from "./pages/Home/Home";
import { Blog } from "./pages/Blog/Blog";
import { BlogContent } from "./pages/BlogContent/BlogContent";
import { Layout } from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogContent />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
