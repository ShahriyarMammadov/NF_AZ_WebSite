import MainRoot from "../components/root";
import AboutPage from "../pages/about";
import HomePage from "../pages/homepage";
import ProjectsPage from "../pages/projects";
import StructurePage from "../pages/structure";
import MemberShipPage from "../pages/memberShip";
import SponsorMemberShipForm from "../components/memberShip/sponsorMemberShipForm";
import NewsPage from "../pages/news";
import NewsDetailPage from "../pages/news/detail";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "fəaliyyətlər",
        element: <ProjectsPage />,
      },
      {
        path: "structure",
        element: <StructurePage />,
      },
      {
        path: "üzvlük",
        element: <MemberShipPage />,
      },
      {
        path: "üzvlük/:id",
        element: <SponsorMemberShipForm />,
      },
      {
        path: "xəbərlər",
        element: <NewsPage />,
      },
      {
        path: "xəbərlər/:id",
        element: <NewsDetailPage />,
      },
    ],
  },
];

export default ROUTES;
