import style from "styled-components";
 
export const CustomButton = style.button`
    
    cursor: pointer;
    margin-top: 32px;
    font-size:16px;

    @media (max-width: 768px) {
        font-size:12px;
    }

    background-color: ${(props) => props.Choice_Theme == 'Normal' ? 'white' : 
        props.Choice_Theme == 'Dark' ? 'black' :
        props.Choice_Theme == 'cg1' ? '#0070AD' : '#2b0a3d'
    };

    color: ${(props) => props.Choice_Theme == 'Normal' ? 'black' : 
        props.Choice_Theme == 'Dark' ? 'white' :
        props.Choice_Theme == 'cg1' ? 'white' : 'white'
    };
    
    value: ${(props) => props.btntext};

    box-shadow: ${(props) => props.Choice_BoxShadow == 'Yes' ? '2px 0px 8px #0000002b' : 'none'};
    
    border-radius: ${(props) => props.Choice_BorderRadius == 'Yes' ? props.border_radius+'px' : 'none'};

    border: ${(props) => props.border_width > 0 ? props.border_width+'px solid #555555' : 'none'} ;


    padding: ${(props) => props.Choice_Size == '5' ? '5px 5px' : 
            props.Choice_Size == '10' ? '10px 10px' :
            props.Choice_Size == '15' ? '15px 15px' : '20px 20px'
        };
    
    width: ${(props) => props.Choice_Width == '25' ? '25%' : 
        props.Choice_Width == '50' ? '50%' :
        props.Choice_Width == '75' ? '75%' : '100%'
    }; 

    &:before {
        text-align: center;
        content: "${(props) => props.btntext}";
    }

`;

