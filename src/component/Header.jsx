import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Trip from "./Trip";
import Blog from "./Blog";
import Reviews from "./Reviews";
import Footer from "./Footer";
import Background from "../assets/home.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.innerHeight / 2;
      if (window.scrollY > scrollHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="d-flex flex-row w-100 fixed-top text-light py-3"
        style={{
          backgroundColor: isScrolled ? "rgba(0, 60, 130, 1)" : "transparent",
          transition: "background-color 0.3s",
          borderRadius: "0px 0px 16px 16px",
        }}
      >
        <div className="d-flex flex-row justify-content-between align-items-center mx-5 w-100">
          <div>
            <h3>IndoVentures</h3>
          </div>
          <div
            className="d-flex flex-row gap-3"
            style={{
              border: "white solid 1px",
              borderRadius: "20px",
              padding: "0.5em 2em",
            }}
          >
            <a href="#home" className="text-decoration-none text-light">
              Home
            </a>
            <a href="#about" className="text-decoration-none text-light">
              About
            </a>
            <a href="#trip" className="text-decoration-none text-light">
              Trip
            </a>
            <a href="#blog" className="text-decoration-none text-light">
              Blog
            </a>
            <a href="#reviews" className="text-decoration-none text-light">
              Reviews
            </a>
          </div>
        </div>
      </div>
      <div id="home" className="d-flex align-items-center " style={{ minHeight: "100vh" }}>
        <img
          src={Background}
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: -1 }}
          alt=""
        />
        <div
          className="position-absolute w-100 h-100 z-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="w-100 position-relative z-3">
          <Home />
        </div>
      </div>
      <div id="about" className="d-flex align-items-center bg-light" style={{ minHeight: "100vh" }}>
        <About />
      </div>
      <div id="trip" className="d-flex align-items-center" style={{ minHeight: "100vh" }}>
        <Trip />
      </div>
      <div id="blog" className="d-flex align-items-center bg-light" style={{ minHeight: "100vh" }}>
        <Blog />
      </div>
      <div id="reviews" className="d-flex align-items-center" style={{ minHeight: "100vh" }}>
        <Reviews />
      </div>
      <div className="d-flex bg-secondary" style={{ height: "100vh" }}>
        <Footer />
      </div>
    </>
  );
}

export default Header;
