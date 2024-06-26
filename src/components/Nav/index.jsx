import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Switch, useTheme } from "@linaoliveira/design-system";
import useHandleOutsideClick from "../../hooks/useHandleOutsideClick";
import LanguageSelector from "../LanguageSelector";
import moon from "/moon.svg";
import sun from "/sun.svg";
import logo from "/logo.png";
import styles from "./styles.module.scss";

const ROUTES = [
  { nameKey: "home", path: "/" },
  { nameKey: "about", path: "/about" },
  { nameKey: "developments", path: "/developments" },
  { nameKey: "contact", path: "/contact" },
];

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("components");
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";
  const newTheme = isDarkMode ? "Light" : "Dark";
  const isCollapsibleNav = window.innerWidth < 1024;
  const [openNav, setOpenNav] = useState(!isCollapsibleNav);
  const navRef = useRef();

  useHandleOutsideClick(navRef, isCollapsibleNav && openNav, setOpenNav);

  useEffect(() => {
    if (isCollapsibleNav) setOpenNav(false);
  }, [isCollapsibleNav, location.pathname]);

  const handleLogoClick = () => {
    isCollapsibleNav ? setOpenNav(!openNav) : navigate("/");
  };

  const renderNavLink = ({ nameKey, path }) => {
    const isCurrent = path === location.pathname;
    const navLiClassName = `nav__list__item${isCurrent ? "--current" : ""}`;
    return (
      <li key={nameKey} className={styles[navLiClassName]}>
        <Link to={path}>{t(`nav.routes.${nameKey}`)}</Link>
      </li>
    );
  };

  return (
    <nav className={styles.nav} ref={navRef}>
      <Link to="/" className={styles.nav__logo}>
        <img alt="Lina Logo" src={logo} width={32} height={32} />
      </Link>
      {openNav && (
        <ul id="navigation" className={styles.nav__list}>
          {ROUTES.map(renderNavLink)}
        </ul>
      )}
      <LanguageSelector />
      <div>
        <Switch
          onIcon={sun}
          offIcon={moon}
          checked={isDarkMode}
          onChange={() => setTheme(newTheme.toLowerCase())}
          aria-label={t(`nav.themeToggle.enable${newTheme}Theme`)}
        />
      </div>
      <button
        className={styles.nav__menu}
        onClick={handleLogoClick}
        aria-expanded={openNav}
        aria-controls="navigation"
        aria-label={`${t(`nav.${openNav ? "close" : "open"}`)} ${t(
          "menuLabel"
        )}`}
      >
        <div className={styles[`nav__menu${openNav ? "--close" : "--open"}`]} />
      </button>
    </nav>
  );
};

export default Nav;
