import { Home, Profile, ETrade, ECommerceSolve, Digital } from "@/pages";

export const routes = [
  {
  name: "home",
  path: "/home",
  element: <Home />,
},
{
  name: "about",
  path: "/about",
  element: <Profile />,
},
{
  name: "ecommerce",
  path: "/e-commerce",
  element: <ETrade />,
},
{
  name: "ecommerceSolve", 
  path: "/e-commerce-solve",
  element: <ECommerceSolve />,
},
{
  name: "digital",
  path: "/digital",
  element: <Digital />,
},
];

export default routes;
