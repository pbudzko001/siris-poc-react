// path: src/components/Title.tsx

import React from "react";
import classNames from "classnames";

export interface TitleProps {
  titleText: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  customClass?: string;
  id?: string;
}

const Title: React.FC<TitleProps> = ({
  titleText,
  level = 1,
  customClass,
  id,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyle = "font-bold";
  const sizeStyle = {
    1: "text-3xl",
    2: "text-2xl",
    3: "text-xl",
    4: "text-base",
    5: "text-sm",
    6: "text-xs",
  };

  const classes = React.useMemo(
    () => classNames(baseStyle, sizeStyle[level], customClass),
    [baseStyle, sizeStyle, level, customClass]
  );

  return (
    <HeadingTag id={id} className={classes} aria-label={titleText || undefined}>
      {titleText}
    </HeadingTag>
  );
};

export default Title;
