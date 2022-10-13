import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__desc">
          <h5>台北咖啡圖鑑</h5>
        </div>
        <p>Created by Rowen @ {year}</p>
        <div className="footer__links">
          <a href="/" className="footer__link">
            <FaFacebook size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
