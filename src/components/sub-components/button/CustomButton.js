import style from "styled-components";
 
export const CustomButton = style.button`
    
    cursor: pointer;
    background-color: cyan;
    margin-top: 32px;
    
    font-size:20px;
    color: black;
    
    value: ${(props) => props.btntext};

    box-shadow: ${(props) => props.Choice_BoxShadow == 'Yes' ? '10px 10px grey' : 'none'};
    
    border-radius: ${(props) => props.Choice_BorderRadius == 'Yes' ? props.border_radius+'px' : 'none'};

    // border: ${(props) => props.border_width}px solid #555555;


    padding: ${(props) => props.Choice_Size == '1em' ? '1em' : 
            props.Choice_Size == '0.5em' ? '0.5em' :
            props.Choice_Size == 'Half width' ? '5%' : '10%'
        };
    

    &:before {
        text-align: center;
        content: "${(props) => props.btntext}";
    }

`;

