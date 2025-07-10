import React from "react";
import "./Skills.scss";
import "../../components/layout.scss";
import { useTranslation } from "react-i18next";
import Skillbar from "./Skillbar";
import { motion } from "motion/react";

const Skills = () => {
  const { t } = useTranslation();

  const languageLevels = [
    { title: "html", level: 89 },
    { title: "css", level: 85 },
    { title: "javaScript", level: 20 },
    { title: "typeScript", level: 0 },
  ];

  const frameworkLevels = [
    { title: "bootstrap", level: 70 },
    { title: "reactJs", level: 40 },
    { title: "nextJS", level: 0 },
    { title: "tailwind", level: 0 },
    { title: "reactNative", level: 0 },
  ];

  const toolsLevels = [
    { title: "gitHub", level: 50 },
    { title: "vsCode", level: 90 },
    { title: "figma", level: 30 },
    { title: "photoshop", level: 30 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="skills container"
    >
      <h2 className="headline">{t("skillsHeading")}</h2>
      <h3 className="subheading">{t("programmingLanguages")}</h3>
      <Skillbar skillLevels={languageLevels} />
      <h3 className="subheading">{t("frameworks")}</h3>
      <Skillbar skillLevels={frameworkLevels} />
      <h3 className="subheading">{t("Tools")}</h3>
      <Skillbar skillLevels={toolsLevels} />
    </motion.div>
  );
};
export default Skills;
