import React, { useEffect, useState } from "react";
import menuMobile from "../../assets/Menu.svg";
import menuMobileDark from "../../assets/MenuDark.svg";
import menuCloseLight from "../../assets/MenuCloseLight.svg";
import menuCloseDark from "../../assets/MenuCloseDark.svg";
import "./MenuMobile.scss";
import { useAppContext } from "../../App";

const MenuMobile = ({ menuClosed, setMenuClosed }) => {
  const { isDark } = useAppContext();

  const setIsMobile = () => {
    window.addEventListener("resize", () => {
      /*  this.*/ if (window.innerWidth > 768 || !menuClosed)
        setMenuClosed(true);
      /*  console.log(menuClosed); */
    });
  };

  useEffect(() => {
    setIsMobile();
  }, []);

  return (
    /* window.onresize={setMenuClosed()} */

    <button
      className={`menu-btn ${menuClosed ? "transform" : ""}`}
      onClick={() => {
        setMenuClosed(!menuClosed);
      }}
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
        alt=""
      />
    </button>
  );
};
export default MenuMobile;
