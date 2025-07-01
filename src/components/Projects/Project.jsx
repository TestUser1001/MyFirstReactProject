import React from "react";
import "./Project.scss";
import { NavLink } from "react-router-dom";
import ProgrammingLanguages from "./ProgrammingLanguages";

const Project = ({ name, url, screenshot_url, build_settings }) => {
  /* console.log(); */
  const repo_path = build_settings?.repo_path;
  return (
    <div className="project">
      <NavLink to={url} className="project__url" target="_blank">
        <div className="project__card">
          <h3 className="subheading subheading--card">
            {name.replaceAll("-", " ")}
          </h3>
          <img src={screenshot_url} alt="" className="project__img" />
          {/* <ul className="project__chips"> */}
          {/* <li>Html</li>
            <li>SCSS</li>
            <li>JavaScript</li> */}

          {repo_path && <ProgrammingLanguages repo_path={repo_path} />}
          {/*  </ul> */}
          <p className="project__description">
            Lorem ipsum elementum pellentesque tristique augue in lectus eu
            gravida viverra accumsan odio in ultrices tristique diam turpis
            justo turpis magna duis cursus amet dui malesuada.
          </p>
        </div>
      </NavLink>
    </div>
  );
};
export default Project;
