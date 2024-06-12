// src/components/Label.tsx

import React, { memo } from "react";
import classNames from "classnames";

export interface LabelProps {
  text?: string;
  size?: "small" | "medium" | "large";
  customClass?: string;
  id?: string;
}

const Label: React.FC<LabelProps> = memo(
  ({ text = "Default Text", size = "medium", customClass, id }) => {
    const baseStyle = "text-gray-700";
    const sizeStyle: Record<string, string> = {
      small: "text-xs",
      medium: "text-sm",
      large: "text-lg",
    };

    const classes = classNames(baseStyle, sizeStyle[size], customClass);

    return (
      <span id={id} className={classes}>
        {text}
      </span>
    );
  }
);

Label.displayName = "Label";

export default Label;
