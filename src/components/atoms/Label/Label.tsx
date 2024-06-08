// src/components/Label.tsx

import React from "react";
import classNames from "classnames";

export interface LabelProps {
  text: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, size = "medium", className }) => {
  const baseStyle = "text-gray-700 font-medium";
  const sizeStyle = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-lg",
  };

  const classes = classNames(baseStyle, sizeStyle[size], className);

  return <span className={classes}>{text}</span>;
};

export default Label;
