import React, { useEffect } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import ProjectsComponent from "../../components/projects";
import SiteNavigation from "../../components/navigation";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, []);

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

      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Layihələr",
            navigate: "home",
            nav: "fəaliyyətlər",
          }}
        />

        <ProjectsComponent sliceCount={60} />
      </div>
    </div>
  );
};

export default ProjectsPage;
