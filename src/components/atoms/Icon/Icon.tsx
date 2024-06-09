import React from "react";
import classNames from "classnames";

export interface IconProps {
  iconName: string; // Name or path to the icon
  iconSize?: "small" | "medium" | "large";
  iconColor?: string; // Tailwind color classes, e.g., 'text-gray-500'
  className?: string; // Custom Tailwind class/s
  onClick?: () => void; // Click event handler
}

const Icon: React.FC<IconProps> = ({
  iconName,
  iconSize = "medium",
  iconColor = "text-black",
  className,
  onClick,
}) => {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-6 w-6",
    large: "h-8 w-8",
  };

  return (
    <svg
      className={classNames(
        sizeClasses[iconSize],
        iconColor,
        className,
        "cursor-pointer"
      )}
      onClick={onClick}
      aria-hidden="true"
    >
      <use xlinkHref={`#${iconName}`} />
    </svg>
  );
};

export default Icon;
