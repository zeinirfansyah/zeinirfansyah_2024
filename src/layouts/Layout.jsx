import PropTypes from "prop-types";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Layout = ({ children }) => {
  function navbarScroll() {
    const navbar = document.querySelector("header");
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      navbar.style.backgroundColor = "#fff";
      navbar.style.transition = "0.5s";
    } else {
      navbar.style.backgroundColor = "#EAECEE";
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
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
