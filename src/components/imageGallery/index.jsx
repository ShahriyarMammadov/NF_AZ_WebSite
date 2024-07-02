import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "./index.scss";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { FaLink } from "react-icons/fa";
import Photo1 from "../../assets/imageGallery/Photo1.jpg";
import Photo2 from "../../assets/imageGallery/Photo2.jpg";
import Photo3 from "../../assets/imageGallery/Photo3.jpg";
import Photo4 from "../../assets/imageGallery/Photo4.jpg";
import Photo5 from "../../assets/imageGallery/Photo5.jpg";
import Photo6 from "../../assets/imageGallery/Photo6.jpg";

const Gallery = () => {
  return (
    <div id="imageGallery" className="container">
      <div className="grid-container">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a
            href={Photo1}
            className="grid-content"
            data-aos="fade-up-right"
          >
            <img src={Photo1} />
            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>

          <a
            href={Photo2}
            className="grid-content"
            data-aos="fade-up-right"
          >
            <img src={Photo2} />
            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>

          <a
            href={Photo3}
            className="grid-content"
          >
            <img src={Photo3} />
            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>

          <a
            href={Photo4}
            className="grid-content"
            data-aos="fade-up-left"
          >
            <img src={Photo4} />

            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>

          <a
            href={Photo5}
            className="grid-content"
            data-aos="fade-up-left"
          >
            <img src={Photo5} />
            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>

          <a
            href={Photo6}
            className="grid-content"
            data-aos="fade-up-left"
          >
            <img src={Photo6} />

            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
