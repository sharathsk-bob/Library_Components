import React from "react";
import "./cards.scss";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../app-context";
import { useNavigate } from "react-router-dom";
import useModal from "../use-modal/use-modal";
import EditCard from "./edit-card";
import ReactDOMServer from 'react-dom/server';
import CardHeader from "./card-header";
import CardHtml from "./card-html";


function Cards(props) {
  //const { title,description,actionBtn,btn1,btn2,img }=props;
  //just

  //const { props }=useContext(AppContext);
 
  //let objectUrl;
  // if(props.image!==null && props.image!=='' && props.image!==undefined){
  //   objectUrl = URL.createObjectURL(props.image)
  // }
 // const history = useNavigate();
  return (
    <>
    <div className="card-container">
    <div class={`card ${props?.theme == "Dark"?"Dark":props?.theme == "cg1"?"cg1":props?.theme == "cg2"?"cg2":props?.theme == "Normal"?"Normal":"" } ${props?.width=="100%"?"card-fullwidth":props?.width=="75%"?"card-threefourthwidth":props?.width=="50%"?"card-halfwidth":props?.width=="25%"?"card-quaterwidth":""}`}>
      <div className="card__img-container" style={{display:props?.addImage==1?"flex":"none"}}>
        {/* {objectUrl?<img
          src={objectUrl}
          class="ui-image bv bw bx by card__img"
          alt="myimage"
        />: */}
        <img
          src="https://azwelzdevappwbh.azurewebsites.net/assets/7FE422D6-6C37-4E3D-A5B7-8D1085281553"
          class="ui-image bv bw bx by card__img"
          alt="default-image"
        />
      </div>
      <div class="card__content">
        <div className="heading_title">
          <h5 class="card__title my_title">{props?.title}</h5>
        </div>
        <div
          class="card__content-spaced card__actions"
          title={props?.description}
        >
          <span class="card-description">
          {props?.description}
          </span>
        </div>
       
        <div class="card-footer-new">
  {props?.buttons?.length === 2 ? (
  <>
    <button
      class="button button--primary card__cta library-add-button"
      aria-label="Listen more about My Mental Health Journey Podcast"
    >
      {props?.buttons[1].text}
    </button>
    <button
      class="button button--primary card__cta library-add-button"
      aria-label="Listen more about My Mental Health Journey Podcast"
    >
      {props?.buttons[0].text}
    </button>
  </>
) : props?.buttons?.length=== 1 ? (
  <button
    class="button button--primary card__cta library-add-button"
    aria-label="Listen more about My Mental Health Journey Podcast"
  >
    {props?.buttons[0].text}
  </button>
) : null}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Cards;
