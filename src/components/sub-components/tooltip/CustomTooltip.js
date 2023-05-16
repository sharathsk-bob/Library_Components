import React from "react";
import styled from "styled-components";


const TooltipText = styled.div`

    margin-top: 70px;
    background-color: ${(props) => props.Choice_Theme == 'Normal' ? 'white' : 
    props.Choice_Theme == 'Dark' ? 'black' :
    props.Choice_Theme == 'cg1' ? '#0070AD' : '#2b0a3d'
    };

    color: ${(props) => props.Choice_Theme == 'Normal' ? 'black' : 
    props.Choice_Theme == 'Dark' ? 'white' :
    props.Choice_Theme == 'cg1' ? 'white' : 'white'
    };

    width: 200px;
    text-align: center;
    line-height: 44px;
    border-radius: 3px;
    cursor: pointer;
`;
const TooltipBox = styled.div`

    position: absolute;
    visibility: hidden;
    color: transparent;
    background-color: transparent;
    width: 150px;
    padding: 5px 5px;
    border-radius: 4px;
    transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,padding 0.5s ease-in-out;

    ${(props) => props.Choice_Direction == 'bottom' ?  
        `top: calc(100% + 10px);
        left: 0px; 
        &:before {
            content: "";
            width: 0;
            height: 0;
            left: 100px;
            top: -10px;
            position: absolute;
            border: 10px solid transparent;
            transform: rotate(135deg);
            transition: border 0.3s ease-in-out;
        }`
    : props.Choice_Direction == 'top' ? 
        `top: calc(100% - 120px);
        left: 0px; 
        &:before {
            content: "";
            width: 0;
            height: 0;
            left: 100px;
            top: 55px;
            position: absolute;
            border: 10px solid transparent;
            transform: rotate(-45deg);
            transition: border 0.3s ease-in-out;
        }`
    : props.Choice_Direction == 'left' ? 
        `top: calc(100% - 55px);
        left: -210px; 
        &:before {
            content: "";
            width: 0;
            height: 0;
            left: 190px;
            top: 25px;
            position: absolute;
            border: 10px solid transparent;
            transform: rotate(-135deg);
            transition: border 0.3s ease-in-out;
        }` 
    : props.Choice_Direction == 'right' ? 
        `top: calc(100% - 55px);
        left: 210px; 
        &:before {
            content: "";
            width: 0;
            height: 0;
            left: -5px;
            top: 25px;
            position: absolute;
            border: 10px solid transparent;
            transform: rotate(45deg);
            transition: border 0.3s ease-in-out;
        }`
    : props.Choice_Direction == 'topleft' ? 
        `top: calc(100% - 120px);
        left: -90px; 
        &:before {
            content: "";
            width: 0;
            height: 0;
            left: 140px;
            top: 55px;
            position: absolute;
            border: 10px solid transparent;
            transform: rotate(-45deg);
            transition: border 0.3s ease-in-out;
        }`
    : props.Choice_Direction == 'topright' ? 
        `top: calc(100% - 120px);
        left: 90px; 
        &:before {
            content: "";
            width: 0;
            height: 0;
            left: 40px;
            top: 55px;
            position: absolute;
            border: 10px solid transparent;
            transform: rotate(-45deg);
            transition: border 0.3s ease-in-out;
        }` 
        : props.Choice_Direction == 'bottomleft' ? 
        `top: calc(100% + 10px);
        left: -90px;  
        &:before {
            content: "";
            width: 0;
            height: 0;
            left: 140px;
            top: -10px;
            position: absolute;
            border: 10px solid transparent;
            transform: rotate(135deg);
            transition: border 0.3s ease-in-out;
        }`
    : props.Choice_Direction == 'bottomright' ? 
        `top: calc(100% + 10px);
        left: 90px; 
        &:before {
            content: "";
            width: 0;
            height: 0;
            left: 40px;
            top: -10px;
            position: absolute;
            border: 10px solid transparent;
            transform: rotate(135deg);
            transition: border 0.3s ease-in-out;
        }` 
    : ``};
`;
const TooltipCard = styled.div`
    position: relative;
    & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 200px;
    text-align: center;
    padding: 8px 8px;
        &:before {
            border-color: transparent transparent rgba(0, 0, 0, 0.8)rgba(0, 0, 0, 0.8);
        }
    }
`;
export default function CustomTooltip(props) {
    console.log("Props yahan aa rhe hai kya ?????", props);
  return (
    <>
      <TooltipCard>
        <TooltipText{...props}>
            {props.icontext}
        </TooltipText>
        <TooltipBox {...props} >
            <p>{props.tooltiptext}</p>
        </TooltipBox>
      </TooltipCard>
      {/* <h4 style={{ color: "rgba(0,0,0,0.5)" }}>
        Some content that is right below Hover :D
      </h4> */}
    </>
  );
}