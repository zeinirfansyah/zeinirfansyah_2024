import "./App.css";
import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { Blog } from "./pages/Blog";
import { BlogContent } from "./pages/BlogContent";

function App() {

  function navbarScroll() {
    // get header element
    const navbar = document.querySelector("header");
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      navbar.style.backgroundColor = "#fff"; 
      navbar.style.transition = "0.5s";
    } else {
      // change class
      navbar.style.backgroundColor = "#EAECEE"; //antiFlashWhite
      navbar.style.transition = "0.5s";
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      navbarScroll();
    };

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: false,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <header className="shadow bg-antiFlashWhite sticky top-0 z-10">
          <Navbar />
        </header>

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogContent />} />
            </Routes>
          </Suspense>
        </main>
        <footer className="bg-white border border-antiFlashWhite">
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
