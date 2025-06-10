import React from "react";
import logoImage from "@/assets/images/precision-point-logo.png";

export const Logo: React.FC<{ className?: string }> = ({
  className = "h-10",
}) => {
  return (
    <img src={logoImage} alt="Precision Point, Inc." className={className} />
  );
};
