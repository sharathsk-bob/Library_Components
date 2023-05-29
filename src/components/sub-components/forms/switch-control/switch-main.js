import React from 'react'

function SwitchMain(values) {
    const { props }=values;
  return (
    <div className="switch-div">
        <label class="switch">
          <input type="checkbox" />
          <span class={`slider round ${props?.theme == "dark"?"dark":props?.theme == "cg1"?"cg1":props?.theme == "cg2"?"cg2":props?.theme == "light"?"light":"" } ${props?.size=="small"?"small":props?.size=="medium"?"medium":props?.size=="large"?"large":""}`}></span>
        </label>
        <label className="switch-label">{props?.label}</label>
    </div>
  )
}

export default SwitchMain;