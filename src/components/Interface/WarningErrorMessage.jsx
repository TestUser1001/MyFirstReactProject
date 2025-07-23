import React from "react";
import "./WarningError.scss";
import clsx from "clsx";
import "../layout.scss";

const WarningErrorMessage = ({
  message = "unknown issue occurred!",
  type = "warning",
}) => {
  return (
    <div
      className={clsx("warning-error", "container", `warning-error--${type}`)}
    >
      <div
        className={clsx("warning-error__img", `warning-error__img--${type}`)}
        aria-label={type}
        role="img"
      ></div>
      <p className={clsx("warning-error__msg", `warning-error__msg--${type}`)}>
        {message}
      </p>
    </div>
  );
};
export default WarningErrorMessage;
