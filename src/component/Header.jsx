// import React from "react";
// import Home from "./Home";
// import About from "./About";
// import Trip from "./Trip";
// import Blog from "./Blog";
// import Reviews from "./Reviews";
// import Footer from "./Footer";
// import Background from "../assets/picture.png";

// function Header() {
//   return (
//     <>
//       <div className="d-flex flex-row w-100 fixed-top bg-transparant text-light mt-4">
//         <div className="d-flex flex-row justify-content-between align-items-center mx-5 w-100">
//           <div>
//             <h3>IndoVentures</h3>
//           </div>
//           <div
//             className="d-flex flex-row gap-3"
//             style={{
//               border: "white solid 1px",
//               borderRadius: "20px",
//               padding: "0.5em 2em",
//             }}
//           >
//             <a href="#home" className="text-decoration-none text-light">
//               Home
//             </a>
//             <a href="#about" className="text-decoration-none text-light">
//               About
//             </a>
//             <a href="#trip" className="text-decoration-none text-light">
//               Trip
//             </a>
//             <a href="#blog" className="text-decoration-none text-light">
//               Blog
//             </a>
//             <a href="#reviewer" className="text-decoration-none text-light">
//               Reviews
//             </a>
//           </div>
//         </div>
//       </div>
//       <div id="home" className="d-flex" style={{ height: "100%" }}>
//         <img
//           src={Background}
//           className="img-fluid position-absolute z-1"
//           alt=""
//         />
//         <div className="position-relative z-2 w-100 d-flex flex-column align-items-center" style={{height:"100vh"}}>
//           <Home />
//         </div>
//       </div>
//       <div id="about" className="d-flex bg-light" style={{ height: "100vh" }}>
//         <About />
//       </div>
//       <div id="trip" className="d-flex" style={{ height: "100vh" }}>
//         {/* <Trip /> */}
//       </div>
//       <div id="blog" className="d-flex bg-warning" style={{ height: "100vh" }}>
//         <Blog />
//       </div>
//       <div
//         id="reviewer"
//         className="d-flex bg-primary"
//         style={{ height: "100vh" }}
//       >
//         <Reviews />
//       </div>
//       <div className="d-flex bg-secondary" style={{ height: "45%" }}>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Header;
import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Trip from "./Trip";
import Blog from "./Blog";
import Reviews from "./Reviews";
import Footer from "./Footer";
import Background from "../assets/picture.png";

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
          borderRadius:"0px 0px 16px 16px"
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
            <a href="#reviewer" className="text-decoration-none text-light">
              Reviews
            </a>
          </div>
        </div>
      </div>
      <div id="home" className="d-flex" style={{ height: "100%" }}>
        <img
          src={Background}
          className="img-fluid position-absolute z-1"
          alt=""
        />
        <div
          className="position-relative z-2 w-100 d-flex flex-column align-items-center"
          style={{ height: "100vh" }}
        >
          <Home />
        </div>
      </div>
      <div id="about" className="d-flex bg-light" style={{ height: "100vh" }}>
        <About />
      </div>
      <div id="trip" className="d-flex" style={{ height: "100vh" }}>
        <Trip />
      </div>
      <div id="blog" className="d-flex bg-light" style={{ height: "100vh" }}>
        <Blog />
      </div>
      <div
        id="reviewer"
        className="d-flex"
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
