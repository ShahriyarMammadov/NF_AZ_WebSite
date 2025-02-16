import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";
import SiteNavigation from "../../components/navigation";
import { Spin } from "antd";
import { Helmet } from "react-helmet";

const NewsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsData();

    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const getNewsData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}news`);

      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const monthNumberToString = (dateString) => {
    try {
      const months = [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Aqvust",
        "Sentyabr",
        "Oktyabr",
        "Noyabr",
        "Dekabr",
      ];
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      return `${day - 1} ${months[month]} ${year}`;
    } catch (error) {
      console.log(error);
      return dateString;
    }
  };

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div id="newsPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Təbiət Dostları Azərbaycan | Xəbərlər</title>
        <link
          rel="shortcut icon"
          href="../../assets/td logo 1.png"
          type="image/x-icon"
        />
      </Helmet>

      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Xəbərlər",
            navigate: "home",
            nav: "xəbərlər",
          }}
        />

        {loading ? (
          <div
            style={{
              width: "100%",
              height: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <div className="newsCards">
            {data?.map((e, i) => {
              const plainText = stripHtml(e?.content);
              const shortText =
                plainText.slice(0, 100) + (plainText.length > 100 ? "..." : "");

              return (
                <Link className="card" key={i} to={`/news/${e?._id}`}>
                  <div className="image">
                    <img
                      src={`https://nfazcloudrailway.up.railway.app/uploads/${e?.imageURL}`}
                      alt="newsImage"
                    />
                  </div>

                  <div className="newsContent">
                    <p className="date">{monthNumberToString(e?.createdAt)}</p>
                    <p className="title">{e?.title}</p>
                    <p className="content">{shortText}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
