import React from "react";
import "./Skills.scss";
import "../../components/layout.scss";
import { useTranslation } from "react-i18next";
import Skillbar from "./Skillbar";

const Skills = () => {
  const { t } = useTranslation();
  /* const levels = { html: 85, js: 20 }; */
  const languageLevels = [
    { title: "html", level: 89 },
    { title: "css", level: 85 },
    { title: "javaScript", level: 20 },
    { title: "typeScript", level: 0 },
  ];

  const languages = "programmingLanguages";

  const frameworkLevels = [
    { title: "bootstrap", level: 70 },
    { title: "reactJs", level: 40 },
    { title: "nextJS", level: 0 },
    { title: "tailwind", level: 0 },
    { title: "reactNative", level: 0 },
  ];
  const frameworks = "frameworks";

  const toolsLevels = [
    { title: "gitHub", level: 50 },
    { title: "vsCode", level: 90 },
    { title: "figma", level: 30 },
    { title: "photoshop", level: 30 },
  ];

  const tools = "tools";

  /*   console.log(data); */
  return (
    <div className="skills container">
      <h2 className="headline">{t("skillsHeading")}</h2>
      {/* <h3 className="subheading">{t("programLanguages")}</h3>
      <Skillbar skillLevels={languageLevels} />
      <h3 className="subheading">{t("programLanguages")}</h3>
      <Skillbar skillLevels={languageLevels} />
      <h3 className="subheading">{t("programLanguages")}</h3>*/}
      <Skillbar skillLevels={languageLevels} heading={languages} />
      <Skillbar skillLevels={frameworkLevels} heading={frameworks} />
      <Skillbar skillLevels={toolsLevels} heading={tools} />
    </div>
  );
};
export default Skills;
