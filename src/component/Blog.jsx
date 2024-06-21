import React from "react";
import A from "../assets/a.png";
import B from "../assets/b.png";
import C from "../assets/c.png";
import D from "../assets/d.png";

function Blog() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 text-dark">
      <div className="mb-4">
        <h2>Travel Memories</h2>
      </div>
      <div className="d-flex flex-row justify-content-start gap-3">
          <div
            className="image-container d-flex flex-row align-items-center justify-content-center"
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
              <h4>Lombok</h4>
              <p> 45 Travelers</p>
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
              <h4>Lombok</h4>
              <p> 45 Travelers</p>
            </div>
          </div>
          <div className="d-flex felx-row gap-3" style={{gap:"2em"}}>
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
              <h4>Lombok</h4>
              <p> 45 Travelers</p>
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
              <h4>Lombok</h4>
              <p> 45 Travelers</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <style>{`
      .overlay{
      bacground-color: none;
      }
      `}</style>
    </div>
  );
}

export default Blog;
