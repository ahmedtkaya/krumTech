import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export function Navbar({ routes }) {
  const [openNav, setOpenNav] = React.useState(false);
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    });
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize text-lg"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {t(name)}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {t(name)}
            </Link>
          )}
        </Typography>
      ))}

      {/* Dil Seçimi */}
      <div className="flex gap-2 ml-4">
  <button
    onClick={() => changeLanguage("tr")}
    className={`rounded-md p-1 ${
      i18n.language === "tr" ? "bg-white" : ""
    }`}
  >
    <img
      src="https://flagcdn.com/w40/tr.png"
      alt="TR"
      className="w-6 h-4 object-cover rounded-sm"
    />
  </button>

  <button
    onClick={() => changeLanguage("en")}
    className={`rounded-md p-1 ${
      i18n.language === "en" ? "bg-white" : ""
    }`}
  >
    <img
      src="https://flagcdn.com/w40/gb.png"
      alt="EN"
      className="w-6 h-4 object-cover rounded-sm"
    />
  </button>
</div>

    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3 bg-black">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <img
            src="/img/KT.png"
            alt="Krum Technology"
            className="h-32 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
