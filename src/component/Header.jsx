import React from "react";
import Home from "./Home";
import About from "./About";
import Trip from "./Trip";
import Blog from "./Blog";
import Reviews from "./Reviews";
import Footer from "./Footer";

function Header() {
  return (
    <>
      <div className="d-flex flex-row w-100 fixed-top bg-light">
        <div className="d-flex flex-row justify-content-between align-items-center w-100 mx-3">
          <div>
            <h1>IndoVentures</h1>
          </div>
          <div className="d-flex flex-row gap-3">
            <a href="#home" className="text-decoration-none">Home</a>
            <a href="#about" className="text-decoration-none">About</a>
            <a href="#trip" className="text-decoration-none">Trip</a>
            <a href="#blog" className="text-decoration-none">Blog</a>
            <a href="#reviewer"className="text-decoration-none">Reviews</a>
          </div>
        </div>
      </div>
      <div id="home" className="d-flex bg-success" style={{ height: "100vh" }}>
        <Home />
      </div>
      <div id="about" className="d-flex bg-danger" style={{ height: "100vh" }}>
        <About />
      </div>
      <div id="trip" className="d-flex bg-dark" style={{ height: "100vh" }}>
        <Trip />
      </div>
      <div id="blog" className="d-flex bg-warning" style={{ height: "100vh" }}>
        <Blog />
      </div>
      <div
        id="reviewer"
        className="d-flex bg-primary"
        style={{ height: "100vh" }}
      >
        <Reviews />
      </div>
      <div className="d-flex bg-secondary" style={{ height: "45%" }}>
        <Footer />
      </div>
    </>
  );
}

export default Header;
