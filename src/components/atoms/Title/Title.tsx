// path: src/components/Title.tsx

import React from "react";
import classNames from "classnames";

export interface TitleProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, level = 1, className }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={classNames("font-bold", className)}>
      {text}
    </HeadingTag>
  );
};

export default Title;
