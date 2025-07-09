import { Home, Profile, ETrade, ECommerceSolve, Digital } from "@/pages";

export const routes = [
  {
    name: "navbar.home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "navbar.about",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "navbar.export",
    path: "/e-trade",
    element: <ETrade />,
  },
  {
    name: "navbar.ecommerce",
    path: "/e-commerce-solve",
    element: <ECommerceSolve />,
  },
  {
    name: "navbar.digital",
    path: "/digital",
    element: <Digital />,
  },
];

export default routes;
