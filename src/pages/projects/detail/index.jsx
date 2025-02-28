import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { Helmet } from "react-helmet";
import SiteNavigation from "../../../components/navigation";
import { Image, Spin } from "antd";

const ProjectDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogByID();

    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const getBlogByID = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}project/${id}`);

      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  console.log(data);
  return (
    <div id="projectsDetail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data?.title}</title>
        <link
          rel="shortcut icon"
          href="../../assets/td logo 1.png"
          type="image/x-icon"
        />
      </Helmet>
      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Fəaliyyətlər",
            navigate: "home",
            nav: "fəaliyyətlər",
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
              src={`${data?.imageURL}`}
              alt={data?.title}
              className="blogCoverİmage"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
