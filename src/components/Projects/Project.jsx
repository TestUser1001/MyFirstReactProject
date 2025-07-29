import React from "react";
import "./Project.scss";
import ProgrammingLanguages from "./ProgrammingLanguages";
import { motion } from "motion/react";
import Description from "./Description";
import projectFallBackImg from "../../assets/ProjectFallBackImg.svg";

const Project = ({ name, url, screenshot_url, build_settings }) => {
  const repo_path = build_settings?.repo_path;
  const defaultDescriptionText =
    "This project was deployed manually and is not connected to GitHub. ";
  const projectFormattedName = name.replaceAll("-", " ");
  const projectImg = screenshot_url || projectFallBackImg;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="project"
    >
      <a
        href={url}
        className="project__url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project__card">
          <h3 className="subheading subheading--card">
            {projectFormattedName}
          </h3>
          <img
            loading="lazy"
            src={projectImg}
            alt={`Screenshot of the project "${projectFormattedName}"`}
            className="project__img"
          />

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
