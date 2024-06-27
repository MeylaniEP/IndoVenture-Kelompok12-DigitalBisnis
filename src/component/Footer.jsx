import React, { useState } from 'react';
import bg from "../assets/bgfooter2.png";
import ig from "../assets/icons/logo-ig.png";
import fb from "../assets/icons/logo-fb.png";
import yt from "../assets/icons/logo-yt.png";
import x from "../assets/icons/logo-x.png";
import hoverig from "../assets/icons/hover-ig.png";
import hoverfb from "../assets/icons/hover-fb.png";
import hoveryt from "../assets/icons/hover-yt.png";
import hoverx from "../assets/icons/hover-x.png";

function Footer() {
  const [isHovered, setIsHovered] = useState({
    ig: false,
    fb: false,
    yt: false,
    x: false,
  });

  const handleMouseEnter = (icon) => {
    setIsHovered({ ...isHovered, [icon]: true });
  };

  const handleMouseLeave = (icon) => {
    setIsHovered({ ...isHovered, [icon]: false });
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 text-light fw-bold fs-1'>
      {/* Footer Atas */}
      <div className="d-flex flex-row w-100 p-5" style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 60, 130, 0.8), rgba(0, 60, 130, 0)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="bg-gradient w-100 d-flex justify-content-center position-relative p-5">
          <span className="title-text position-absolute font-inter mt-4">
            Let Us Show You Indonesia
          </span>
          <div className="d-flex flex-column align-items-center position-relative box-sizing-border py-5">
            <div className="text-center text-white mb-1 mt-5 font-inter">
              <p className="fw-light fs-6">“Temukan Petualangan Anda, Menjelajahi Destinasi yang Tak Terlupakan.”</p>
            </div>
            <div className="d-flex flex-column text-center text-white mb-0 font-inter">
              <p className="fw-light fs-6 mb-0">Kami akan bekerja sama dengan Anda untuk membuat rencana perjalanan khusus</p>
              <p className="fw-light fs-6 mb-0">yang sesuai dengan kebutuhan dan anggaran Anda. Kami juga akan membantu Anda</p>
              <p className="fw-light fs-6 mb-0">memesan penerbangan, hotel, dan aktivitas. Dan yang terbaik dari semuanya, kami</p>
              <p className="fw-light fs-6 mb-0">akan memberi Anda diskon 10% pada perjalanan pertama Anda bersama kami!</p>
            </div>
            <div className="contact-button d-flex justify-content-center align-items-center w-100">
              <div className="contact-us mt-5 px-5 py-2" 
                style={{border: "white solid 2px", borderRadius: "25px"}}>
                <h5 className="contact">Contact Us</h5>
                <style>{`
                  .contact-us {
                    border: rgba(0, 60, 130, 1) solid 2px;
                    border-radius: 25px;
                    transition: background-color 0.3s, color 0.3s;
                  }

                  .contact-us:hover {
                    background-color: white;
                    cursor: pointer;
                    color: black;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bawah */}
      <div style={{backgroundColor: 'rgba(0, 60, 130, 1)'}}>
        <div className='grid d-flex justify-content-center'>
          <div className='border border-1 rounded-5 my-5 mx-4 p-5'>
            <div className='text-start'>
              <h2>Indoventures</h2>
              <p className="fw-light fs-6 mb-0">Kami menciptakan pengalaman perjalanan tak terlupakan yang akan anda hargai sepanjang hidup anda</p>
              <div className='d-flex grid'>
                <div className='m-2'>
                  <a href="" className='click-ig'>
                    <img
                      style={{
                        transform: isHovered.ig ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.3s"
                      }} 
                      src={isHovered.ig ? hoverig : ig} 
                      alt="Instagram" 
                      onMouseEnter={() => handleMouseEnter('ig')}
                      onMouseLeave={() => handleMouseLeave('ig')}
                    />
                  </a>
                </div>
                <div className='m-2'>
                  <a href="" className='click-ig'>
                    <img
                      style={{
                        transform: isHovered.fb ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.3s"
                      }} 
                      src={isHovered.fb ? hoverfb : fb} 
                      alt="Facebook" 
                      onMouseEnter={() => handleMouseEnter('fb')}
                      onMouseLeave={() => handleMouseLeave('fb')}
                    />
                  </a>
                </div>
                <div className='m-2'>
                  <a href="" className='click-ig'>
                    <img
                      style={{
                        transform: isHovered.yt ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.3s"
                      }} 
                      src={isHovered.yt ? hoveryt : yt} 
                      alt="YouTube" 
                      onMouseEnter={() => handleMouseEnter('yt')}
                      onMouseLeave={() => handleMouseLeave('yt')}
                    />
                  </a>
                </div>
                <div className='m-2'>
                  <a href="" className='click-ig'>
                    <img
                      style={{
                        transform: isHovered.x ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.3s"
                      }} 
                      src={isHovered.x ? hoverx : x} 
                      alt="Twitter" 
                      onMouseEnter={() => handleMouseEnter('x')}
                      onMouseLeave={() => handleMouseLeave('x')}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='border border-1 rounded-5 my-5 mx-4 p-5'>
            <div>
              <h2>Take a trip with us</h2>
              <p className="fw-light fs-6 mb-0">Berlanggananlah untuk menjadi orang pertama yang mengetahui tentang perjalanan baru kami dan promosi tambahan</p>
              <div className='input-group mb-3'>
                <input type="text" className='form-control' placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">Subscribe</button>
              </div>
            </div>
          </div>
          <div className='border border-1 rounded-5 my-5 mx-4 p-5'>
            <div className='text-start'>
              <h2 className=''>About</h2>
              <ul className='fw-light fs-5'>
                <li>About us</li>
                <li>Career</li>
                <li>News & Articles</li>
                <li>Partners</li>
              </ul>
            </div>
          </div>
          <div className='border border-1 rounded-5 my-5 mx-3 p-5'>
            <div className='text-start'>
              <h2 className=''>Support</h2>
              <ul className='fw-light fs-5 list-group'>
                <li className='list-grup-item'>Contact</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center text-center mb-3'>
            <h3>Copyright ©2024. All Rights Reserved.</h3>
          </div>
      </div>
    </div>
  )
}

export default Footer;
