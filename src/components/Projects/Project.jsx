import React, { useState, useEffect /* useRef */ } from "react";
import "./Project.scss";
import { NavLink } from "react-router-dom";
import ProgrammingLanguages from "./ProgrammingLanguages";
import { motion } from "motion/react";
import axios from "axios";

const Project = ({ name, url, screenshot_url, build_settings }) => {
  const repo_path = build_settings?.repo_path;
  /*  const defaultText = */
  /*  ? "This project was deployed manually and is not connected to GitHub." */
  /* : description; */
  const urlDescription = `https://api.github.com/repos/${repo_path}`;

  const [description, setDescription] = useState(
    "This project was deployed manually and is not connected to GitHub"
  );
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  /*  const projectRef = useRef(null); */

  useEffect(() => {
    const fetchDesc = async () => {
      try {
        if (!repo_path) return;
        const response = await axios.get(urlDescription);

        setDescription(response.data.description);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      } finally {
        setIsLoading(true);
      }
    };

    fetchDesc();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="project"
      /*  onAnimationComplete={() => {
        projectRef.current?.resize();
        projectRef.current?.update();
      }} */
    >
      <a
        href={url}
        className="project__url"
        target="_blank" /* ref={projectRef} */
      >
        <div className="project__card">
          <h3 className="subheading subheading--card">
            {name.replaceAll("-", " ")}
          </h3>
          <img src={screenshot_url} alt="" className="project__img" />

          {repo_path && <ProgrammingLanguages repo_path={repo_path} />}
          <p className="project__description">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};
export default Project;
