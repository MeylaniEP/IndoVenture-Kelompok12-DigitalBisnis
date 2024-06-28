import React from "react";
import FilterDropdown from "./homeComponents/FilterDropdown";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 text-light fw-bold fs-1 home-container">
      <div className="home-title-container">
        <h1 className="text-center home-title">Explore Our IndoVentures</h1>
      </div>
      <div className="home-dropdown-container">
        <FilterDropdown />
      </div>
      <style>
        {`
        .home-container {
  padding: 1em;
}

.home-title-container {
  margin-bottom: 1em;
}

.home-title {
  font-size: 2.5em;
}

.home-dropdown-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .home-title {
    font-size: 2em;
  }

  .home-dropdown-container {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .home-title {
    font-size: 1.5em;
  }

  .home-container {
    padding: 0.5em;
  }

  .home-dropdown-container {
    width: 100%;
  }
}

        `}
      </style>
    </div>
  );
}

export default Home;
