import React, { useEffect, useRef } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdEventAvailable } from "react-icons/md";
import { MdDirectionsBike } from "react-icons/md";
import { FaHiking } from "react-icons/fa";
import { GiEcology } from "react-icons/gi";
import useScrollTriggeredCountUp from "../../components/ScrollTriggetCountUp";
import ImageGalleryComponent from "../../components/imageGallery";
import ContactUS from "../../components/contactUS";
import CarouselComponent from "../../components/carousel";
import LatestFourNews from "../../components/latestFourNews";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  const ref = useRef();
  const count1 = useScrollTriggeredCountUp(ref, 100);
  const count2 = useScrollTriggeredCountUp(ref, 150);
  const count3 = useScrollTriggeredCountUp(ref, 1450);
  const count4 = useScrollTriggeredCountUp(ref, 5000);

  return (
    <div id="homePage">
      <section id="section1">
        <CarouselComponent />

        <div className="socialMediaIcons" data-aos="zoom-in-left">
          <a
            href="https://www.facebook.com/NatureFriends"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icons" />
            <p>Facebook</p>
          </a>

          <a
            href="https://www.instagram.com/naturefriendsaz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="icons" />
            <p>Instagram</p>
          </a>

          <a
            href="https://www.facebook.com/NatureFriends"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icons" />
            <p>LinkedIn</p>
          </a>

          <a
            href="https://www.facebook.com/NatureFriends"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icons" />
            <p>Twitter</p>
          </a>
        </div>
      </section>

      <section id="section2">
        <div className="overlay"> </div>

        <div className="container">
          <h1 data-aos="fade-up">Biz Təbiət Dostlarıyıq</h1>

          <p className="description" data-aos="fade-up">
            Azərbaycanda 2008-ci ildə "Yaşıl Velosipedçilər Klubu" kimi tanınan
            Təbiət Dostları artıq Gənclər Təşkilatı kimi fəaliyyətini davam
            edir. Təşkilat Qafqazda xüsusi ilə də Azərbaycanda ətraf mühitin
            mühafizəsini təşviqi, sağlam həyat tərzinin təbliği, açıq-havada
            təlim və tədrisin inkişafı məqsədi ilə yerli və beynəlxalq layihələr
            icra edir. “Təbiət Dostları - Azərbaycan”, “Beynəlxalq Gənclər
            Təbiət Dostları” (International Young Nature Friends) təşkilatının
            tamhüquqlu üzvü olaraq, hər il müxtəlif beynəlxalq proqramların
            iştirakçısı və təşkilatçısı kimi fəaliyyət göstərir. 120 ildən
            çoxdur ki, Beynəlxalq Təbiət Dostları qrupları dünyanın müxtəlif
            şəhərlərində mütəmadi olaraq maarifləndirici layihələr və turistik
            gəzintilər həyata keçirir. Azərbaycanda Təbiət Dostları Evlərinin
            başlanması biraz zaman alsada dünyanın əksər bölgəsində minlərlə
            Təbiət Dostları Evləri fəaliyyət göstərir.
          </p>

          <div className="counts" data-aos="fade-up">
            <div className="count">
              <h2 ref={ref}>{count1}</h2>
              <h4>Üzvlər</h4>
            </div>
            <hr />

            <div className="count">
              <h2 ref={ref}>{count2}</h2>
              <h4>Ekoloji layihələr və proqramlar</h4>
            </div>
            <hr />

            <div className="count">
              <h2 ref={ref}>{count3}</h2>
              <h4>EkoTuristik səfərlər və turlar</h4>
            </div>
            <hr />

            <div className="count">
              <h2 ref={ref}>{count4}</h2>
              <h4>Beynəlxalq Təbiət Dostları Üzvləri</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div className="container">
          <div className="head" data-aos="fade-up">
            <h2>BİZ NƏ EDİRİK</h2>

            <h1>
              İllərdir Təbiət Dostları Azərbaycanda ekoloji istiqamətdə
              maarifləndirici layihələr və görüşlər edir
            </h1>
          </div>

          <div className="cards">
            <div className="card" data-aos="fade-right">
              <div className="">
                <MdEventAvailable className="icon" />
              </div>

              <div className="cardHead">
                <h2>TƏDBİRLƏR</h2>

                <p className="text">
                  Yerli və beynəlxalq qeyri formal seminarlar, təlimlər,
                  konfranslar və fərqli formatda açıq-havada maarifləndirici
                  tədbirlər
                </p>
              </div>
            </div>

            <div className="card" data-aos="fade-right">
              <div className="">
                <MdDirectionsBike className="icon" />
              </div>

              <div className="cardHead">
                <h2>EKOLOJİ NƏQLİYYATIN TƏBLİĞİ</h2>

                <p className="text">
                  Velosipedin nəqliyyat vasitəsi kimi ölkədə təşfiqi və təbliği.
                  Ölkədə ekoloji nəqliyatın inkişafı üçün şəhərlərin
                  planlamasına və infrastrukturuna daxil olması istiqamətində
                  təkliflərin hazırlanması və təbliğat tədbirlərin təşkili
                </p>
              </div>
            </div>

            <div className="card" data-aos="fade-left">
              <div className="">
                <FaHiking className="icon" />
              </div>

              <div className="cardHead">
                <h2>EKOTURİZM VƏ REKREASİYA</h2>

                <p className="text">
                  Ətraf mühitə qarşı daha da məsuliyyətli olmağa və bölgədə
                  davamlı turizmin inkişafı isiqamətində, quşların müşahidəsi
                  səfərləri (birdwatching), çadır düşərgələri (camping), piyada
                  yürüşlər (hiking) və s. kimi açıq hava tədbirlərinin təşkili.
                </p>
              </div>
            </div>

            <div className="card" data-aos="fade-left">
              <div className="">
                <GiEcology className="icon" />
              </div>

              <div className="cardHead">
                <h2>PROQRAMLARIN TƏŞKİLİ </h2>

                <p className="text">
                  Yerli mütəxəssislərin məsuliyyətli və davamlı turizmin və
                  ətraf mühütün mühafizəsi mövzularında sertifikatlaşdırma
                  proqramları. O cümlədən məktəblilər üçün ekoloji düşərgələrin
                  və ekoturların təşkili.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newsSection">
        <div className="container">
          <div className="head">
            <h1>Xəbərlər</h1>
          </div>

          <LatestFourNews />
        </div>
      </section>

      <section id="section4">
        <div className="head" data-aos="fade-up">
          <h2>SON LAYİHƏLƏRİMİZ</h2>

          <h1>Biz təbiəti və işimizi sevirik, sən də bizə qoşul!</h1>
        </div>

        <div className="container">
          <ImageGalleryComponent />
        </div>
      </section>

      <section id="section5" className="contactUS">
        <div className="container">
          <hr />
          <div className="head" data-aos="fade-up">
            <h2>BİZİMLƏ ƏLAQƏ</h2>
            <h1>Yeni bir layihə üçün müraciət edin</h1>
          </div>

          <ContactUS />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
