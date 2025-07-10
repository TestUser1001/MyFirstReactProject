import React from "react";
import "./About.scss";
import { useTranslation } from "react-i18next";
/* import { useAppContext } from "../../App"; */
import { motion } from "motion/react";

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="about container"
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
            <li className="about-content__technologies-list-item about-content__technologies-list-item--html"></li>
            <li className="about-content__technologies-list-item about-content__technologies-list-item--css"></li>
            <li className="about-content__technologies-list-item about-content__technologies-list-item--js"></li>
            <li className="about-content__technologies-list-item about-content__technologies-list-item--react"></li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
