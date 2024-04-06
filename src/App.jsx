import "./App.css";
import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

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
        <header className="shadow bg-white sticky top-0 z-10">
          <Navbar />
        </header>

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element=<Home /> />
            </Routes>
          </Suspense>
        </main>
        <footer className="bg-white border-t-2 border-antiFlashWhite">
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
