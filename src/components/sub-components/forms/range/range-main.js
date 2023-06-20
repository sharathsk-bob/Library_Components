import React, { useState } from 'react';

function RangeMain(props) {
  const { myrange }=props;
  const [value, setValue] = useState(myrange.minValue);
  const [showValue, setShowValue] = useState(false);

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    setShowValue(true);
  };

  const handleSliderBlur = () => {
    setShowValue(false);
  };
  // const tooltipStyle = {
  //   left: `${value}px`,
  //   transform: `translateX(-70%) scale(${showValue ? 1 : 0})`
  // };

  return (
    <div className={`wrapper-range ${myrange?.theme == "dark"?"dark":myrange?.theme == "blue"?"blue":myrange?.theme == "purple"?"purple":myrange?.theme == "light"?"light":"" }  ${myrange?.size=="100%"?"range-fullwidth":myrange?.size=="75%"?"range-threefourthwidth":myrange?.size=="50%"?"range-halfwidth":myrange?.size=="25%"?"range-quaterwidth":""}`}>
      <div  className='input-label'>
        <label>{myrange.inputLabel}</label>
      </div>
      <div className="sliderValue">
        <span >{value}</span>
      </div>
      <div className="field">
        <div className="value left">{myrange.minValue}</div>
        <input
          type="range"
          min={myrange.minValue}
          max={myrange.maxValue}
          value={value}
          step="1"
          onChange={handleSliderChange}
          onBlur={handleSliderBlur}
        />
        <div className="value right">{myrange.maxValue}</div>
      </div>
      <div  className='input-label-value'>
        <label>Value: {showValue? value:myrange.minValue}</label>
      </div>
    </div>
  );
}

export default RangeMain;