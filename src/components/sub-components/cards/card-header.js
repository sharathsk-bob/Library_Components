import React from 'react';
import useModal from "../use-modal/use-modal";
import EditCard from "./edit-card";
import { AppContext } from "../app-context";
import { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from './cards';
import CardHtml from './card-html';
import './cards.scss';



function CardHeader() {
    const history=useNavigate();
    const [activeTab, setActiveTab] = useState(0);

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
    const { open: openEditCards, close: closeEditCards, ModalWrapper: ModalWrapperEditCards } = useModal();
    const { newCard }=useContext(AppContext);
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
      const handleChange=()=>{
        history("/");
        resetNewCard();
      }
    
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
    <button className="backToHome" onClick={handleChange}>Back</button>
    <button className="edit-card" onClick={openEditCards}>Edit</button>
    </div>
  </div>
  <Cards {...newCard}/>
  {/* <CardHtml newCard={newCard}/> */}
  <div className="card-tabs">
  <button
    className={activeTab === 1 ? "active" : ""}
    onClick={() => setActiveTab(1)}
  >
    HTML
  </button>
  <button
    className={activeTab === 0 ? "active" : ""}
    onClick={() => setActiveTab(0)}
  >
    TAB2
  </button>
</div>
<div className="card-content">
  {activeTab === 0 ? (
    ("")
  ) : (
    <CardHtml newCard={newCard} />
  )}
</div>

  </>
  )
}

export default CardHeader;