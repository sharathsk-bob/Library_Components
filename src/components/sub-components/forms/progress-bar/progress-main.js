import React from 'react'

function ProgressMain(values) {
    const {props}=values;
    const progressBarStyle = {
        width: `${props?.percentage}%`
      };
  return (
    <div class="container progressbar-output">
    <h2 className="progress-lable">{props?.label}</h2>
      <div class={`progress progress-striped ${props?.theme == "dark"?"dark":props?.theme == "cg1blue"?"cg1blue":props?.theme == "cg2purple"?"cg2purple":props?.theme == "Light"?"Light":"" } ${props?.size=="100%"?"progress-fullwidth":props?.size=="75%"?"progress-threefourthwidth":props?.size=="50%"?"progress-halfwidth":props?.size=="25%"?"progress-quaterwidth":""}`}>
      <div class={`progress-bar`} style={progressBarStyle} role="progressbar progress-striped" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
        <span class="sr-only">{props?.percentage}</span>
       <span className="percentage-display"> {props?.percentage}%</span>
      </div>
    </div>
    </div>
  )
}

export default ProgressMain