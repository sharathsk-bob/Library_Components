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
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 300px;
  height: 300px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 100px auto;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
body{
  margin:0;
  padding:0;
}
@keyframes barWidth {
    0%   {width: 0%;}
    25%  {width: 50%;}
    50%  {width: 100%;}
    75%  {width: 50%;}
    100% {width: 0%;}
}
@keyframes barWidth2 {
    0%   {width: 0%;}
    50%  {width: 50%;}
    100% {width: 100%;}
}
.horizontal-bar-wrap{
  height: 4px;
  width: 100%;
  margin: 80px 0px;
  .bar{
    position: relative;
    width: 0%;
    height: 100%;
    margin: 0 auto;
    animation: barWidth;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    &.bar1{
      animation-delay: 0s;
      background: #02a09a;
      top: 0;
      z-index: 1;
    }
//     &.bar2{
//       animation-delay: 2s;
//       background: green;
//       top: -4px;
//       z-index: 2;
//     }
//     &.bar3{
//       animation-delay: 4s;
//       background: blue;
//       top: -8px;
//       z-index: 3;
//     }
//     &.bar4{
     
//       animation-delay: 6s;
//       background: magenta;
//       top: -12px;
//       z-index: 4;
//     }
  }
}

.loaderhorizontalDark{
  .progress-loader{
        background: black !important;
      }
}
.loaderhorizontalcg1{
.progress-loader{
        background: #0070AD !important;
      }
}
.loaderhorizontalcg2{
.progress-loader{
        background:  #2b0a3d !important ;
      }

}
.loaderhorizontalNormal{
.progress-loader{
        background:  #3498db!important ;
      }

}

.type-button {
width: max-content !important;
}

.main {
height: 300px;
width: 400px;
position: relative;
display: flex;
justify-content: center;
align-items: center;

box-shadow: 2px 3px 6px 0 rgba(0,0,0,0.2);
}
.wrap-bar {
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 60px;
}
.bar {
position: relative;
height: 30px;
width: 100%;
border: 1px solid black;
border-radius: 5px;
box-shadow: 2px 3px 6px 0 rgba(0,0,0,0.2);
}
.loaderhorizontalmed{
width: 50% !important;
}
.loaderhorizontalsmall{
width: 25% !important;
}
.loadermed{
  width: 150px !important;
  height:150px !important;
}
.loadersmall{
  width: 75px !important;
  height:75px !important;
}
.progress-loader {
position: absolute;
left: 0;
top: 0;
bottom: 0;
width: 0%;
animation: progressing 2s infinite;
background-color: #7abf70;
}
@keyframes progressing {
100% { width: 100%; }
}
.text {
position: relative;
overflow: hidden;
}
.text p {
margin-bottom: 0;
}

@keyframes masking {
100% { left: 100%; }
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
        </div>
        <LoaderComponentMain loaderVal={props}/>
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