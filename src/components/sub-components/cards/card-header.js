import React from 'react';
import useModal from "../use-modal/use-modal";
import EditCard from "./edit-card";
import { AppContext } from "../app-context";
import { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from './cards';
import CardHtml from './card-html';
import './cards.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";

export const CustomStyleCards = styled.div`
.Normal{
  background-color: #f1f4f8;
  
 
  color: var(--color-capgemini-blue) !important;
  .card__title {
      color: var(--color-capgemini-blue) !important;
   } 
  
}
.Dark{
  color: #ffff !important;
  .card__title {
      color: white !important;
   }  
   .card__cta, .card__cta:hover {
      background-color: white !important;
      border-color: black !important;
      color: black !important;
  }
}
.cg1{
  background-color: var(--color-capgemini-blue) !important;
 
  color: #ffff !important; 
  .card__title {
      color: white !important;
   }  
   .card__cta, .card__cta:hover {
      background-color: white !important;
      border-color: black !important;
      color: black !important;
  }
}
.cg2{
  background-color:#2b0a3d !important;
  
 
  color: #ffff !important;  
  .card__title {
     color: white !important;
  }  
  .card__cta, .card__cta:hover {
      background-color: white !important;
      border-color: black !important;
      color: black !important;
  }
}
.card-fullwidth{
  width: 100% !important;
}
.card-threefourthwidth{
  width: 75% !important;
}
.card-halfwidth{
  width: 50% !important;
}
.card-quaterwidth{
  width: 25% !important;
}
.card-component{
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.168627451);
  align-items: center;
  padding: 15px;
  .card-left{
      display: flex;
      align-items: center;
      h1{
          font-size: 1.35rem;
          text-transform: uppercase;
          font-weight: 700;
          margin: 0;
          color: #0070ad;
          margin-left: 10px !important;
      }
      span{
          font-size: 1.35rem;
          text-transform: uppercase;
          margin: 0;
          color: #333;
          margin-left: 10px !important;
      }
  }
}
.edit-card{
  background-color:var(--color-capgemini-blue);
  border-color: var(--color-capgemini-blue);
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem;
  text-decoration: none;
  margin-left: 14px;
  box-shadow: none;
  border: none;
}
.backToHome{
  background-color: var(--color-capgemini-blue);
  border-color: var(--color-capgemini-blue);
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem;
  text-decoration: none;
  box-shadow: none;
  border: none;
}
.card {
background-color: white;
box-shadow: var(--box-shadow);
width: 100%;
display: inline-flex;
flex-direction: column;
  .card__img-container {
      display: flex;
      justify-content: center;
      height: 100%;
      max-height: 260px;
      position: relative;
  }

  .by {
      height: auto;
  }
  .bx {
      vertical-align: middle;
  }
  .bw {
      display: inline-block;
  }
  .bv {
      box-sizing: border-box;
  }
  .card__img {
      max-width: 100%;
      object-fit: cover;
      padding: 0 0 8px;
      width: 100%;
  }
  img {
      border-style: none;
  }
  .card__content {
      padding: 20px;
      padding-top: 0;
      flex-grow: 1;
      display: block;
      grid-template-columns: minmax(0, 1fr) max-content max-content;
      grid-template-rows: min-content min-content minmax(0, 1fr);
      grid-template-areas:
          "title   flag    more"
          "avatars avatars avatars"
          "actions actions actions";
  }
  .heading_title {
      display: flex;
      justify-content: space-between;
      padding: 8px 0px;
  }
  .card__title {
      grid-area: title;
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0;
  }
  .my_title {
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
      text-overflow: ellipsis;
  }
  .card__actions {
      grid-area: actions;
      align-items: center;
      align-self: flex-start;
  }
  .card__content-spaced {
      align-items: center;
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 16px;
  }
  .card-description {
      font-size: 1rem;
      text-align: initial;
  }
  .card-footer-new{
      display: flex;
      justify-content: end;
  }
  .button {
      background-color: transparent;
      align-items: center;
      border: 1px solid transparent;
      display: flex;
      font-weight: 600;
      justify-content: center;
      padding: 4px 8px;
      width: auto;
  }
  .button--primary {
      background-color: #12abdb;
      border-color: #12abdb;
      border-radius: 4px;
      box-shadow:  0 0.3px 0.9px rgba(0,0,0,0.1),0 1.6px 3.6px rgba(0,0,0,0.14);
      color: white;
      cursor: pointer;
      text-decoration: none;
  }
  .card__cta {
      display: flex;
      align-self: flex-end;
  }

  .library-add-button{
      margin-left: 20px;
    
  
  }
  
  .card-description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
   
}
.card-container{
  margin: 40px 33px 40px 33px;
  justify-content: center;
  display: flex;
}
.card-tabs {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.card-tabs button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
  padding: 10px;
  transition: all 0.2s ease-in-out;
}

.card-tabs button:hover {
  background-color: #f8f8f8;
}

.card-tabs button.active {
  border-bottom: 2px solid #333;
}

.card-content {
  border: 1px solid #ccc;
  margin-top: 20px;
  padding: 20px;
}


@media screen and (min-width:320px) and (max-width: 767px){
  .card-component .card-left{
  display: grid;
  }
  .card-quaterwidth{
      width: 75% !important;
  }
  .card-halfwidth{
      width: 75% !important;
  }
  .card__title {
      font-size: 1.2rem !important;
  }
  .card-description {
      font-size: 0.7rem !important;
  }
  .card .library-add-button {
      margin: 5px !important;
  }
  .card .card__content {
      padding: 8px;
  }
}
`;

function CardHeader() {
    const history=useNavigate();
    const [activeTab, setActiveTab] = useState(1);

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
    CSS
  </button>
</div>
<div className="card-content">
  {activeTab === 0 ? (
    <SyntaxHighlighter language="css" style={coy}>
    {CustomStyleCards.componentStyle.rules[0]}
</SyntaxHighlighter>
  ) : (
    <CardHtml newCard={newCard} />
  )}
</div>

  </>
  )
}

export default CardHeader;