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

  const { t } = useTranslation();

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

  const handleOnClick = () => {};

  return (
    <div className="projects container">
      <h2 className="headline">{t("projectsHeading")}</h2>
      <div className="projects__wrapper">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>

      <button
        className="btn btn--resume projects__btn"
        onClick={() => handleOnClick()}
      >
        {t("showMore")}
      </button>
    </div>
  );
};
export default Projects;
