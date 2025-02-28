import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdEventAvailable, MdKeyboardArrowRight } from "react-icons/md";
import { MdDirectionsBike } from "react-icons/md";
import { FaHiking } from "react-icons/fa";
import { GiEcology } from "react-icons/gi";
import useScrollTriggeredCountUp from "../../components/ScrollTriggetCountUp";
import ImageGalleryComponent from "../../components/imageGallery";
import ContactUS from "../../components/contactUS";
import CarouselComponent from "../../components/carousel";
import LatestFourNews from "../../components/latestFourNews";
import { FaCheck } from "react-icons/fa";
import TD1 from "../../assets/photoCarousel/TD1.jpg";
import TD2 from "../../assets/photoCarousel/TD2.jpg";
import TD3 from "../../assets/photoCarousel/TD3.jpg";
import TD4 from "../../assets/photoCarousel/TD4.jpg";
import TD5 from "../../assets/photoCarousel/TD5.jpg";
import TD6 from "../../assets/photoCarousel/TD6.jpg";
import TD7 from "../../assets/photoCarousel/TD7.jpg";
import TD8 from "../../assets/photoCarousel/TD8.jpg";
import ProjectsComponent from "../../components/projects";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { Spin } from "antd";

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

  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}blog`);

      setBlogData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const ref = useRef();
  const count1 = useScrollTriggeredCountUp(ref, 100);
  const count2 = useScrollTriggeredCountUp(ref, 150);
  const count3 = useScrollTriggeredCountUp(ref, 1450);
  const count4 = useScrollTriggeredCountUp(ref, 5000);

  return (
    <div id="homePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Təbiət Dostları Azərbaycan</title>
        <link
          rel="shortcut icon"
          href="../../assets/td logo 1.png"
          type="image/x-icon"
        />
      </Helmet>

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
        <div className="overlay"></div>

        <div className="container">
          <div className="content">
            <div className="leftSide" data-aos="fade-right">
              <h1>Biz Təbiət Dostlarıyıq</h1>

              <p className="description">
                Azərbaycanda 2008-ci ildə "Yaşıl Velosipedçilər Klubu" kimi
                tanınan Təbiət Dostları artıq Gənclər Təşkilatı kimi
                fəaliyyətini davam edir. Təşkilat Qafqazda xüsusi ilə də
                Azərbaycanda ətraf mühitin mühafizəsini təşviqi, sağlam həyat
                tərzinin təbliği, açıq-havada təlim və tədrisin inkişafı məqsədi
                ilə yerli və beynəlxalq layihələr icra edir. {<br />} “Təbiət
                Dostları - Azərbaycan”, “Beynəlxalq Gənclər Təbiət Dostları”
                (International Young Nature Friends) təşkilatının tamhüquqlu
                üzvü olaraq, hər il müxtəlif beynəlxalq proqramların iştirakçısı
                və təşkilatçısı kimi fəaliyyət göstərir. 120 ildən çoxdur ki,
                Beynəlxalq Təbiət Dostları qrupları dünyanın müxtəlif
                şəhərlərində mütəmadi olaraq maarifləndirici layihələr və
                turistik gəzintilər həyata keçirir. Azərbaycanda Təbiət Dostları
                Evlərinin başlanması biraz zaman alsada dünyanın əksər
                bölgəsində minlərlə Təbiət Dostları Evləri fəaliyyət göstərir.
              </p>

              <button>
                <Link to={"/haqqımızda"}>DAHA ÇOX MƏLUMAT ƏLDƏ EDİN</Link>
              </button>
            </div>

            <div className="rightSide" data-aos="fade-left">
              <div className="events">
                <h1>Uzunmüddətli </h1>
                <h1>Layihələr</h1>
                <div className="text">
                  <span>
                    <i>
                      <FaCheck />{" "}
                    </i>
                  </span>
                  <p>VELOSİPEDÇİNİN SƏHƏRİ</p>
                </div>
                <div className="text">
                  <span>
                    <i>
                      <FaCheck />{" "}
                    </i>
                  </span>
                   <p> GREEN DRINKS</p>
                </div>
                <div className="text">
                  <span>
                    <i>
                      <FaCheck />{" "}
                    </i>
                  </span>
                  <p> EKO TURLAR </p>
                </div>

                <button>
                  <Link to={"/üzvlük"}>BİZƏ QOŞUL</Link>
                </button>
              </div>

              <div className="carousel">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  modules={[EffectCards, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={TD1} alt="" />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img src={TD2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={TD3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={TD4} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={TD5} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={TD6} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={TD7} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={TD8} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div className="counts" data-aos="fade-up">
            <div className="left">
              <div className="count">
                <h2 ref={ref}>{count1}</h2>
                <h4>Üzvlər</h4>
              </div>
              <hr />

              <div className="count">
                <h2 ref={ref}>{count2}</h2>
                <h4>Ekoloji layihələr və proqramlar</h4>
              </div>
            </div>
            <hr className="hiddenHR" />

            <div className="right">
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

      <section id="projectsSection">
        <div className="container">
          <div className="head">
            <h1>Layihələr</h1>
          </div>

          <ProjectsComponent />
        </div>
      </section>

      <section id="blogSection">
        <div className="container">
          <div className="head">
            <h1>Blog</h1>
          </div>

          <div className="blogCards">
            {loading ? (
              <div
                style={{
                  width: "100%",
                  height: "50vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Spin size="large" />
              </div>
            ) : (
              blogData?.slice(0, 4)?.map((e, i) => {
                return (
                  <a
                    key={i}
                    className="card"
                    href={`${e?.fileURL}`}
                    target="_blank"
                  >
                    <div className="image">
                      <img
                        src={`${e?.imageURL}`}
                        alt={e?.title}
                      />
                    </div>

                    <div className="content">
                      <div className="title">
                        <h2>
                          {e?.title} {e?.title?.length > 40 && "...."}
                        </h2>
                      </div>

                      <div className="context">
                        <p
                          dangerouslySetInnerHTML={{ __html: e?.cardContent }}
                        ></p>
                      </div>

                      <h4>
                        <MdKeyboardArrowRight className="icon" /> Daha ətraflı
                      </h4>
                    </div>
                  </a>
                );
              })
            )}
          </div>
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
