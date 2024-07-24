import React from "react";
import { useNavigate } from "react-router-dom";
import Lombok from "../assets/labengki.png";
import Labengki from "../assets/labengki2.png";
import NTT from "../assets/sambori.png";
import Bali from "../assets/bali.jpg";

const destinations = [
  { id: 1, name: "Labengki", price: "Rp 5 Jt", image: Lombok },
  { id: 2, name: "Sambori", price: "Rp 5 Jt", image: NTT },
  { id: 3, name: "Bali", price: "Rp 5 Jt", image: Bali },
  { id: 4, name: "Labengki", price: "Rp 5 Jt", image: Labengki },
];

function Trip() {
  const navigate = useNavigate();

  const handleBookingClick = (id) => {
    navigate(`/detail-trip/${id}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 fs-1 p-3">
      <div className="overflow-auto no-scrollbar" style={{ maxWidth: "100%" }}>
        <div className="trip d-flex flex-column flex-lg-row justify-content-center align-items-center" style={{ width: "100%" }}>
          <div className="d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-0" style={{ width: "100%", padding: "1rem" }}>
            <h3 className="text-sm text-center text-lg-start" style={{ fontSize: "1.5em" }}>Ultimate Travel</h3>
            <h3 className="text-sm text-center text-lg-start" style={{ fontSize: "1.5em" }}>Experience</h3>
            <p className="fs-6 fw-normal text-sm text-justify text-center text-lg-start" style={{ marginTop: "1rem" }}>
            "Exploreindo Travel menyediakan solusi perjalanan lengkap. Dari
                pemesanan penerbangan, hotel, dan mobil hingga bantuan visa,
                asuransi, dan tur, kami menjaga setiap detail agar Anda dapat
                menikmati pengalaman tanpa khawatir. Dengan mitra global
                terkemuka, kami hadirkan layanan terbaik. Plus, kami siap
                menyusun paket khusus sesuai kebutuhan dan anggaran Anda.
                Bersiaplah untuk petualangan tak terlupakan bersama Exploreindo
                Travel!".
            </p>
          </div>
          <div className="d-flex overflow-auto no-scrollbar" style={{ gap: "1rem", maxWidth: "100%" }}>
            {destinations.map(dest => (
              <div key={dest.id} className="image-container d-flex flex-row align-items-center justify-content-center" style={{
                border: "rgba(0, 60, 130, 1) solid 1.5px", borderRadius: "20px", height: "30rem", width: "20rem", flexShrink: 0, overflow: "hidden", position: "relative"
              }}>
                <div className="backdrop"></div>
                <img className="image" style={{ objectFit: "cover", height: "94%", width: "90%", borderRadius: "15px", transition: "all 0.3s ease-in-out" }} src={dest.image} alt={dest.name} />
                <div className="overlay">
                  <h4>{dest.name}</h4>
                  <p>{dest.price}</p>
                  <button className="tombol btn btn-primary" onClick={() => handleBookingClick(dest.id)}>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .image-container { position: relative; overflow: hidden; border-radius: 20px; }
        .image-container .image { transition: transform 0.3s ease-in-out; }
        .image-container .backdrop { position: absolute; top: 0; left: 0; height: 100%; width: 100%; background-color: rgba(0, 0, 0, 0.5); opacity: 0; transition: opacity 0.3s ease-in-out; z-index: 1; }
        .image-container:hover .image { transform: scale(1.1); }
        .image-container:hover .backdrop { opacity: 1; }
        .overlay { position: absolute; bottom: 0; left: 0; right: 0; color: white; text-align: center; padding: 1rem; opacity: 1; z-index: 2; }
        .overlay h4 { margin: 0; }
        .overlay p { margin: 0.5rem 0; }
        .tombol { background-color: rgba(0, 60, 130, 1); border: none; padding: 0.5rem 1rem; color: white; cursor: pointer; }
        .tombol:hover { background-color: rgba(0, 60, 130, 0.8); }
        @media (max-width: 576px) { .text-sm { font-size: 1.2em; } .fs-6 { font-size: 0.8em; } .text-justify { text-align: justify; } .trip { display: flex; flex-direction: column; } }
        @media (min-width: 577px) and (max-width: 768px) { .text-sm { font-size: 1.4em; } .fs-6 { font-size: 1em; } .text-justify { text-align: justify; } }
        @media (min-width: 769px) { .text-sm { font-size: 1.5em; } .fs-6 { font-size: 1.1em; } .text-justify { text-align: justify; } }
      `}</style>
    </div>
  );
}

export default Trip;
