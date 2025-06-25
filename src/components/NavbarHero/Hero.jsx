import React, { use } from "react";
import "../layout.scss";
import "./Hero.scss";
import photo from "../../assets/Photo.svg";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../App";
import "../../components/help_classes.scss";
import SimpleTypeWriter from "../Interface/SimpleTypeWriter";

const Hero = () => {
  const { isDark } = useAppContext();
  const { t, i18n } = useTranslation();
  return (
    <div className="hero container">
      <div className="hero__intro">
        <div className="hero__all-intro">
          <div className="hero__left">
            <SimpleTypeWriter key={i18n.language} words={[t("greeting")]} />
            {/*   <h1 className="display">{t("greeting")}</h1> */}
            <p className="hero__introduce">{t("introduce")}</p>
            <p className="hero__cooperate">{t("collaborate")}</p>
          </div>
          <div className="hero__avatar-responsive">
            <img src={photo} alt="" className="hero__avatar" />
          </div>
        </div>

        <div className="hero__collab">
          <p className="hero__cta">{t("cta-collaboration")}</p>
          <div className="hero__buttons">
            <button className="btn btn--contact">{t("contact")}</button>
            <button className="btn btn--resume">{t("resume")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
