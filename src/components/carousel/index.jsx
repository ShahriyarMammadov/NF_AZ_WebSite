import React from "react";
import { Carousel } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
import Cover1 from "../../assets/cover/cover1.jpg"
import Cover2 from "../../assets/cover/cover2.jpg"
import Cover3 from "../../assets/cover/cover3.jpg"

const CarouselComponent = ({ data }) => {
  const staticData = [
    {
      coverImage:
      Cover1,
      text: "Təbiət Dostları dünyanın yüzlərlə ölkəsində ətraf mühitin mühafizəsində töhvə vermək məqsədi ilə fəaliyyətdədir.",
      headText: "TƏBİƏT DOSTLARINA XOŞ GƏLMİSİNİZ",
    },
    {
      coverImage:
      Cover2,
        text: "2008-ci ildən ölkədə Velosipedin nəqliyyat vasitəsi kimi təşfiqi və təbliği ilə fəaliyyətdədir. ",
      headText: "EKOLOJİ NƏQLİYYATIN TƏBLİĞİ",
    },
    {
      coverImage:
      Cover3,
      text: "Ətraf mühitə qarşı daha da məsuliyyətli olmağa və bölgədə davamlı turizmin inkişafı isiqamətində açıq hava tədbirlərinin təşkili.",
      headText: "EKOTURİZM VƏ REKREASİYA",
    },
  ];

  return (
    <div id="carousel" className="carousel">
      <Carousel autoplay autoplaySpeed={3000} effect="scrollx">
        {staticData?.map((e, i) => {
          return (
            <div className="cover" key={e?._id}>
              <Link to={`/`}>
                <img
                  src={`${e?.coverImage}`}
                  alt={i}
                  className="carouselImage"
                />
                <div className="overlay"> salam</div>
                <div className="carouselContent">
                  <p className="headText">{e?.headText}</p>
                  <h1>{e?.text}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
