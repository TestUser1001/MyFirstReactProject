import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProgrammingLanguages.scss";
import UseFetch from "../UseFetch";

const ProgrammingLanguages = ({ repo_path }) => {
  /* const [programmingLanguages, setProgrammingLanguages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null); */

  const url = `https://api.github.com/repos/${repo_path}/languages`;

  const { isLoading, isError, data: programmingLanguages } = UseFetch(url);
  /*  console.log(programmingLanguages); */
  /*   console.log(url); */

  /* useEffect(() => {
    const fetchLang = async () => {
      try {
        const response = await axios.get(url);
        setProgrammingLanguages(response.data);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLang();
  }, []); */

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
