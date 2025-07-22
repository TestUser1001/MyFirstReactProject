import React, { useRef } from "react";
import "./Skills.scss";
import "../../components/layout.scss";
import { useTranslation } from "react-i18next";
import Skillbar from "./Skillbar";
import { motion } from "motion/react";

const Skills = () => {
  const { t } = useTranslation();
  const langRef = useRef(null);
  const frameworkRef = useRef(null);
  const toolsRef = useRef(null);

  const handleChartUpdate = () => {
    langRef.current?.resize();
    langRef.current?.update();

    frameworkRef.current?.resize();
    frameworkRef.current?.update();

    toolsRef.current?.resize();
    toolsRef.current?.update();
  };

  const languageLevels = [
    { title: "html", level: 89 },
    { title: "css", level: 85 },
    { title: "javaScript", level: 20 },
    { title: "typeScript", level: 0.2 },
  ];

  const frameworkLevels = [
    { title: "bootstrap", level: 70 },
    { title: "reactJs", level: 40 },
    { title: "nextJS", level: 0.5 },
    { title: "tailwind", level: 0 },
    { title: "reactNative", level: 0 },
  ];

  const toolsLevels = [
    { title: "gitHub", level: 50 },
    { title: "vsCode", level: 90 },
    { title: "figma", level: 30 },
    { title: "photoshop", level: 30 },
  ];

  /* const onAnimate = () => {
    chartRef.current?.update();
  }; */

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      onAnimationComplete={handleChartUpdate}
      className="skills container"
      id="skills"
    >
      <h2 className="headline">{t("skillsHeading")}</h2>
      <h3 className="subheading">{t("programmingLanguages")}</h3>
      <Skillbar
        skillLevels={languageLevels}
        chartRef={langRef} /* onAnimate */
      />
      <h3 className="subheading">{t("frameworks")}</h3>
      <Skillbar
        skillLevels={frameworkLevels}
        chartRef={frameworkRef} /* onAnimate */
      />
      <h3 className="subheading">{t("tools")}</h3>
      <Skillbar skillLevels={toolsLevels} chartRef={toolsRef} /* onAnimate */ />
    </motion.div>
  );
};
export default Skills;
