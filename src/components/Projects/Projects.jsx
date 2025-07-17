import React, { useEffect, useState, useRef } from "react";
import "./Projects.scss";
/* import {  } from "react";
import {  } from "react"; */
import axios from "axios";
import Project from "./Project";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Projects = () => {
  /* const projectRef = useRef(null); */
  const url = "/.netlify/functions/getProjects";
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const [isDisabled, setIsDisabled] = useState(false);
  //
  const { t } = useTranslation();

  const visibleProjects = projects.slice(0, projectsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (!response.data.length) return;
        const data = response.data;
        setProjects(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleOnClick = () => {
    setProjectsPerPage((prev) => {
      const newCount = Math.min(prev + 3, projects.length);
      if (newCount >= projects.length) {
        setIsDisabled(true);
      }
      return newCount;
    });
  };

  console.log(projectsPerPage);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      /*  onAnimationComplete={() => {
        projectRef.current?.resize();
        projectRef.current?.update();
      }} */
      className="projects container"
      id="projects"
    >
      <h2 className="headline">{t("projectsHeading")}</h2>
      <div className="projects__wrapper">
        {visibleProjects.map((project) => {
          return (
            <Project key={project.id} {...project} /* ref={projectRef} */ />
          );
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
