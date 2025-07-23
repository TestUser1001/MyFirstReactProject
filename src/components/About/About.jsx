import React from "react";
import "./About.scss";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="about container"
      id="about"
    >
      <h2 className="headline">{t("aboutHeading")}</h2>
      <div className="about-content">
        <div className="about-content__card">
          <h3 className="subheading">{t("personal")}</h3>
          <ul className="about-content__list">
            <li className="about-content__list-item">{t("bio")}</li>
            <li className="about-content__list-item">{t("education")}</li>
            <li className="about-content__list-item">{t("jobs")}</li>
          </ul>
        </div>
        <div className="about-content__card about-content__card--tech">
          <h3 className="subheading">{t("technologies")}</h3>
          <ul className="about-content__technologies-list">
            <li
              className="about-content__technologies-list-item about-content__technologies-list-item--html"
              aria-label="HTML"
              role="img"
            ></li>
            <li
              className="about-content__technologies-list-item about-content__technologies-list-item--css"
              aria-label="CSS"
              role="img"
            ></li>
            <li
              className="about-content__technologies-list-item about-content__technologies-list-item--js"
              aria-label="JavaScript"
              role="img"
            ></li>
            <li
              className="about-content__technologies-list-item about-content__technologies-list-item--react"
              aria-label="ReactJS"
              role="img"
            ></li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};
export default About;
