import React, { useEffect } from "react";
import menuMobile from "../../assets/Menu.svg";
import menuMobileDark from "../../assets/MenuDark.svg";
import menuCloseLight from "../../assets/MenuCloseLight.svg";
import menuCloseDark from "../../assets/MenuCloseDark.svg";
import "./MenuMobile.scss";
import { useAppContext } from "../../App";

const MenuMobile = ({ menuClosed, setMenuClosed }) => {
  const { isDark } = useAppContext();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && !menuClosed) {
        setMenuClosed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuClosed]);

  return (
    <button
      className={`menu-btn ${menuClosed ? "menu-btn--rotated " : ""}`}
      onClick={() => {
        setMenuClosed((prev) => !prev);
      }}
      aria-label={menuClosed ? "Open menu" : "Close menu"}
    >
      <img
        src={
          menuClosed
            ? isDark
              ? menuMobileDark
              : menuMobile
            : isDark
            ? menuCloseDark
            : menuCloseLight
        }
        alt={menuClosed ? "Open menu" : "Close menu"}
        loading="lazy"
      />
    </button>
  );
};
export default MenuMobile;
