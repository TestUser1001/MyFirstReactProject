import React, { useState } from "react";
import "./Projects.scss";
import Project from "./Project";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import useFetch from "../Hooks/useFetch";
import Preloader from "../Interface/Preloader";
import WarningError from "../Interface/WarningErrorMessage";

const Projects = () => {
  const url = "/.netlify/functions/getProjects";
  const { isLoading, isError, data: projects } = useFetch(url);

  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const [isDisabled, setIsDisabled] = useState(false);

  const { t } = useTranslation();

  const handleOnClick = () => {
    setProjectsPerPage((prev) => {
      const newCount = Math.min(prev + 3, projects.length);
      console.log(newCount);
      if (newCount >= projects.length) {
        setIsDisabled(true);
      }
      return newCount;
    });
  };

  if (isLoading) return <Preloader />;
  if (isError)
    return (
      <WarningError
        message={`Something went wrong during fetching the projects: ${isError.message}`}
        type={"error"}
      />
    );
  if (!projects.length)
    return (
      <div className="container">
        <h2 className="headline">{t("projectsHeading")} </h2>
        <WarningError message={t("noProjects")} type="warning" />
      </div>
    );

  const visibleProjects = (projects ?? []).slice(0, projectsPerPage);

  return (
    <motion.section
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

      {!isDisabled && projects.length >= projectsPerPage && (
        <button
          disabled={isDisabled}
          className="btn btn--resume "
          onClick={() => handleOnClick()}
        >
          {t("showMore")}
        </button>
      )}
    </motion.section>
  );
};
export default Projects;
