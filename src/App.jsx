import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./layouts/Navbar";
import Home from "./pages/Home";

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
              <Route path="/" element=<Home /> />
            </Routes>
          </Suspense>
        </main>
        <footer>
         
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
