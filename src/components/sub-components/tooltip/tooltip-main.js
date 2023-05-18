import React from 'react';


function Tooltip(props) {
    const { TooltipProps }=props;

    return(
        <>
            <div>
                <div className="Tooltip_Button">{TooltipProps.icontext}
                    <span className= {`tooltiptext-${TooltipProps.Choice_Direction} 
                    ${TooltipProps?.Choice_Theme == "Dark"?"dark":TooltipProps?.Choice_Theme == "cg1"?"blue": 
                    TooltipProps?.Choice_Theme == "cg2"?"purple":TooltipProps?.Choice_Theme == "Normal"?"normal":"" }
                    `}>{TooltipProps.tooltiptext}</span>
                </div>
            </div>
        </>
    )
}

export default Tooltip;