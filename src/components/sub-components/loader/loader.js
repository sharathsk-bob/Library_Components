import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";
import LoaderHtml from "./loader-html";
import EditLoaderModal from "./edit-loader";
import LoaderComponentMain from "./loader-mains";
// import "./header.scss";

export const CustomStyleLoader = styled.div`
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

const LoaderComponent = ( ) => {
    const location = useLocation();
    const { open: openEditLoader, close: closeEditLoader, ModalWrapper: ModalWrapperEditLoader } = useModal();
    const props = location.state.loaderProps;
    // console.log(location.state.loaderProps, "props in loader");
    const [activeTab, setActiveTab] = useState(0);
    
    const formattedCSS = CustomStyleLoader.componentStyle.rules[0];
  
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
        <ModalWrapperEditLoader>
          <EditLoaderModal close={closeEditLoader} data={props} />
        </ModalWrapperEditLoader>
        <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
          <div className="component-header">
            <div className="header-left">
            <h1>Loader</h1><span> Component</span> 
            </div>
            <div className="header-right"> 
              <div className="button-section">        
                <Link to="/" className="link-button">
                  Back
                </Link>
                <button class="buttons" onClick={openEditLoader} >
                  Edit
                </button>
              </div>
            </div> 
          </div>
        <LoaderComponentMain loaderVal={props}/>
        </div>
        <div className="card-tabs">
            <button className={activeTab === 1 ? "active" : ""} aria-label="HTML Page of Header Component" onClick={() => setActiveTab(1)}>
              HTML
            </button>
            <button className={activeTab === 0 ? "active" : ""} aria-label="CSS Page of Header Component" onClick={() => setActiveTab(0)}>
              CSS
            </button>
        </div>
  
        <div className="card-content">
        {activeTab === 0 ? (
          <>
            <div className='clipboard-div'>
              <button className='clipboard-btn' aria-label="copy to clipboard button" onClick={copyToClipboard}>
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
          <LoaderHtml loaderVal={props} />
        )}
        </div>
       
      </>
    );
};
export default LoaderComponent;