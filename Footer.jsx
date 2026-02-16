

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & Brand */}
        <div className="footer-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Bakery Logo"
            className="footer-logo"
          />
          <h3>SH_Home_Baking</h3>
          <p>Healthy Incorporative Desserts</p>
        </div>

        {/* Address & Contact */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 106, W.G.C Road, Tuticorin, 628002</p>
          <p>📞 +91 8973338989</p>
          <p>✉️ shankarim97@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://wa.me/message/7AM77UCHMQBBN1" aria-label="WhatsApp">💬</a>
            <a href="https://www.instagram.com/sh_home_baking7?igsh=NW1ib2N6M2VqZzNu" aria-label="Instagram">📸</a>
          </div>
        </div>

      </div>

      <p className="footer-bottom">
        © 2024 SH_Home_Baking. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
