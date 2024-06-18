import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";
import SiteNavigation from "../../components/navigation";

const NewsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNewsData();
  }, []);

  const getNewsData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}news`);

      setData(data);
    } catch (error) {
      console.log(error);
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
            // subCategory: "",
            nav: "xəbərlər",
          }}
        />

        <div className="newsCards">
          {data?.map((e, i) => {
            return (
              <Link className="card" key={i} to={"/xəbərlər"}>
                <div className="image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ljxe88K-hlvw0p77WrNLBAgkdPCNRPSkTQ&s"
                    alt="newsImage"
                  />
                </div>

                <div className="newsContent">
                  <p className="date">{monthNumberToString(e?.createdAt)}</p>
                  <p className="title">{e?.title}</p>
                  <p className="content">{e?.content}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
