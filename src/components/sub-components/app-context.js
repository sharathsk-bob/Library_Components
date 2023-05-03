import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

const AppProvider=props=>{
    const { children } = props;
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [button1Text, setButton1Text] = useState('');
  const [button2Text, setButton2Text] = useState('');
  const [addButton, setAddButton] = useState(null);
  const [numButtons, setNumButtons] = useState(null);
  const [addImage, setAddImage] = useState(null);
  const [width, setWidth] = useState('');
  const [image, setImage] = useState('');
    const newCard = {
        title,
        description,
        addButton,
        numButtons,
        buttons: [
          {
            text: button1Text,
            onClick: () => {
              alert(`Button 1 clicked on ${title}`);
            },
          },
          {
            text: button2Text,
            onClick: () => {
              alert(`Button 2 clicked on ${title}`);
            },
          },
        ].filter((button) => button.text !== ''),
        image,
        addImage,
        width
      };
    return(
    <AppContext.Provider value={{ newCard,title,description,addButton,numButtons,button1Text,button2Text,image,addImage,width,setTitle,setDescription,setAddButton,setNumButtons,setButton1Text,setButton2Text,setImage,setAddImage,setWidth }}>
          {children}
    </AppContext.Provider>
    );
}

export { AppContext, AppProvider };