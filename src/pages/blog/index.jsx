import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { Spin } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import SiteNavigation from "../../components/navigation";

const BlogPage = () => {
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

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div id="blogPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Təbiət Dostları Azərbaycan | Blog</title>
        <link
          rel="shortcut icon"
          href="../../assets/td logo 1.png"
          type="image/x-icon"
        />
      </Helmet>

      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Blog",
            navigate: "home",
            nav: "blog",
          }}
        />

        <div className="projectsCards">
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
            blogData?.map((e, i) => {
              return (
                <a
                  href={`https://nfazcloudrailway.up.railway.app/uploads/${e?.fileURL}`}
                  target="_blank"
                  key={i}
                  className="card"
                  style={{ backgroundColor: e?.background_color }}
                >
                  <div className="image">
                    <img
                      src={`https://nfazcloudrailway.up.railway.app/uploads/${e?.imageURL}`}
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
                    <MdKeyboardArrowRight className="icon" />   Daha ətraflı
                   </h4> 
                   
                  </div>
                </a>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
