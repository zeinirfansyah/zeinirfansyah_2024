import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="shadow">
          <Navbar />
        </header>

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<div className="h-screen max-w-7xl mx-auto flex justify-center items-center">Home</div>} />
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
