import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Lombok from "../assets/labengki.png";
import Labengki from "../assets/labengki2.png";
import NTT from "../assets/sambori.png";
import Bali from "../assets/bali.jpg";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

const dummyData = {
  1: {
    id: 1,
    name: "Labengki",
    location: "Sulawesi Tenggara",
    image: Lombok,
    mapLink: "https://maps.app.goo.gl/hbaSs7n3Z7vR7fVD7",
    description:
      "Labengki adalah pulau indah di Sulawesi Tenggara, Indonesia. Dikenal dengan pantai pasir putih, air laut jernih, dan terumbu karang yang menakjubkan, Labengki merupakan destinasi ideal untuk snorkeling, diving, dan menikmati keindahan alam. Pulau ini menawarkan pengalaman yang tenang dan alami, dengan akses melalui perjalanan dari kota Kendari.",
  },
  2: {
    id: 2,
    name: "Sambori",
    location: "Nusa Tenggara Barat",
    image: NTT,
    mapLink: "https://maps.app.goo.gl/qew5EeoteMyJ3b7r6",
    description:
      "Sambori, terletak di Pulau Sumba, Indonesia, adalah destinasi wisata yang terkenal dengan keindahan alamnya yang menakjubkan. Dikenal dengan padang savana yang luas, pantai yang masih alami, dan desa tradisional yang kaya budaya, Sambori menawarkan pengalaman otentik di tengah pemandangan yang dramatis. Wisatawan dapat menikmati keindahan alam, mengeksplorasi budaya lokal, dan merasakan suasana pedesaan yang tenang.",
  },
  3: {
    id: 3,
    name: "Ulun Danau Bratan",
    location: "Bali",
    image: Bali,
    mapLink: "https://maps.app.goo.gl/mdboQqBjfcssbKEY8",
    description:
      "Pura Ulun Danu Bratan, Pura Ulun Danu Beratan atau Bratan Pura merupakan sebuah pura dan candi air besar di Bali, Indonesia - candi utama air lainnya menjadi Pura Ulun Danu Batur. Kompleks candi ini terletak di tepi barat laut Danau Bratan di pegunungan dekat Bedugul, Kabupaten Tabanan.",
  },
  4: {
    id: 4,
    name: "Labengki",
    location: "Sulawesi Tenggara",
    image: Labengki,
    mapLink: "https://maps.app.goo.gl/hbaSs7n3Z7vR7fVD7",
    description:
      "Labengki adalah pulau indah di Sulawesi Tenggara, Indonesia. Dikenal dengan pantai pasir putih, air laut jernih, dan terumbu karang yang menakjubkan, Labengki merupakan destinasi ideal untuk snorkeling, diving, dan menikmati keindahan alam. Pulau ini menawarkan pengalaman yang tenang dan alami, dengan akses melalui perjalanan dari kota Kendari.",
  },
};

function DetailsTrip() {
  const { id } = useParams();
  const trip = dummyData[id];
  const navigate = useNavigate();

  const handleBookingClick = () => {
    const whatsappLink =
      "https://api.whatsapp.com/message/W4FYFSIGIPK2F1?autoload=1&app_absent=0";
    window.open(whatsappLink, "_blank");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  if (!trip) {
    return <p>Trip not found</p>;
  }

  return (
    <div>
      {/* Mobile view */}
      <div className="container px-0 d-md-none">
        <button
          className="btn mb-3"
          onClick={handleGoBack}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "black",
            opacity: "50%",
            border: "none",
            borderRadius: "50%",
          }}
        >
          <FaArrowLeft style={{ color: "white" }} />
        </button>
        <div
          style={{
            width: "100%",
            height: "350px",
            overflow: "hidden",
            borderRadius: "0em 0em 2em 2em",
          }}
        >
          <img
            src={trip.image}
            alt={trip.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="mt-2 mx-3 d-flex flex-column justify-content-center">
          <h3>{trip.name}</h3>
          <div className="d-flex flex-row gap-3 m-0 p-0">
            <a
              href={trip.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn d-flex flex-row align-items-center gap-3 m-0 p-0"
            >
              <FaMapMarkerAlt className="blinking-icon" />
              <p className="m-0 fw-bold">{trip.location}</p>
            </a>
          </div>
          <p style={{ textAlign: "justify" }}>{trip.description}</p>
          <button
            className="btn text-light mb-2"
            style={{ backgroundColor: "rgba(0, 60, 130, 1)" }}
            onClick={handleBookingClick}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Desktop view */}
      <div
        className="d-none d-md-block"
        style={{
          position: "relative",
          backgroundImage: `url(${trip.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
          zIndex: "1",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: -1,
          }}
        ></div>
        <button
          onClick={handleGoBack}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "black",
            opacity: "50%",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <FaArrowLeft />
        </button>
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "35px",
              borderRadius: "16px",
              zIndex: 3,
              width: "80%",
              height: "55%",
            }}
          >
            <img
              src={trip.image}
              alt={trip.name}
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "10px",
                marginRight: "2em",
              }}
            />
            <div>
              <h3>{trip.name}</h3>
              <div
                className="gap-3 mb-2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <a
                  href={trip.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn d-flex flex-row align-items-center gap-3 m-0 p-0"
                >
                  <FaMapMarkerAlt className="blinking-icon" />
                  <p
                    className="m-0"
                    style={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    {trip.location}
                  </p>
                </a>
              </div>
              <p style={{ textAlign: "justify" }}>{trip.description}</p>
              <button
                className="btn text-light mb-2"
                style={{
                  backgroundColor: "rgba(0, 60, 130, 1)",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                }}
                onClick={handleBookingClick}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .blinking-icon {
        animation: blink 1s infinite, colorChange 2s infinite;
        }

        @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
        }

        @keyframes colorChange {
        0% { color: red; }
        50% { color: blue; }
        100% { color: red; }
        }

        `}
      </style>
    </div>
  );
}

export default DetailsTrip;
