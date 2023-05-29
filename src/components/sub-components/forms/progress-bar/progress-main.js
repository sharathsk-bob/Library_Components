import React from 'react'

function ProgressMain(values) {
    const {props}=values;
    const progressBarStyle = {
        width: `${props?.percentage}%`
      };
  return (
    <div class="container">
    <h2>{props?.label}</h2>
      <div class={`progress ${props?.theme == "dark"?"dark":props?.theme == "cg1blue"?"cg1blue":props?.theme == "cg2purple"?"cg2purple":props?.theme == "Light"?"Light":"" } ${props?.size=="100%"?"progress-fullwidth":props?.size=="75%"?"progress-threefourthwidth":props?.size=="50%"?"progress-halfwidth":props?.size=="25%"?"progress-quaterwidth":""}`}>
      <div class={`progress-bar`} style={progressBarStyle} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
        <span class="sr-only">{props?.percentage}</span>
      </div>
    </div>
    </div>
  )
}

export default ProgressMain