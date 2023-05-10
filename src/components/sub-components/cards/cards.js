import React from "react";
import "./cards.scss";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../app-context";
import { useNavigate } from "react-router-dom";
import useModal from "../use-modal/use-modal";
import EditCard from "./edit-card";

function Cards() {
  //const { title,description,actionBtn,btn1,btn2,img }=newCard;
  //just
  const {
    setTitle,
    setDescription,
    setAddButton,
    setNumButtons,
    setButton1Text,
    setButton2Text,
    setImage,
    setAddImage,
    setWidth,
    setTheme,

  } = useContext(AppContext);
  const { newCard }=useContext(AppContext);
  const { open: openEditCards, close: closeEditCards, ModalWrapper: ModalWrapperEditCards } = useModal();
  //let objectUrl;
  // if(newCard.image!==null && newCard.image!=='' && newCard.image!==undefined){
  //   objectUrl = URL.createObjectURL(newCard.image)
  // }
  const history = useNavigate();
  console.log(newCard);
  const resetNewCard = () => {
    setTitle("");
    setDescription("");
    setAddButton("");
    setNumButtons("");
    setButton1Text("");
    setButton2Text("");
    setImage("");
    setAddImage("");
    setWidth("");
    setTheme("");
  };
  return (
    <>
    <ModalWrapperEditCards>
      <EditCard close={closeEditCards} newCard={newCard}/>
    </ModalWrapperEditCards>
    <div className="card-component">
    <div className="card-left">
    <h1>Card</h1><span> Component</span> 
        </div> 
   
      <div>
      <button className="backToHome" onClick={()=>{history("/");resetNewCard();}}>Back</button>
      <button className="edit-card" onClick={openEditCards}>Edit</button>
      </div>
    </div>
    <div className="card-container">
    <div class={`card ${newCard?.theme == "Dark"?"Dark":newCard?.theme == "cg1"?"cg1":newCard?.theme == "cg2"?"cg2":newCard?.theme == "Normal"?"Normal":"" }`} style={{ width:newCard.width }}>
      <div className="card__img-container" style={{display:newCard.addImage==1?"flex":"none"}}>
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
          <h5 class="card__title my_title">{newCard.title}</h5>
        </div>
        <div
          class="card__content-spaced card__actions"
          title={newCard.description}
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
    </div>
   
    </>
  );
}

export default Cards;
