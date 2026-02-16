// components/SocialMedia.jsx
import { FaWhatsapp, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="social-icons">
      <a href="https://wa.me/message/7AM77UCHMQBBN1" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>

      <a href="https://www.instagram.com/sh_home_baking7?igsh=NW1ib2N6M2VqZzNu" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;
