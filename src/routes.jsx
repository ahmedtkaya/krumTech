import { Home, Profile,ETrade,ECommerceSolve ,Digital} from "@/pages";

export const routes = [
  {
    name: "Anasayfa",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Kurumsal",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "E-Ihracat",
    path: "/e-trade",
    element: <ETrade />,
  },
  {
    name: "E-Ticaret Çözümleri",
    path: "/e-commerce-solve",
    element: <ECommerceSolve />,
  },
  {
    name: "Dijital Pazarlama",
    path: "/digital",
    element: <Digital />,
  },
];

export default routes;
