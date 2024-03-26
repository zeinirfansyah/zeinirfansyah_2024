import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav
          id="navbar"
          className="flex flex-col md:flex-row gap-4 justify-between"
        >
          <ul id="brand" className="flex items-center justify-between">
            <li>
              <a
                href="https://zeinirfansyah.me/"
                id="brand"
                className="text-xl font-semibold transition-all duration-500 text-night hover:text-diamond"
              >
                ZEIN IRFANSYAH
              </a>
            </li>
            <button
              className="sm:hidden hover:bg-white px-3 py-1 transition-all  duration-500 rounded-lg cursor-pointer shadow"
              onClick={toggleMenu}
              type="button"
            >
              <span className="text-xl">&#9776;</span>
            </button>
          </ul>
          <ul
            id="menu"
            className={`md:flex gap-5 ${
              isMenuOpen ? "" : "hidden"
            } text-stone`}
          >
            <li className="text-stone hover:text-diamond transition-all duration-500">
              <a href="#about">About</a>
            </li>
            <li className="my-5 md:my-0 text-stone hover:text-diamond transition-all duration-500">
              <a href="#about">Experience & Education</a>
            </li>
            <li className="my-5 md:my-0 text-stone hover:text-diamond transition-all duration-500">
              <a href="#certificates">Certificates</a>
            </li>
            <li className="my-5 md:my-0 text-stone hover:text-diamond transition-all duration-500">
              <a href="#skills">Skills</a>
            </li>
            <li className="my-5 md:my-0 text-stone hover:text-diamond transition-all duration-500">
              <a href="#showcases">Showcases</a>
            </li>
            <li className="my-5 md:my-0 text-stone hover:text-diamond transition-all duration-500">
              <a href="">Blog</a>
            </li>
            <li className="my-7 md:my-0 md:ms-7 transition-all duration-500">
              <a
                href="assets/CV/ats_cv_zeinirfansyah_english.pdf"
                download="ats_cv_zeinirfansyah_english.pdf"
                className="bg-diamond text-white font-semibold py-4 px-6 hover:bg-white hover:text-diamond hover:border-diamond border-2 hover:outline-diamond outline-2 outline-dashed outline-offset-4 hover:rounded-xl  transition-all duration-500"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
