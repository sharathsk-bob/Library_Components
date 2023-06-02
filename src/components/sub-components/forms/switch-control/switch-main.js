import React from 'react'

function SwitchMain(values) {
    const { props }=values;
  return (
    <div className="switch-div">
       <div className="centered-container">
        <label class="switch" htmlFor="switch-checkbox" tabIndex="0">
          <input type="checkbox" id="switch-checkbox"  />
          <span class={`slider round ${props?.theme == "dark"?"dark":props?.theme == "cg1-blue"?"cg1-blue":props?.theme == "cg2-purple"?"cg2-purple":props?.theme == "light"?"light":"" } ${props?.size=="small"?"small":props?.size=="medium"?"medium":props?.size=="large"?"large":""}`}></span>
        </label>
        <label className={`switch-label ${props?.size=="small"?"small-label":props?.size=="medium"?"medium-label":props?.size=="large"?"large-label":""}`}>{props?.label}</label>
        </div>
    </div>
  )
}

export default SwitchMain;