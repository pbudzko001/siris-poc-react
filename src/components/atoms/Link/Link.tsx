// path: src/components/Link.tsx

import React from "react";
import classNames from "classnames";

export interface LinkProps {
  url: string;
  linkText: string;
  newTab?: boolean;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  url,
  linkText,
  newTab = false,
  className,
}) => {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={classNames("text-blue-500 hover:underline", className)}
      aria-label={linkText}
    >
      {linkText}
    </a>
  );
};

export default Link;
