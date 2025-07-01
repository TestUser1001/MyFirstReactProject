import React from "react";
import "./Projects.scss";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Project from "./Project";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const url = "/.netlify/functions/getProjects";
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  /* const maxCards = 3; */
  /* const [cardsPerPage, setCardsPerPage] = useState(maxCards); */

  const { t } = useTranslation();
  /*  const fetchData = () => {}; */

  useEffect(() => {
    /*  console.log(url); */
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (!response.data.length) return;
        /*  console.log(response); */
        const data = response.data;
        setProjects(data);
        /*  projects.slice(0, maxCards); */
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        /*   projects.filter((index) => index < maxCards); */
        /*  console.log(projects); */
      }
    };

    fetchData();
  }, []);

  const handleOnClick = () => {};

  /*  console.log(projects); */
  return (
    <div className="projects container">
      <h2 className="headline">{t("projectsHeading")}</h2>
      <div className="projects__wrapper">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>

      <button
        /* disabled={true}  */ className="btn btn--resume projects__btn"
        onClick={() => handleOnClick()}
      >
        {t("showMore")}
      </button>
    </div>
  );
};
export default Projects;
