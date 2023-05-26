import "./header.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import EditHeaderModal from "./edit-header";
import useModal from "../../sub-components/use-modal/use-modal";
import Header from "./header-main";
import HeaderHtml from "./header-html";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";

export const CustomStyleHeader = styled.div`
.header-output{
  .component-header{
      display: flex;
      
  justify-content: space-between;
  box-shadow: 4px -2px 9px var(--color-grey-wbh);
  align-items: center;
  padding: 15px;
  // margin: 0px 31px;
  .header-left{
      display: flex;
      align-items: center;
      // padding: 15px;
      h1{
          font-size: 1.35rem;
          text-transform: uppercase;
          font-weight: 700;
          margin: 0;
          color: var(--color-capgemini-blue);
          margin-left: 10px !important;
      }
      span{
          font-size: 1.35rem;
          text-transform: uppercase;
          font-weight: 700;
          margin: 0;
          color: var(--color-black);
          margin-left: 10px !important;
      }
  }
  
  .header-right{
      .button-section{
          font-size: 14px;
          button {
              margin-right: 14px;
      
      padding: 0.5rem;
      
      font-weight: bold;
      background-color:  var(--color-capgemini-blue);
      border-color:  var(--color-capgemini-blue);
      color:  var(--color-white);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      
          }
         .link-button{
              margin-right: 14px;
      text-decoration: none;
              padding: 0.5rem;
              
              font-weight: bold;
              background-color:  var(--color-capgemini-blue);
              border-color:  var(--color-capgemini-blue);
              color:  var(--color-white);
              border: none;
              border-radius: 5px;
              cursor: pointer;
          }
      }
  }
  }
}
`;

const HeaderComponent = ( ) => {
  const location = useLocation();
  const { open: openEditHeader, close: closeEditHeader, ModalWrapper: ModalWrapperEditHeader } = useModal();
  const props = location.state.headerProps;
  // console.log(location.state.headerProps, "props in header");
  const [activeTab, setActiveTab] = useState(0);
  
  const formattedCSS = CustomStyleHeader.componentStyle.rules[0];

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
      navigator.clipboard.writeText(formattedCSS)
      .then(() => {
          setCopied(true);
          setTimeout(() => {
          setCopied(false);
          }, 2000);
      })
      .catch((error) => {
          console.error('Failed to copy to clipboard:', error);
      });
  };
 
  return (
    <>
    <ModalWrapperEditHeader>
    <EditHeaderModal close={closeEditHeader} data={props} />
			</ModalWrapperEditHeader>
    <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
      <div className="component-header">
        <div className="header-left">
         <h1>Header</h1><span> Component</span> 
        </div>
        <div className="header-right"> 
        <div className="button-section">
       
        <Link
              to="/"     
              className="link-button"     
            >
              Back
            </Link>
                <button class="buttons" onClick={openEditHeader} >
                  Edit
                </button>
              </div>
        </div> 
      </div>
    <Header headerVal={props}/>
    </div>
    <div className="card-tabs">
        <button className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
            HTML
        </button>
        <button className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>
            CSS
        </button>
    </div>

    <div className="card-content">
    {activeTab === 0 ? (
      <>
        <div className='clipboard-div'>
            <button className='clipboard-btn' onClick={copyToClipboard}>
                <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
                    {copied ? ' Copied!' : ' Copy Code'}
                </i>
            </button>
        </div>

        <SyntaxHighlighter language="css" style={coy}>
          {formattedCSS}
        </SyntaxHighlighter>
      </>
      
    ) : (
        <HeaderHtml headerVal={props} />
    )}
    </div>
    </>
  );
};
export default HeaderComponent;
