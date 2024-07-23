import React, { useState } from "react";
import StarRating from "./StarRating";
import Komentar from "../../assets/comment.jpg"

const Comentar = () => {
  const [rating, setRating] = useState(0); // State untuk rating
  const [comment, setComment] = useState(""); // State untuk komentar
  const [email, setEmail] = useState(""); // State untuk alamat email

  const submitComment = () => {
    // Di sini bisa ditambahkan logika untuk mengirim komentar ke server atau melakukan tindakan lain
    console.log(`Rating: ${rating}, Comment: ${comment}, Email: ${email}`);
    // Reset form setelah submit (opsional)
    setRating(0);
    setComment("");
    setEmail("");
  };

  return (
    <div className="container">
      <div
        className="kolomKomentar d-flex flex-row gap-5 mx-1 py-4 px-5"
        style={{
          borderRadius: "0.5em",
          border: "rgba(0, 60, 130, 1) solid 1px",
        }}
      >
        <div className="ulasan">
          <h4>Beri Komentar</h4>
          <div className="mb-0">
            <StarRating />
          </div>
          <div className="mb-0">
            <label
              htmlFor="email"
              className="form-label"
              style={{
                fontWeight: "normal",
                fontSize: "0.5em",
                fontFamily: "arial",
              }}
            >
              Alamat Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="comment"
              className="form-label"
              style={{
                fontWeight: "normal",
                fontSize: "0.5em",
                fontFamily: "arial",
              }}
            >
              Komentar:
            </label>
            <textarea
              className="form-control"
              id="comment"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={submitComment}>
            Submit
          </button>
        </div>
        <div className="komentar d-flex justify-content-center" >
          <img className="img-fluid" src={Komentar} alt="https://www.vecteezy.com/free-vector/comment" />
        </div>
      </div>
      <style>{`
      .ulasan {
        width : 50%;
      }
      .komentar{
        display: flex;
        width: 40%;
      }
        .kolomKomentar{
        dislay: flex;
        flex: row;
        gap: 5em;
        padding: 4em 5em 4em 5em;
        margin: 0px 1em 0px 1em;
        }
      @media (max-width: 768px) {
      .ulasan {
        width : 100%;
      }
      .komentar {
        display: none;
        width: 0px;
      }
        }
      `}</style>
    </div>
  );
};

export default Comentar;
