import React, { SVGProps, useEffect, useState, memo } from "react";
import classNames from "classnames";

export interface IconProps {
  iconName: string; // Name or path to the icon
  iconSize?: "small" | "medium" | "large";
  iconColor?: string; // Tailwind color classes, e.g., 'text-gray-500'
  className?: string; // Custom Tailwind class/s
  onClick?: () => void; // Click event handler
}

const sizeClasses = {
  small: "h-4 w-4",
  medium: "h-6 w-6",
  large: "h-8 w-8",
};

const Icon: React.FC<IconProps> = memo(
  ({ iconName, iconSize = "medium", iconColor = "text-black", className, onClick }) => {
    const [SvgIcon, setSvgIcon] = useState<React.FC<SVGProps<SVGSVGElement>> | null>(null);

    useEffect(() => {
      let isMounted = true;
      const importIcon = async () => {
        try {
          const module = await import(`../../../assets/icons/${iconName}.svg?url`);
          if (isMounted) setSvgIcon(() => () => <image href={module.default} />);
        } catch (err) {
          console.error(`Icon ${iconName} not found`, err);
          if (isMounted) setSvgIcon(null);
        }
      };
      importIcon();
      return () => {
        isMounted = false;
      };
    }, [iconName]);

    if (!SvgIcon) return <span className="text-red-500">Icon not found</span>;

    return (
      <svg
        className={classNames(sizeClasses[iconSize], iconColor, className, "cursor-pointer")}
        onClick={onClick}
        aria-hidden="true"
      >
        <SvgIcon />
      </svg>
    );
  }
);

export default Icon;
