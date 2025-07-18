import React from "react";
import "./Project.scss";
import { NavLink } from "react-router-dom";
import ProgrammingLanguages from "./ProgrammingLanguages";
import { motion } from "motion/react";
import UseFetch from "../UseFetch";
import Preloader from "../Interface/Preloader";
import Description from "./Description";

const Project = ({ name, url, screenshot_url, build_settings }) => {
  const repo_path = build_settings?.repo_path;
  const defaultDescriptionText =
    "This project was deployed manually and is not connected to GitHub. ";

  /*  if (repo_path) { */

  /*  } */

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="project"
    >
      <a href={url} className="project__url" target="_blank">
        <div className="project__card">
          <h3 className="subheading subheading--card">
            {name.replaceAll("-", " ")}
          </h3>
          <img src={screenshot_url} alt="" className="project__img" />

          {repo_path && <ProgrammingLanguages repo_path={repo_path} />}
          {repo_path ? (
            <Description repo_path={repo_path} />
          ) : (
            <p className="project__description">{defaultDescriptionText}</p>
          )}
        </div>
      </a>
    </motion.div>
  );
};
export default Project;
