import React from 'react'

function SwitchMain(values) {
    const { props }=values;
  return (
    <div className="switch-div">
        <label class="switch">
          <input type="checkbox" />
          <span class={`slider round ${props?.theme == "dark"?"dark":props?.theme == "cg1-blue"?"cg1-blue":props?.theme == "cg2-purple"?"cg2-purple":props?.theme == "light"?"light":"" } ${props?.size=="small"?"small":props?.size=="medium"?"medium":props?.size=="large"?"large":""}`}></span>
        </label>
        <label className="switch-label">{props?.label}</label>
    </div>
  )
}

export default SwitchMain;