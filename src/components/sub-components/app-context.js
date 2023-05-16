import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

const AppProvider = (props) => {
  const { children } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [button1Text, setButton1Text] = useState("");
  const [button2Text, setButton2Text] = useState("");
  const [addButton, setAddButton] = useState("");
  const [numButtons, setNumButtons] = useState("");
  const [theme, setTheme] = useState();
  const [addImage, setAddImage] = useState("");
  const [width, setWidth] = useState("");
  const [image, setImage] = useState("");
  const [headerProps, setHeaderProps] = useState({});
  const [noOfMenus, setNoOfMenus] = useState("");
  const [eachMenu, setEachMenu] = useState([]);
  //const [ type,setType ]=useState('');
  let basicValues = { type: "", menuText: "" };
  const [noOfOptions, setNoOfOptions] = useState("");
  let dropdownValues = { type: "", menuText: "" };
  const [navtheme, setNavTheme] = useState("");
  const [showIcons, setShowIcons] = useState(false);

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
    ].filter((button) => button.text !== ""),
    image,
    addImage,
    width,
    theme,
  };

  const navValues = {
    noOfMenus,
    eachMenu,
    basicValues,
    dropdownValues,
    noOfOptions,
    showIcons,
    navtheme,
  };

  return (
    <AppContext.Provider
      value={{
        newCard,
        title,
        description,
        addButton,
        numButtons,
        button1Text,
        button2Text,
        image,
        addImage,
        width,
        theme,
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
        headerProps,
        setHeaderProps,
        noOfMenus,
        eachMenu,
        noOfOptions,
        basicValues,
        dropdownValues,
        navtheme,
        showIcons,
        setNoOfMenus,
        setEachMenu,
        setNoOfOptions,
        setNavTheme,
        setShowIcons,
        navValues
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
