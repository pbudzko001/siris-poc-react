// src/components/Label.tsx

import React from "react";
import classNames from "classnames";

interface LabelProps {
  text: string;
  size?: "small" | "medium" | "large";
  errorMessage?: string;
}

const Label: React.FC<LabelProps> = ({
  text,
  size = "medium",
  errorMessage,
}) => {
  const labelClass = classNames({
    "text-sm": size === "small",
    "text-base": size === "medium",
    "text-lg": size === "large",
  });

  const errorClass = classNames("text-red-500", {
    "text-sm": size === "small",
    "text-base": size === "medium",
    "text-lg": size === "large",
  });

  return (
    <div>
      <label className={labelClass}>{text}</label>
      {errorMessage && <div className={errorClass}>{errorMessage}</div>}
    </div>
  );
};

export default Label;
