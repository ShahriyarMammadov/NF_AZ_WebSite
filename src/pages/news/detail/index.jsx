import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants/index";
import { useState } from "react";
import "./index.scss";
import SiteNavigation from "../../../components/navigation";
import { Image, Spin } from "antd";
import { Helmet } from "react-helmet";

const NewsDetailPage = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsByID();

    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const getNewsByID = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}news/${id}`);

      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div id="newsDataByID">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data?.title}</title>

        <meta
          name="image"
          property="og:image"
          content={`https://nfazcloudrailway.up.railway.app/uploads/${data?.imageURL}`}
        />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="description"
          property="og:description"
          content={data?.content?.slice(0, 150)}
        />
      </Helmet>

      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Xəbərlər",
            navigate: "home",
            nav: "xəbərlər",
            subCategory: id,
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
          <div className="newsContent">
            <h2>{data?.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: data?.content }}></p>

            <Image
              src={`https://nfazcloudrailway.up.railway.app/uploads/${data?.imageURL}`}
              alt={data?.title}
              className="newsCoverImage"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;
