import style from "styled-components";
 
export const CustomButton = style.button`
    
    cursor: pointer;
    margin-top: 32px;
    font-size:20px;


    background-color: ${(props) => props.Choice_Theme == 'Normal' ? 'white' : 
        props.Choice_Theme == 'Dark' ? 'black' :
        props.Choice_Theme == 'cg1' ? '#0070AD' : '#2b0a3d'
    };

    color: ${(props) => props.Choice_Theme == 'Normal' ? 'black' : 
        props.Choice_Theme == 'Dark' ? 'white' :
        props.Choice_Theme == 'cg1' ? 'white' : 'white'
    };
    
    value: ${(props) => props.btntext};

    box-shadow: ${(props) => props.Choice_BoxShadow == 'Yes' ? 'box-shadow: 2px 0px 8px #0000002b' : 'none'};
    
    border-radius: ${(props) => props.Choice_BorderRadius == 'Yes' ? props.border_radius+'px' : 'none'};

    border: ${(props) => props.border_width > 0 ? props.border_width+'px solid #555555' : 'none'} ;


    padding: ${(props) => props.Choice_Size == '1em' ? '1em' : 
            props.Choice_Size == '0.5em' ? '0.5em' :
            props.Choice_Size == 'Half width' ? '0.5em 2em' : '1em 2em'
        };
    
    width: ${(props) => props.Choice_Size == '1em' ? 'auto' : 
        props.Choice_Size == '0.5em' ? 'auto' :
        props.Choice_Size == 'Half width' ? '50%' : '100%'
    }; 

    &:before {
        text-align: center;
        content: "${(props) => props.btntext}";
    }

`;

