import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";

const ProjectsPage = () => {
  return (
    <div id="projects">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Təbiət Dostları Azərbaycan | Fəaliyyətlər</title>
        <link
          rel="shortcut icon"
          href="../../assets/td logo 1.png"
          type="image/x-icon"
        />
      </Helmet>

      <div className="backgroundImage"></div>

      <div className="container">
        <h1>Projects</h1>
      </div>
    </div>
  );
};

export default ProjectsPage;
