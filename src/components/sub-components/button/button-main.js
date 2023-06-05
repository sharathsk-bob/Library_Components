import React from 'react';
import './button.scss'

function Button(props) {
    const { ButtonProps } = props;

    const CustomBStyle = {
        padding: `${ButtonProps.Choice_Size}px ${ButtonProps.Choice_Size}px`,
        width: `${ ButtonProps.Choice_Width}%`,
        border: `${ ButtonProps.border_width > 0 ? ButtonProps.border_width+'px solid #555555' : 'none'}` ,
        "border-radius": `${ButtonProps.Choice_BorderRadius == 'Yes' ? ButtonProps.border_radius+'px' : ButtonProps.Choice_BorderRadius == 'No' ? '0px' : 'none'}`,
        "box-shadow": `${ ButtonProps.Choice_BoxShadow == 'Yes' ? '2px 0px 8px #0000002b' : 'none'}`,
    };

    return(
        <>
            <div className={`Button-Content`}>
                <button aria-label="This is the button" tabIndex='0' role="button" style={CustomBStyle} className={`CustomButton ${ ButtonProps?.Choice_Theme == "Dark"?"dark": ButtonProps?.Choice_Theme == "cg1"?"blue": ButtonProps?.Choice_Theme == "cg2"?"purple": ButtonProps?.Choice_Theme == "Normal"?"normal":"" }`}>
                    {ButtonProps.btntext}
                </button>
            </div>
        </>
    );
}

export default Button;