import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";
import SiteNavigation from "../../components/navigation";
import { Spin } from "antd";

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
      return `${day} ${months[month]} ${year}`;
    } catch (error) {
      console.log(error);
      return dateString;
    }
  };

  return (
    <div id="newsPage">
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
              return (
                <Link className="card" key={i} to={"/xəbərlər"}>
                  <div className="image">
                    <img
                      src={`https://nfazcloudrailway.up.railway.app/uploads/${e?.imageURL}`}
                      alt="newsImage"
                    />
                  </div>

                  <div className="newsContent">
                    <p className="date">{monthNumberToString(e?.createdAt)}</p>
                    <p className="title">{e?.title}</p>
                    <p
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: e?.content?.slice(0, 150),
                      }}
                    ></p>
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
