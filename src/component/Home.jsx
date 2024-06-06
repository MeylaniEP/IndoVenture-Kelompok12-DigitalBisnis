import React from "react";
import FilterDropdown from "./homeComponents/FilterDropdown";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 text-light fw-bold fs-1">
      <div>
        <h1 className="text-center" style={{ fontSize: "2.5em" }}>
          Explore Our IndoVentures
        </h1>
      </div>
      <div>
        <FilterDropdown />
      </div>
    </div>
  );
}

export default Home;
