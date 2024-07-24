import React from "react";
import Testimony from "./testimony/Testimony";
import Comentar from "./review/Comentar";

function Reviews() {
  return (
    <>
      <div className="d-flex flex-column  w-100 text-dark fw-bold fs-1 gap-lg-4">
        <div className="d-flex flex-column justify-content-center align-items-center w-100 text-dark fw-bold fs-1 gap-lg-4">
          <div>
            <h1 className="mt-4">Review Clients</h1>
          </div>
          <div>
            <Testimony />
          </div>
        </div>
        {/* <div style={{ width: "100%" }} className="mb-3">
          <Comentar />
        </div> */}
      </div>
    </>
  );
}

export default Reviews;
