import React from "react";
import "./cards.scss";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../app-context";

function Cards() {
  //const { title,description,actionBtn,btn1,btn2,img }=newCard;
  //just check
  const { newCard }=useContext(AppContext);
  
  const objectUrl = URL.createObjectURL(newCard.image)
  console.log(newCard);
  return (
    <div class="card">
      <div className="card__img-container">
        <img
          src={objectUrl}
          class="ui-image bv bw bx by card__img"
          alt="myimage"
        />
      </div>
      <div class="card__content">
        <div className="heading_title">
          <h5 class="card__title my_title">{newCard.title}</h5>
        </div>
        <div
          class="card__content-spaced card__actions"
          title="Occurs Every 4th  Wednesday  of each month effective 10 Mar 2023 until 30 Apr 2023"
        >
          <span class="singledate">
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
