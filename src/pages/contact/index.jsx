import React, { useEffect } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import ContactUS from "../../components/contactUS";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 100, left: 100, behavior: "smooth" });
  }, []);

  return (
    <div id="contactPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Təbiət Dostları Azərbaycan | Əlaqə</title>
        <link
          rel="shortcut icon"
          href="../../assets/td logo 1.png"
          type="image/x-icon"
        />
      </Helmet>

      <div className="container">
        <ContactUS />
      </div>
    </div>
  );
};

export default ContactPage;
