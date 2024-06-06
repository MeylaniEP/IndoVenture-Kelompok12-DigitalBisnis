import React from "react";
import Meylani from "../../assets/Meylani.jpeg";
import Aviva from "../../assets/aviva (1).jpeg";
import Nabiila from "../../assets/nabiila (1).jpg";
import Fadlur from "../../assets/fadlur (1).jpg";

function Testimony() {
  const testimonials = [
    {
      img: Meylani,
      name: "Meylani 21.11.4393",
      text: "Outstanding service and very responsive. Thank you Exploreindo Travel!",
    },
    {
      img: Aviva,
      name: "Aviva 21.11.4332",
      text: "Outstanding service and very responsive. Thank you Exploreindo Travel!",
    },
    {
      img: Nabiila,
      name: "Nabiila 21.11.4335",
      text: "Outstanding service and very responsive. Thank you Exploreindo Travel!",
    },
    {
      img: Fadlur,
      name: "Fadlur 21.11.4349",
      text: "Outstanding service and very responsive. Thank you Exploreindo Travel!",
    },
  ];

  return (
    <div className="testimony-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimony-card bg-light" key={index}>
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="testimony-image"
          />
          <div className="testimony-text text-dark" style={{fontSize:"0.4em", fontWeight:"normal"}}>
            <p>"{testimonial.text}"</p>
            <p>- {testimonial.name}</p>
          </div>
        </div>
      ))}
      <style>{`
      .testimony-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
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
}

      `}</style>
    </div>
  );
}

export default Testimony;
