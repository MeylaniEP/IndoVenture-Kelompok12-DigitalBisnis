import React, { useState } from "react";
import { IoStar } from "react-icons/io5";

const StarRating = () => {
  const [rating, setRating] = useState(0); // State untuk rating

  // Fungsi untuk menetapkan rating
  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="star-rating d-flex flex-row align-items-center gap-2 fs-5">
      {[1, 2, 3, 4, 5].map((star) => (
        <IoStar
          key={star}
          className="star"
          style={{ color: star <= rating ? "#ffc107" : "#e4e5e9", cursor: "pointer", fontSize:"0.3em" }}
          size={30}
          onClick={() => handleRating(star)}
        />
      ))}
      <p className="rating-text m-0 p-0">{rating}</p>
    </div>
  );
};

export default StarRating;
