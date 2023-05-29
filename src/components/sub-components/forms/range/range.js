import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import InputRange from 'react-input-range';

const Range = () => {
  const [value, setValue] = useState(50);
  const location = useLocation();
  const props = location.state.rangeProps;
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <span>{value}</span>

      {tooltipVisible && <div className="tooltip">{value}</div>}
    </div>
  );

};

export default Range;
