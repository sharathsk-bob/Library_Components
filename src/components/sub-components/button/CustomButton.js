import style from "styled-components";
 
export const CustomButton = style.button`
    
    cursor: pointer;
    background-color: cyan;
    margin-top: 32px;
    
    font-size:20px;
    color: white;
    padding: 16px 32px;
    
    value: ${(props) => props.btntext};
    border-radius: ${(props) => props.border_radius}px;
    border: ${(props) => props.border_width}px solid #555555;
    box-shadow: 0 ${(props) => props.box_shadow}pxpx 8px 0 rgba(0,0,0,0.2);

    padding: ${(props) => props.size}px ${(props) => props.size}px;

    &:before {
        text-align: center;
        content: "${(props) => props.btntext}";
    }

`;

