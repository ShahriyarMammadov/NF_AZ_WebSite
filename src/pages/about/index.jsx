import React, { useEffect } from "react";
import "./index.scss";
import TDlogo from "../../assets/td logo 1.png";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="aboutPage">
      {/* <div className="backgroundImage">
        <div className="backImageContainer">
          <div className="text">
            <h2>About US</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              possimus corrupti nemo rerum veritatis accusamus provident quos
              autem qui et quo sunt sapiente est, itaque minus optio animi
              aperiam, quas atque ab magnam. Aut ut magnam blanditiis.
            </p>
          </div>
        </div>
      </div> */}
      <div className="logo">
        <img src={TDlogo} alt="" />
      </div>
      <div className="container">
        <div className="header">
          <div>
            <h1>Təbiət Dostları</h1>
            <span>gənclərin ekoloji maariflənməsinə kömək ictimai birliyi</span>
          </div>
        </div>

        <div className="text">
          <p>
            <b> TARİXÇƏ:</b> 2008-ci ilin sentyabr ayında bir qrup gənc
            tərəfindən yaradılıb. İlkin fəaliyyətlərini Yaşıl Velosipedçilər
            Klubu olaraq həyata keçirən yaşıllar inkişafının növbəti mərhələsini
            “Təbiət Dostları” adı altında davam etməyi qərara aldı. Belə ki,
            üzvlərin səs çoxluğu ilə təşkilatın adı “Təbiət Dostları”
            adlandırıldı. Eyni zamanda digər ekoloji fəaliyyətlər müxtəlif
            Klublar adı altında fəaliyyətlərini davam etdilər. Birlik 2013-cü
            ilin aprel ayında Azərbaycan Respublikası Ədliyyə Nazirliyi
            tərəfindən rəsmi olaraq qeydiyyata alındı.
          </p>
          <p>
            <b>MİSSİYA:</b>  Ölkədə ekoloji maariflənmə sahəsində fəaliyyətləri
            gücləndirmək və ictimayətin fəal iştirakı ilə qlobal ekoloji
            problemləri lokal olaraq həllinə çalışmaqdır.
          </p>
        </div>

        <div className="line">
          <div></div>
        </div>

        <div className="header">
          <h3>QARŞIYA QOYULAN VƏZİFƏLƏR:</h3>
        </div>

        <div className="text">
          <p>
            •Azərbaycan cəmiyyətinin bütün təbəqələrindən özəlliklə dövlət,
            qeyri-dövlət, media və biznes strukturlarının nümayəndələri,
            həmçinin tələbələrin fəal iştirakı ilə insanları ətraf mühitə qarşı
            məsuliyyətli yanaşmağa çağırmaq.
            <br />
            •Azərbaycanda ekoloji nəqliyyat vasitələri (velosiped, tramvay və
            s.) üçün yolların salınması, zavodların inşasına və inkişafına nail
            olmaq.
            <br />
            •Azərbaycanda alternativ enerji mənbələrinin (günəş, külək və s.)
            inkişaf etdirilməsinə, hətta lazım olan avadanlıqların ölkədə
            hazırlanmasına və geniş tədbiqinə nail olmaq.
          </p>
        </div>

        <div className="header">
          <h3>FƏALİYYƏT İSTİQAMƏTLƏRİ:</h3>
        </div>

        <div className="text">
          <p>
          •maarifləndirici seminarlar, dəyirmi masalar, konfranslar və s. təşkili
            <br />
            •ekoloji tədiqat layihələlərin təşkili           
            <br />
            •velosipedin nəqliyyat vasitəsi kimi təbliğinin təşkili
          <br />
          •ekoloji məlumatların araşdırılması və yayılmasının təşkili
          <br />
          •ekoloji qiymətləndirmə və monitorinqlərin aparılması
          <br />
          •ekoturistik tədbirlərin təşkili
          <br />
          •ekofototurların təşkili
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
