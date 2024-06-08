// path: src/components/Link.tsx

import React from "react";
import classNames from "classnames";

export interface LinkProps {
  href: string;
  text: string;
  newTab?: boolean;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  href,
  text,
  newTab = false,
  className,
}) => {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={classNames("text-blue-500 hover:underline", className)}
    >
      {text}
    </a>
  );
};

export default Link;
