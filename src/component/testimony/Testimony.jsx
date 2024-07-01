import React, { useState } from "react";
import Meylani from "../../assets/Meylani.jpeg";
import Aviva from "../../assets/aviva (1).jpeg";
import Nabiila from "../../assets/nabiila (1).jpg";
import Fadlur from "../../assets/fadlur (1).jpg";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";

function Testimony() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      img: Meylani,
      name: "Meylani 21.11.4393",
      text: "Outstanding service and very responsive. Thank you IndoVentures Travel!",
    },
    {
      img: Aviva,
      name: "Aviva 21.11.4332",
      text: "Outstanding service and very responsive. Thank you IndoVentures Travel!",
    },
    {
      img: Nabiila,
      name: "Nabiila 21.11.4335",
      text: "Outstanding service and very responsive. Thank you IndoVentures Travel!",
    },
    {
      img: Fadlur,
      name: "Fadlur 21.11.4349",
      text: "Outstanding service and very responsive. Thank you IndoVentures Travel!",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimony-container">
      {testimonials.map((testimonial, index) => (
        <div
          className={`testimony-card bg-light ${
            index === currentIndex ? "active" : ""
          }`}
          key={index}
        >
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="testimony-image"
          />
          <div
            className="testimony-text text-dark"
            style={{ fontSize: "0.4em", fontWeight: "normal" }}
          >
            <p>"{testimonial.text}"</p>
            <p className="fw-bold">~ {testimonial.name}</p>
          </div>
        </div>
      ))}
      <div className="navigation d-lg-none d-flex justify-content-center">
        <button onClick={handlePrev} className="nav-button d-flex flex-row align-items-center justify-content-center" style={{borderRadius:"100%", width:"40px", height:"40px", cursor:"pointer", backgroundColor:"white", border:"rgba(0, 60, 130, 1) solid 1px"}}>
          <IoIosArrowBack className="text-dark"/>
        </button>
        <button onClick={handleNext} className="nav-button d-flex flex-row align-items-center justify-content-center" style={{borderRadius:"100%", width:"40px", height:"40px", cursor:"pointer", backgroundColor:"white", border:"rgba(0, 60, 130, 1) solid 1px"}}>
          <GrFormNext className="text-dark" />
        </button>
      </div>
      <style>{`
        .testimony-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-bottom: 3em;
        }

        .testimony-card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 15px;
          transition: box-shadow 0.3s ease-in-out;
        }

        .testimony-card:hover {
          box-shadow: 0 8px 16px rgba(0, 60, 130, 1);
        }

        .testimony-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 15px;
        }

        .testimony-text p {
          margin: 0;
          padding: 5px 0;
          font-size: 0.8em;
        }

        .navigation {
          display: none;
        }

        .nav-button {
          background-color: #007bff;
          border: none;
          color: white;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }

        .nav-button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .testimony-container {
            flex-direction: column;
          }

          .testimony-card {
            width: 100%;
            display: none;
          }

          .testimony-card.active {
            display: flex;
          }

          .navigation {
            display: flex;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default Testimony;
