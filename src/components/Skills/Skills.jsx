import React, { useRef } from "react";
/* import "./Skills.scss"; */
import "../../components/layout.scss";
import { useTranslation } from "react-i18next";
import Skillbar from "./Skillbar";
import { motion } from "motion/react";
import { LANGUAGE_LEVELS } from "../../utils/constants";
import { FRAMEWORK_LEVELS } from "../../utils/constants";
import { TOOLS_LEVELS } from "../../utils/constants";

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

  return (
    <motion.section
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
        skillLevels={LANGUAGE_LEVELS}
        chartRef={langRef} /* onAnimate */
      />
      <h3 className="subheading">{t("frameworks")}</h3>
      <Skillbar
        skillLevels={FRAMEWORK_LEVELS}
        chartRef={frameworkRef} /* onAnimate */
      />
      <h3 className="subheading">{t("tools")}</h3>
      <Skillbar
        skillLevels={TOOLS_LEVELS}
        chartRef={toolsRef} /* onAnimate */
      />
    </motion.section>
  );
};
export default Skills;
