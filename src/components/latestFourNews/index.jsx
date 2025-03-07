import React, { useEffect } from "react";
import "./index.scss";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const LatestFourNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestNews();
  }, []);

  const getLatestNews = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}news`);

      setLatestNews(data?.slice(0, 4));
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
    <div id="latestNews">
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div className="newsCards">
          {latestNews?.map((e, i) => {
            const plainText = stripHtml(e?.content);
            const shortText =
              plainText.slice(0, 100) + (plainText.length > 100 ? "..." : "");

            return (
              <Link className="card" key={i} to={`/news/${e?._id}`}>
                <div className="image">
                  <img
                    src={`${e?.imageURL}`}
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

      <div className="linkToNewsPage">
        <Link to={"/news"}>Daha çox</Link>
      </div>
    </div>
  );
};

export default LatestFourNews;
