import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Trip from "./Trip";
import Blog from "./Blog";
import Reviews from "./Reviews";
import Footer from "./Footer";
import Background from "../assets/home.png";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  useEffect(() => {
    const handleSmall = () => {
      if (window.innerWidth < 1024) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    handleSmall();
  }, [window.innerWidth]);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
        style={{
          backgroundColor: (isScrolled || isSmall) ? "rgba(0, 60, 130, 1)" : "transparent",
          transition: "background-color 0.3s",
          borderRadius: "0px 0px 16px 16px",
        }}
      >
        <Container>
          <Navbar.Brand className="text-light" href="#home">
            IndoVentures
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          >
            <FaBars color="white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="custom-navbar">
              <Nav.Link href="#home" className="menu text-light" onClick={handleNavClick}>Home</Nav.Link>
              <Nav.Link href="#about" className="menu text-light" onClick={handleNavClick}>About</Nav.Link>
              <Nav.Link href="#trip" className="menu text-light" onClick={handleNavClick}>Trip</Nav.Link>
              <Nav.Link href="#blog" className="menu text-light" onClick={handleNavClick}>Blog</Nav.Link>
              <Nav.Link href="#reviews" className="menu text-light" onClick={handleNavClick}>Reviews</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
      <div className="d-flex bg-secondary" style={{ height: "100%" }}>
        <Footer />
      </div>
      <style>
        {`
        .custom-navbar {
          border: white solid 1px;
          border-radius: 20px;
          padding: 0px 25px;
        }
          @media (max-width: 768px) {
          .custom-navbar {
            border: transparent solid 1px;
          }
        }
        `}
      </style>
    </>
  );
}

export default Header;
