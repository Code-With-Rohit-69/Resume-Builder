import React from "react";

const WorkExperience = ({
  company,
  role,
  duration,
  durationColor,
  description,
}) => {
  return (
    <div className="mb-5">
      <div className="flex items-start justify-between">
        <div className="">
          <h3 className="text-[15px] font-semibold text-gray-900">{company}</h3>
          <p className="text-[15px] font-medium text-gray-700">{role}</p>
        </div>
        <p className="text-xs font-bold italic" style={{ color: durationColor }}>
          {duration}
        </p>
      </div>
      <p className="text-sm font-medium mt-[0.2cqw] text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default WorkExperience;
