import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

const AppProvider=props=>{
    const { children } = props;
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [button1Text, setButton1Text] = useState('');
  const [button2Text, setButton2Text] = useState('');
  const [width, setWidth] = useState('');
  const [image, setImage] = useState(null);
    const newCard = {
        title,
        description,
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
        width
      };
    return(
    <AppContext.Provider value={{ newCard,title,description,button1Text,button2Text,image,width,setTitle,setDescription,setButton1Text,setButton2Text,setImage,setWidth }}>
          {children}
    </AppContext.Provider>
    );
}

export { AppContext, AppProvider };