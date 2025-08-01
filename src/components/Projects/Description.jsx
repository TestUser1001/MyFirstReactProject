import React from "react";
import "../Projects/Project.scss";
import useFetch from "../Hooks/useFetch";
import Preloader from "../Interface/Preloader";
import WarningErrorMessage from "../Interface/WarningErrorMessage";

const Description = ({ repo_path }) => {
  const urlDescription = `https://api.github.com/repos/${repo_path}`;
  const { isLoading, isError, data: description } = useFetch(urlDescription);
  if (isLoading) return <Preloader />;
  if (isError)
    return <WarningErrorMessage message={isError.message} type="error" />;
  const descriptionText = !description.description
    ? "There's no description of this project added"
    : description.description;
  return <p className="project__description">{descriptionText}</p>;
};
export default Description;
