import React from "react";
import { Icon } from "@iconify/react";

const Icons = ({
  icon,
  backgroundColor,
  textColor,
  width = "w-6",
  height = "h-6",
}) => {
  const customBackground = {
    backgroundColor: backgroundColor,
  };

  const customText = {
    color: textColor,
  };

  return (
    <div className="p-3.5 rounded-full w-fit" style={customBackground}>
      <Icon
        className={`font-bold ${width} ${height}`}
        icon={icon}
        style={customText}
      />
    </div>
  );
};

export default Icons;
