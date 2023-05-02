import React from "react";
import "./cards.scss";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../app-context";

function Cards() {
  //const { title,description,actionBtn,btn1,btn2,img }=newCard;
  //just
  const { newCard }=useContext(AppContext);
  let objectUrl;
  if(newCard.image!==null && newCard.image!=='' && newCard.image!==undefined){
    objectUrl = URL.createObjectURL(newCard.image)
  }
  console.log(newCard);
  return (
    <div class="card" style={{ width:newCard.width }}>
      <div className="card__img-container">
        {objectUrl?<img
          src={objectUrl}
          class="ui-image bv bw bx by card__img"
          alt="myimage"
        />:
        <img
          src="https://azwelzdevappwbh.azurewebsites.net/assets/7FE422D6-6C37-4E3D-A5B7-8D1085281553"
          class="ui-image bv bw bx by card__img"
          alt="myimage"
        />}
      </div>
      <div class="card__content">
        <div className="heading_title">
          <h5 class="card__title my_title">{newCard.title}</h5>
        </div>
        <div
          class="card__content-spaced card__actions"
          title="Occurs Every 4th  Wednesday  of each month effective 10 Mar 2023 until 30 Apr 2023"
        >
          <span class="card-description">
          {newCard.description}
          </span>
        </div>
       
        <div class="card-footer-new">
  {newCard.buttons.length === 2 ? (
  <>
    <button
      class="button button--primary card__cta library-add-button"
      aria-label="Listen more about My Mental Health Journey Podcast"
    >
      {newCard.buttons[1].text}
    </button>
    <button
      class="button button--primary card__cta library-add-button"
      aria-label="Listen more about My Mental Health Journey Podcast"
    >
      {newCard.buttons[0].text}
    </button>
  </>
) : newCard.buttons.length=== 1 ? (
  <button
    class="button button--primary card__cta library-add-button"
    aria-label="Listen more about My Mental Health Journey Podcast"
  >
    {newCard.buttons[0].text}
  </button>
) : null}
        </div>
      </div>
    </div>
  );
}

export default Cards;
