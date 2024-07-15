import React, { useState } from "react";
import "./index.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
} from "react-icons/fa6";
import axios from "axios";
import { Button, message, Space } from "antd";
import { BASE_URL } from "../../constants";

const ContactUS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [subject, setSubject] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        name.length < 5 ||
        email.length < 5 ||
        messageText.length < 5 ||
        subject.length < 3
      ) {
        return messageApi.warning({
          type: "warning",
          content: "Məlumatları tam daxil edin!",
        });
      }
      setLoading(true);

      const { data } = await axios.post(`${BASE_URL}contactUS`, {
        fullName: name,
        email: email,
        subject: subject,
        message: messageText,
      });

      console.log(data);
      setLoading(false);

      messageApi.open({
        type: "success",
        content:
          "Müraciətiniz uğurla yaradıldı, ən qısa zamanda geri dönüş edəcik ❤",
      });
    } catch (error) {
      console.log(error?.response);
      setLoading(false);

      messageApi.open({
        type: "error",
        content: "Xəta baş verdi",
      });
    }
  };

  return (
    <div id="contactUs" data-aos="fade-up">
      {contextHolder}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Mövzu"
            />

            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              cols="30"
              rows="10"
              placeholder="Mesajın"
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Göndərilir" : "Göndər"}
            </button>
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
                info@naturefriendsazerbaijan.org
              </a>
              <a href="naturefriendsazerbaijan@gmail.com">
                naturefriendsazerbaijan@gmail.com
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
