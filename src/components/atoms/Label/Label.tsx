import React from "react";

interface LabelProps {
  htmlFor: string;
  text: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-gray-700 text-sm font-bold mb-2"
    >
      {text}
    </label>
  );
};

export default Label;
