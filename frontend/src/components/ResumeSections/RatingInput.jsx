import React from "react";

const RatingInput = ({
  value = 0,
  onChange = () => {},
  color = "#9125e6",
  bgColor = "#e3a6ff",
  total = 5,
}) => {
  const displayValue = Math.round((value / 100) * total);

  const handleClick = (index) => {
    const newValue = Math.round(((index + 1) / total) * 100);
    onChange(newValue);
  };

  return (
    <div className="flex gap-3 cursor-pointer">
      {[...Array(total)].map((_, index) => {
        const isActive = index < displayValue;

        return (
          <div
            className="w-4 h-4 rounded transition-all"
            key={index}
            onClick={() => handleClick(index)}
            style={{ backgroundColor: isActive ? color : bgColor }}
          ></div>
        );
      })}
    </div>
  );
};

export default RatingInput;
