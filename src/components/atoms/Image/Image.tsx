// /src/components/Image.tsx

import React, { useEffect, useState, memo } from "react";
import classNames from "classnames";

export interface ImageProps {
  imageName: string; // Name or path to the image
  imageSize?: "small" | "medium" | "large";
  className?: string; // Custom Tailwind class/es
  onClick?: () => void; // Click event handler
}

const sizeClasses = {
  small: "h-16 w-16", // Adjusted size classes for images
  medium: "h-32 w-32",
  large: "h-64 w-64",
};

const Image: React.FC<ImageProps> = memo(
  ({ imageName, imageSize = "medium", className, onClick }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
      let isMounted = true;
      const importImage = async () => {
        try {
          const module = await import(`../../../assets/images/${imageName}.svg`);
          if (isMounted) setImageSrc(module.default);
        } catch (err) {
          console.error(`Image ${imageName} not found`, err);
          if (isMounted) setImageSrc(null);
        }
      };
      importImage();
      return () => {
        isMounted = false;
      };
    }, [imageName]);

    if (!imageSrc) return <span className="text-red-500">Image not found</span>;

    return (
      <img
        src={imageSrc}
        className={classNames(sizeClasses[imageSize], className, "cursor-pointer")}
        onClick={onClick}
        alt={imageName}
        aria-hidden="true"
      />
    );
  }
);

export default Image;
