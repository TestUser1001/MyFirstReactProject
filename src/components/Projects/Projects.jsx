import React from "react";
import "./Projects.scss";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Projects = () => {
  const url = "https://app.netlify.com/teams/nonamer099/projects";
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /*  const fetchData = () => {}; */

  useEffect(() => {
    console.log(url);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="projects">
      {projects.map((project) => {
        return "project";
      })}
    </div>
  );
};
export default Projects;
