import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";
import LoginMain from "./login-main";
import EditLoginModal from "./edit-login";



const LoginComponent = ( ) => {
  const { open: openEditLogin, close: closeEditLogin, ModalWrapper: ModalWrapperEditLogin } = useModal();
    const location = useLocation();
    const props = location.state.loginProps;
    return (
      <>
       <ModalWrapperEditLogin>
        <EditLoginModal close={closeEditLogin} data={props} />
			</ModalWrapperEditLogin>
      <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
          <div className="component-header">
            <div className="header-left">
            <h1>Login</h1><span> Component</span> 
            </div>
            <div className="header-right"> 
              <div className="button-section">        
                <Link to="/" className="link-button">
                  Back
                </Link>
                <button class="buttons"  onClick={openEditLogin}>
                  Edit
                </button>
              </div>
            </div> 
          </div>
        </div>
     
       <LoginMain loginVal={props} />
      </>
    );
};
export default LoginComponent;