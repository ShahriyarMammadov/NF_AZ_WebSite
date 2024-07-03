import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BASE_URL } from "../../constants/index";
import { Spin } from "antd";

const ProjectsComponent = ({ sliceCount }) => {
  const [data, setData] = useState([]);
  const [sliceCountState, setSliceCountState] = useState(sliceCount || 3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjectsData();
  }, []);

  const getProjectsData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}project`);

      setData(data);

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
    <div id="projectsComponent">
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
          data?.slice(0, sliceCountState)?.map((e, i) => {
            const plainText = stripHtml(e?.content);
            const shortText =
              plainText.slice(0, 300) + (plainText.length > 259 ? "..." : "");

            return (
              <div
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
                      {e?.title?.slice(0, 40)} {e?.title?.length > 40 && "...."}
                    </h2>
                  </div>

                  <div className="context">
                    <p>{shortText}</p>
                  </div>

                  <Link to={"/"}>
                    Daha ətraflı <MdKeyboardArrowRight className="icon" />
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProjectsComponent;
