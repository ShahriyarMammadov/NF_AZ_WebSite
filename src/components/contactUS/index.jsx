import React, { useState } from "react";
import "./index.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
} from "react-icons/fa6";

const ContactUS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contactUs" data-aos="fade-up">
      <div className="left">
        <h3>BİZƏ MESAJ GÖNDƏRİN</h3>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adın"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Emailin"
            />

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Mövzu"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="10"
              placeholder="Mesajın"
            ></textarea>

            <button type="submit">Göndər</button>
          </fieldset>
        </form>
      </div>

      <div className="right">
        <h3>ƏLAQƏ MƏLUMATLARI</h3>

        <div className="emailAndPhone">
          <div>
            <p className="colored">Bizi Hardan Tapa Bilərsən</p>
            <p>Sosial Şəbəkələrdən və ya zənglə</p>
          </div>

          <div>
            <p className="colored">Bizə email göndər</p>

            <div className="email">
              <a href="info@naturefriendsazerbaijan.org">
                {" "}
                info@naturefriendsazerbaijan.org
              </a>
              <a href="naturefriendsazerbaijanv@gmail.com">
                naturefriendsazerbaijanv@gmail.com
              </a>
            </div>
          </div>
        </div>

        <p className="colored">Zəng et və ya yaz</p>
        <div className="phone">
          <a href="tel:+994515984130">Phone: (+994) 51 598 4130</a>
          <a href="tel:+994515984130">Whatsapp: (+994) 51 598 4130</a>
        </div>

        <div className="socialMediaIcons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
