import React from "react";
import A from "../assets/home.png";
import B from "../assets/rev1.png";
import C from "../assets/rev2.png";
import D from "../assets/rev3.png";

function Blog() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 text-dark">
      <div className="mb-4">
        <h2>Travel Memories</h2>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-start gap-3 large-screen-layout">
        <div
          className="image-container d-flex flex-row align-items-center justify-content-center "
          style={{
            border: "rgba(0, 60, 130, 1) solid 1.5px",
            borderRadius: "20px",
            height: "30rem",
            width: "20rem",
            flexShrink: 0,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div className="backdrop"></div>
          <img
            className="image"
            style={{
              objectFit: "cover",
              height: "95%",
              width: "93%",
              borderRadius: "15px",
              transition: "all 0.3s ease-in-out",
            }}
            src={D}
            alt="Lombok"
          />
          <div className="overlay text-start mx-3 mb-3">
            <h4>Sambori</h4>
            <p className="m-0 p-0"> ~ 2 trips</p>
            <p className="m-0 p-0"> ~ 2 travelers</p>
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <div
            className="image-container d-flex flex-row align-items-center justify-content-center"
            style={{
              border: "rgba(0, 60, 130, 1) solid 1.5px",
              borderRadius: "20px",
              height: "14rem",
              width: "40rem",
              flexShrink: 0,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div className="backdrop"></div>
            <img
              className="image"
              style={{
                objectFit: "cover",
                height: "92%",
                width: "96%",
                borderRadius: "15px",
                transition: "all 0.3s ease-in-out",
              }}
              src={C}
              alt="Lombok"
            />
            <div className="overlay text-start mx-3 mb-3">
              <h4>Wakatobi</h4>
              <p className="m-0 p-0"> ~ 2 trips</p>
              <p className="m-0 p-0"> ~ 2 travelers</p>
            </div>
          </div>
          <div className="d-flex flex-row flex-wrap gap-3" style={{ gap: "2em" }}>
            <div
              className="image-container d-flex flex-row align-items-center justify-content-center"
              style={{
                border: "rgba(0, 60, 130, 1) solid 1.5px",
                borderRadius: "20px",
                height: "15rem",
                width: "19.5rem",
                flexShrink: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div className="backdrop"></div>
              <img
                className="image"
                style={{
                  objectFit: "cover",
                  height: "94%",
                  width: "94%",
                  borderRadius: "15px",
                  transition: "all 0.3s ease-in-out",
                }}
                src={B}
                alt="Lombok"
              />
              <div className="overlay text-start mx-3 mb-3">
                <h4>Labengki</h4>
                <p className="m-0 p-0"> ~ 2 trips</p>
                <p className="m-0 p-0"> ~ 2 travelers</p>
              </div>
            </div>
            <div
              className="image-container d-flex flex-row align-items-center justify-content-center"
              style={{
                border: "rgba(0, 60, 130, 1) solid 1.5px",
                borderRadius: "20px",
                height: "15rem",
                width: "19.5rem",
                flexShrink: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div className="backdrop"></div>
              <img
                className="image"
                style={{
                  objectFit: "cover",
                  height: "94%",
                  width: "94%",
                  borderRadius: "15px",
                  transition: "all 0.3s ease-in-out",
                }}
                src={A}
                alt="Lombok"
              />
              <div className="overlay text-start mx-3 mb-3">
                <h4>Labengki</h4>
                <p className="m-0 p-0"> ~ 2 trips</p>
                <p className="m-0 p-0"> ~ 2 travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .overlay {
          background-color: none;
        }
        @media (max-width: 768px) {
          .large-screen-layout {
            flex-direction: column;
          }
          .large-screen-layout > div {
            width: 100% !important;
            height: auto !important;
          }
          .image-container {
            width: 100% !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Blog;
