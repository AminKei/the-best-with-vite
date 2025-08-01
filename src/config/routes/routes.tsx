import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { RoutePath } from "../../constants/routes.path";
import More from "../../pages/More";

const Home = lazy(() => import("../../pages/home/index"));
const About = lazy(() => import("../../pages/about/index"));
const Contact = lazy(() => import("../../pages/contact/index"));
const NotFound = lazy(() => import("../../pages/notfound/index"));

export const routes: RouteObject[] = [
  {
    path: RoutePath.basePath,
    element: <Home />,
  },
  {
    path: RoutePath.home,
    element: <Home />,
  },
  {
    path: RoutePath.about,
    element: <About />,
  },
  {
    path: RoutePath.contact,
    element: <Contact />,
  },
  {
    path: RoutePath.more,
    element: <More />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
