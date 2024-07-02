// import React, { useState } from "react";
// import Frame5 from "../assets/Frame 5.png";
// import VideoOn from "../assets/videoOn.png";

// function About() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isButtonHovered, setIsButtonHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const handleButtonMouseEnter = () => {
//     setIsButtonHovered(true);
//   };

//   const handleButtonMouseLeave = () => {
//     setIsButtonHovered(false);
//   };

//   return (
//     <div
//       className="d-flex flex-column flex-md-row justify-content-evenly align-items-center w-100 text-dark fw-bold fs-1"
//       style={{ height: "100%", marginTop: "2em" }}
//     >
//       <div
//         className="d-flex flex-column justify-content-start align-items-start text-center text-md-start px-3 px-md-0"
//         style={{ width: "100%", maxWidth: "500px" }}
//       >
//         <h1 className="display-5 display-md-4 fw-bold">
//           Cara Terbaik untuk Berpergian
//         </h1>
//         <p
//           className="mt-3 fs-6 fs-md-5"
//           style={{
//             fontWeight: "normal",
//             textAlign: "justify",
//           }}
//         >
//           Kami adalah agen perjalanan yang berspesialisasi dalam menciptakan
//           pengalaman perjalanan yang disesuaikan untuk klien kami. Kami percaya
//           bahwa perjalanan adalah sebuah perjalanan, bukan sekadar tujuan. Kami
//           ingin membantu klien kami menciptakan kenangan yang akan bertahan
//           seumur hidup.
//         </p>
//         <p
//           className="mt-3 fs-6 fs-md-5"
//           style={{
//             fontWeight: "normal",
//             textAlign: "justify",
//           }}
//         >
//           Kami memiliki tim profesional perjalanan berpengalaman yang
//           bersemangat membantu klien kami menjelajahi dunia. Kami memiliki
//           pemahaman mendalam tentang budaya dan destinasi yang berbeda, dan kami
//           dapat membantu Anda merencanakan perjalanan yang sempurna sesuai
//           kebutuhan dan minat Anda.
//         </p>
//         <div className="d-flex flex-row justify-content-between w-100 mt-4">
//           <div>
//             <h3 className="m-0 fs-5 fs-md-3">170+</h3>
//             <p
//               className="fs-6 fs-md-5"
//               style={{ fontWeight: "normal", margin: "0px" }}
//             >
//               Clients
//             </p>
//           </div>
//           <div>
//             <h3 className="m-0 fs-5 fs-md-3">27+</h3>
//             <p
//               className="fs-6 fs-md-5"
//               style={{ fontWeight: "normal", margin: "0px" }}
//             >
//               Trips
//             </p>
//           </div>
//         </div>
//         <a
//           className="contact-us mt-5 px-5 py-2"
//           style={{
//             textDecoration: "none",
//             color: isButtonHovered ? "white" : "black",
//             border: "rgba(0, 60, 130, 1) solid 2px",
//             borderRadius: "25px",
//             display: "inline-block",
//             textAlign: "center",
//             width: "fit-content",
//             backgroundColor: isButtonHovered ? "rgba(0, 60, 130, 1)" : "transparent",
//             transition: "background-color 0.3s, color 0.3s",
//           }}
//           href="https://chat.whatsapp.com/FOFe150b4XPL59YvWWM7C3"
//           onMouseEnter={handleButtonMouseEnter}
//           onMouseLeave={handleButtonMouseLeave}
//         >
//           <h5 className="m-0">Contact Us</h5>
//         </a>
//       </div>
//       <div className="mt-4 mt-md-0">
//         <div
//           style={{
//             border: "rgba(0, 60, 130, 1) solid 1px",
//             borderRadius: "16px",
//           }}
//           className="p-3"
//         >
//           <img
//             style={{
//               maxWidth: "100%",
//               width: "300px",
//               transform: isHovered ? "scale(1.1)" : "scale(1)",
//               transition: "transform 0.3s",
//             }}
//             src={isHovered ? VideoOn : Frame5}
//             alt="img-fluid"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           />
//         </div>
//       </div>
//       <style>{`
//       .contact-us {
//         border: rgba(0, 60, 130, 1) solid 2px;
//         border-radius: 25px;
//         transition: background-color 0.3s, color 0.3s;
//       }
      
//       @media (max-width: 576px) {
//         .fs-1 {
//           font-size: 1.5rem;
//         }
//         .fs-5 {
//           font-size: 1rem;
//         }
//         .fs-6 {
//           font-size: 0.875rem;
//         }
//         .display-5 {
//           font-size: 2.5rem;
//         }
//         .contact-us {
//           margin-left: auto;
//           margin-right: auto;
//         }
//       }

//       @media (min-width: 577px) {
//         .fs-md-3 {
//           font-size: 1.75rem;
//         }
//         .fs-md-5 {
//           font-size: 1.25rem;
//         }
//         .display-md-4 {
//           font-size: 2rem;
//         }
//       }
//       `}</style>
//     </div>
//   );
// }

// export default About;
import React, { useState } from "react";
import Frame5 from "../assets/Frame 5.png";
import VideoOn from "../assets/videoOn.png";

function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };

  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-evenly align-items-center w-100 text-dark fw-bold fs-1"
      style={{ height: "100%", marginTop: "2em" }}
    >
      <div
        className="d-flex flex-column justify-content-start align-items-start text-center text-md-start px-3 px-md-0"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h1 className="display-5 display-md-4 fw-bold">
          Cara Terbaik untuk Berpergian
        </h1>
        <p
          className="mt-3 fs-6 fs-md-5"
          style={{
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
        <p
          className="mt-3 fs-6 fs-md-5"
          style={{
            fontWeight: "normal",
            textAlign: "justify",
          }}
        >
          Kami memiliki tim profesional perjalanan berpengalaman yang
          bersemangat membantu klien kami menjelajahi dunia. Kami memiliki
          pemahaman mendalam tentang budaya dan destinasi yang berbeda, dan kami
          dapat membantu Anda merencanakan perjalanan yang sempurna sesuai
          kebutuhan dan minat Anda.
        </p>
        <div className="d-flex flex-row justify-content-between w-100 mt-4">
          <div>
            <h3 className="m-0 fs-5 fs-md-3">170+</h3>
            <p
              className="fs-6 fs-md-5"
              style={{ fontWeight: "normal", margin: "0px" }}
            >
              Clients
            </p>
          </div>
          <div>
            <h3 className="m-0 fs-5 fs-md-3">27+</h3>
            <p
              className="fs-6 fs-md-5"
              style={{ fontWeight: "normal", margin: "0px" }}
            >
              Trips
            </p>
          </div>
        </div>
        <a
          className="contact-us mt-5 px-5 py-2"
          style={{
            textDecoration: "none",
            color: isButtonHovered ? "white" : "black",
            border: "rgba(0, 60, 130, 1) solid 2px",
            borderRadius: "25px",
            display: "inline-block",
            textAlign: "center",
            width: "fit-content",
            backgroundColor: isButtonHovered ? "rgba(0, 60, 130, 1)" : "transparent",
            transition: "background-color 0.3s, color 0.3s",
          }}
          href="https://chat.whatsapp.com/FOFe150b4XPL59YvWWM7C3"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          <h5 className="m-0">Contact Us</h5>
        </a>
      </div>
      <div className="mt-4 mt-md-0">
        <div
          style={{
            border: "rgba(0, 60, 130, 1) solid 1px",
            borderRadius: "16px",
          }}
          className="p-3"
        >
          <img
            style={{
              maxWidth: "100%",
              width: "300px",
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
      
      @media (max-width: 576px) {
        .fs-1 {
          font-size: 1.5rem;
        }
        .fs-5 {
          font-size: 1rem;
        }
        .fs-6 {
          font-size: 0.875rem;
        }
        .display-5 {
          font-size: 2.5rem;
        }
        .contact-us {
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media (min-width: 577px) {
        .fs-md-3 {
          font-size: 1.75rem;
        }
        .fs-md-5 {
          font-size: 1.25rem;
        }
        .display-md-4 {
          font-size: 2rem;
        }
      }
      `}</style>
    </div>
  );
}

export default About;
