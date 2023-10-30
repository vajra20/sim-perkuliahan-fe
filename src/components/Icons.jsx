import React from "react";
import { Icon } from "@iconify/react";

const Icons = ({ icon, backgroundColor, textColor }) => {
  const customBackground = {
    backgroundColor: backgroundColor,
  };

  const customText = {
    color: textColor,
  };

  return (
    <div className="p-3.5 rounded-full" style={customBackground}>
      <Icon className=" w-6 h-6 font-bold" icon={icon} style={customText} />
    </div>
  );
};

export default Icons;
