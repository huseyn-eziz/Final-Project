import ErrorPage from "../../Pages/ErrorPage";
import HomePage from "../../Pages/HomePage";
import Services from "../../Pages/Services";
import Blog from "../../Pages/Blog";
import Project from "../../Pages/Project";
import Contact from "../../Pages/Contact";
import WorkPlanCardDetail from "../../Pages/WorkPlanCardDetail";

export const myRoutes = [
  { id: 1, path: "/", element: <HomePage />, title: "Home" },
  { id: 2, path: "/services", element: <Services />, title: "Services" },
  { id: 3, path: "/blog", element: <Blog />, title: "Blog" },
  { id: 4, path: "/project", element: <Project />, title: "Project" },
  { id: 5, path: "/contact", element: <Contact />, title: "Contact" },
  { id: 6, path: "/WorkPlanCardDetail/:id", element: <WorkPlanCardDetail /> },
  { id: 7, path: "*", element: <ErrorPage /> },
];
