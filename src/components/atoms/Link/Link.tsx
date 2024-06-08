import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  to: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ to, text }) => {
  return (
    <RouterLink
      to={to}
      className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
    >
      {text}
    </RouterLink>
  );
};

export default Link;
