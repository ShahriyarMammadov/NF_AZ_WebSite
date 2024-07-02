import React, { useState } from "react";
import "./index.scss";
import MemberShipAboutPage from "../../components/memberShip/memberShipAboutText";
import MemberShipForm from "../../components/memberShip/memberShipForm";
import SponsorMemberShipForm from "../../components/memberShip/sponsorMemberShipForm";
import { Helmet } from "react-helmet";

const MemberShipPage = () => {
  const [reading, setReading] = useState();

  const handleReadingChange = (newValue) => {
    window.scrollTo({ top: 100, left: 100, behavior: "smooth" });
    setReading(newValue);
  };

  return (
    <div id="memberShip">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Təbiət Dostları Azərbaycan | Üzvlük  qeydiyyat forması</title>
        <link
          rel="shortcut icon"
          href="../../assets/td logo 1.png"
          type="image/x-icon"
        />
      </Helmet>

      <div className="container">
        <div className="headText">
          <h1>Təbiət Dostları - Üzvlük qeydiyyat forması</h1>
          <h4>
            Ətraflı məlumat üçün suallarınızı{" "}
            <a href="mailto:membership@naturefriendsazerbaijan.org">
              membership@naturefriendsazerbaijan.org
            </a>{" "}
            ünvanına göndərə bilərsiniz
          </h4>
        </div>

        {reading === "sponsor" ? (
          <>
            <p className="sponsorAboutText">
              Dəyərli dost! Bu səhifədəsinizsə demək ki, Təbiət Dostlarına
              sponsor (fiziki və ya hüquqi şəxs) olaraq dəstək olmaq
              istəyirsiniz. Düşünürük ki, artıq təşkilatın məqsəd, vəzifələri və
              fəaliyyətləri ilə tanışsınız. Bu səbəbdən aşağıdaki formu
              doldurmanız rica olunur. Qeydiyyat formu doldurduqdan sonra, ödəniş
              üçün Təbiət Dostlarının əməkdaşları sizinlə əlaqə saxlayacaqlar.
            </p>
            <SponsorMemberShipForm />
            <div className="buttons">
              <button onClick={() => handleReadingChange(false)}>Geri</button>
            </div>
          </>
        ) : reading == "form" ? (
          <>
            <MemberShipForm />
            <div className="buttons">
              <button onClick={() => handleReadingChange(false)}>Geri</button>
            </div>
          </>
        ) : (
          <>
            <MemberShipAboutPage setReading={handleReadingChange} />
            <button
              onClick={() => handleReadingChange("form")}
              className="handleReading"
            >
              Razıyam
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MemberShipPage;
