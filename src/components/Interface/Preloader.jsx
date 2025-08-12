import React from "react";
import PreloaderSpinner from "../../assets/spinner1.svg";
import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <img
        src={PreloaderSpinner}
        alt="Loading..."
        className="preloader__spinner"
      ></img>
    </div>
  );
};
export default Preloader;
