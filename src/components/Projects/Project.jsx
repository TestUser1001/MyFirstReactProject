import React from "react";
import "./Project.scss";
import { NavLink } from "react-router-dom";
import ProgrammingLanguages from "./ProgrammingLanguages";
import { motion } from "motion/react";

const Project = ({ name, url, screenshot_url, build_settings }) => {
  const repo_path = build_settings?.repo_path;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="project"
    >
      <NavLink to={url} className="project__url" target="_blank">
        <div className="project__card">
          <h3 className="subheading subheading--card">
            {name.replaceAll("-", " ")}
          </h3>
          <img src={screenshot_url} alt="" className="project__img" />

          {repo_path && <ProgrammingLanguages repo_path={repo_path} />}
          <p className="project__description">
            Lorem ipsum elementum pellentesque tristique augue in lectus eu
            gravida viverra accumsan odio in ultrices tristique diam turpis
            justo turpis magna duis cursus amet dui malesuada.
          </p>
        </div>
      </NavLink>
    </motion.div>
  );
};
export default Project;
