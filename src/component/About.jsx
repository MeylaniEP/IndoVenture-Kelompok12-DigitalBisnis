import React, { useState } from "react";
import Frame5 from "../assets/Frame 5.png";
import VideoOn from "../assets/videoOn.png";

function About() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="d-flex flex-row justify-content-evenly align-items-center w-100 text-dark fw-bold fs-1" style={{height:"100%", marginTop:"2em"}}>
      <div
        className="d-flex flex-column justify-content-start align-items-start"
        style={{ width: "30%" }}
      >
        <h1>Cara Terbaik untuk Berpergian</h1>
        <p
          className=""
          style={{
            fontSize: "0.3em",
            fontWeight: "normal",
            textAlign: "justify",
          }}
        >
          Kami adalah agen perjalanan yang berspesialisasi dalam menciptakan
          pengalaman perjalanan yang disesuaikan untuk klien kami. Kami percaya
          bahwa perjalanan adalah sebuah perjalanan, bukan sekadar tujuan. Kami
          ingin membantu klien kami menciptakan kenangan yang akan bertahan
          seumur hidup.
        </p>
        {/* <p
          className=""
          style={{
            fontSize: "0.3em",
            fontWeight: "normal",
            textAlign: "justify",
          }}
        >
          Kami memiliki tim profesional perjalanan berpengalaman yang
          bersemangat membantu klien kami menjelajahi dunia. Kami memiliki
          pemahaman mendalam tentang budaya dan destinasi yang berbeda, dan kami
          dapat membantu Anda merencanakan perjalanan yang sempurna sesuai
          kebutuhan dan minat Anda.
        </p> */}
        <div className="d-flex flex-row justify-content-between w-100">
          <div>
            <h3 className="m-0">800+</h3>
            <p style={{fontWeight:"normal", fontSize:"0.4em", margin:"0px"}}>Clients</p>
          </div>
          <div>
            <h3 className="m-0">200+</h3>
            <p style={{fontWeight:"normal", fontSize:"0.4em", margin:"0px"}}>Trips</p>
          </div>
        </div>
        <div className="contact-us mt-5 px-5 py-2" style={{border:"rgba(0, 60, 130, 1) solid 2px", borderRadius:"25px"}}>
          <h5 className="contact" >Contact Us</h5>
        </div>
      </div>
      <div>
        <div
          style={{
            border: "rgba(0, 60, 130, 1) solid 1px",
            borderRadius: "16px",
          }}
          className="p-3"
        >
          <img
            style={{
              maxWidth: "300px",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s",
            }}
            src={isHovered ? VideoOn : Frame5}
            alt="img-fluid"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <style>{`
      .contact-us {
        border: rgba(0, 60, 130, 1) solid 2px;
        border-radius: 25px;
        transition: background-color 0.3s, color 0.3s;
      }
      
      .contact-us:hover {
        background-color: rgba(0, 60, 130, 1);
        cursor: pointer;
        color: white;
      }
      `}</style>
    </div>
  );
}

export default About;
