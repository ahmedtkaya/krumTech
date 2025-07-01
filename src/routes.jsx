import { Home, Profile, SignIn, SignUp } from "@/pages";

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
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "E-Ticaret Çözümleri",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Dijital Pazarlama",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
