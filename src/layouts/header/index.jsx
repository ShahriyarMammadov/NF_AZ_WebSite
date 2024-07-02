import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/td logo 1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.scss";
import { Link } from "react-router-dom";

const Header = () => {
  // const [colorChange, setColorChange] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  const scrollThreshold = 150;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;

  //     if (currentScrollPos >= scrollThreshold) {
  //       setColorChange(true);
  //     } else {
  //       setColorChange(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    AOS.init({
      duration: 1200,
    });

    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (open) {
      AOS.refresh();
    }
  }, [open]);

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <>
      <header data-aos="fade-down">
        <div className="header">
          <div className="left">
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="right">
            <nav>
              <Link to={"/haqqımızda"} onClick={() => setOpen(false)}>
                Haqqımızda
              </Link>
              <Link to={"/fəaliyyətlər"} onClick={() => setOpen(false)}>
                Fəaliyyətlər
              </Link>
              <Link to={"/xəbərlər"} onClick={() => setOpen(false)}>
                Xəbərlər
              </Link>
              <Link to={"/üzvlük"} onClick={() => setOpen(false)}>
                Üzvlük
              </Link>
              <Link to={"/üzvlük"} onClick={() => setOpen(false)}>
                Əlaqə
              </Link>
            </nav>
          </div>
        </div>

        <div className={"mobile"} onClick={() => setOpen(true)}>
          <GiHamburgerMenu />
        </div>

        <div id="drawer" className={open ? "open" : "closed"} ref={drawerRef}>
          <div
            className={open ? "drawerContent  open" : "drawerContent closed"}
          >
            <div className="head">
              <h4>MENU</h4>
              <div className="closeIcon" onClick={() => setOpen(false)}>
                x
              </div>
            </div>

            <nav>
              <Link to={"/haqqımızda"} onClick={() => setOpen(false)}>
                Haqqımızda
              </Link>
              <Link to={"/fəaliyyətlər"} onClick={() => setOpen(false)}>
                Fəaliyyətlər
              </Link>
              <Link to={"/xəbərlər"} onClick={() => setOpen(false)}>
                Xəbərlər
              </Link>
              <Link to={"/üzvlük"} onClick={() => setOpen(false)}>
                Əlaqə
              </Link>
              <a href="#" onClick={() => setOpen(false)}>
                Donate
              </a>
            </nav>

            <p>
              Təbiət Dostları ətraf mühitin mühafizəsi və eko turizmin inkişafı
              üçün fəaliyyətdədir.
            </p>

            <div className="socialMediaIcons">
              <a
                href="https://www.facebook.com/NatureFriends"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="socialIcons" />
              </a>

              <a
                href="https://www.instagram.com/naturefriendsaz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="socialIcons" />
              </a>

              <a
                href="https://www.facebook.com/NatureFriends"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="socialIcons" />
              </a>

              <a
                href="https://www.facebook.com/NatureFriends"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="socialIcons" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
