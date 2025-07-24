import React from "react";
import "./ProgrammingLanguages.scss";
import useFetch from "../Hooks/useFetch";
import Preloader from "../Interface/Preloader";
import WarningErrorMessage from "../Interface/WarningErrorMessage";

const ProgrammingLanguages = ({ repo_path }) => {
  const url = `https://api.github.com/repos/${repo_path}/languages`;

  const { isLoading, isError, data: programmingLanguages } = useFetch(url);

  if (isLoading) return <Preloader />;

  if (isError)
    return <WarningErrorMessage message={isError.message} type="error" />;
  if (!programmingLanguages)
    return (
      <WarningErrorMessage
        message="No programming language data available!"
        type="warning"
      />
    );

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
