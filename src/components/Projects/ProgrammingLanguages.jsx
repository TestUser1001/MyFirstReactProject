import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProgrammingLanguages.scss";
import useFetch from "../Hooks/useFetch";

const ProgrammingLanguages = ({ repo_path }) => {
  const url = `https://api.github.com/repos/${repo_path}/languages`;

  const { isLoading, isError, data: programmingLanguages } = useFetch(url);

  return (
    <ul className="programming-lang">
      {Object.keys(programmingLanguages).map((key) => {
        return (
          <li key={key} className="programming-lang__item">
            {key}
          </li>
        );
      })}
    </ul>
  );
};
export default ProgrammingLanguages;
