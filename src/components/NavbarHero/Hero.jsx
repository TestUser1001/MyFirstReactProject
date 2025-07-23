import React from "react";
import "../layout.scss";
import "./Hero.scss";
import photo from "../../assets/Photo.svg";
import { useTranslation } from "react-i18next";
import "../../components/help_classes.scss";
import SimpleTypeWriter from "../Interface/SimpleTypeWriter";
import Resume from "../../assets/front_end_developer.pdf";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="hero container" id="hero">
      <div className="hero__intro">
        <div className="hero__all-intro">
          <div className="hero__left">
            <SimpleTypeWriter key={i18n.language} words={[t("greeting")]} />
            <p className="hero__introduce">{t("introduce")}</p>
            <p className="hero__cooperate">{t("collaborate")}</p>
          </div>
          <div className="hero__avatar-responsive">
            <img
              src={photo}
              alt="job seeker's photo"
              className="hero__avatar"
            />
          </div>
        </div>

        <div className="hero__collab">
          <p className="hero__cta">{t("cta-collaboration")}</p>
          <section className="hero__buttons" aria-label="call to actions">
            <a href="#contact" className="btn btn--contact" id="contact-btn">
              {t("getInTouch")}
            </a>
            <a
              href={Resume}
              target="_blank"
              className="btn btn--resume"
              rel="noopener noreferrer"
            >
              {t("resume")}
            </a>
          </section>
        </div>
      </div>
    </section>
  );
};
export default Hero;
