import "./App.css";
import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function App() {
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
        easing: 'ease-in-out',
        mirror: false,
      }
    );
  }, []);

  return (
    <>
      <BrowserRouter>
        <header className="shadow">
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
