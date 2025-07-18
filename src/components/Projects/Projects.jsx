import React, { useState } from "react";
import "./Projects.scss";
import Project from "./Project";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import UseFetch from "../UseFetch";
import Preloader from "../Interface/Preloader";

const Projects = () => {
  const url = "/.netlify/functions/getProjects";
  const { isLoading, isError, data: projects } = UseFetch(url);

  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const [isDisabled, setIsDisabled] = useState(false);

  const { t } = useTranslation();

  const handleOnClick = () => {
    setProjectsPerPage((prev) => {
      const newCount = Math.min(prev + 3, projects.length);
      if (newCount >= projects.length) {
        setIsDisabled(true);
      }
      return newCount;
    });
  };

  /* console.log(isLoading); */
  if (isLoading) return <Preloader />;
  if (isError) return <div>{isError.message}</div>;
  const visibleProjects = projects.slice(0, projectsPerPage);
  /* console.table(visibleProjects); */
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="projects container"
      id="projects"
    >
      <h2 className="headline">{t("projectsHeading")}</h2>
      <div className="projects__wrapper">
        {visibleProjects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>

      {!isDisabled && (
        <button
          disabled={isDisabled}
          className="btn btn--resume "
          onClick={() => handleOnClick()}
        >
          {t("showMore")}
        </button>
      )}
    </motion.div>
  );
};
export default Projects;
