import React from "react";
import PreloaderSpinner from "../../assets/spinner.svg";
import "./Preloader.scss";

const Preloader = () => {
  return (
    <img
      src={PreloaderSpinner}
      alt="Preloader spinner"
      className="preloader_spinner"
    ></img>
  );
};
export default Preloader;
