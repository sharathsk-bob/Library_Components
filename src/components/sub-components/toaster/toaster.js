import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import EditToaster from './edit-toaster';
import "./toaster.scss";
import ToasterMain from './toaster-main';
import ToasterHtml from './toaster-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";

export const CustomStyleToaster = styled.div`
.Normal {
  background-color: #f1f4f8 !important;

}
.Dark {
  background-color: black !important;
  color: white !important;
  .btn-close{
      background: white url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e") center/1em auto no-repeat !important;
  }
 

}
.cg1 {

  color: #ffff !important;

.toast-header{
  color: white!important;
}
}
.cg2 {
  background-color: #2b0a3d !important;

  color: #ffff !important;
  .btn-close{
      background: white url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e") center/1em auto no-repeat !important;
  }

}
.component-toaster{
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.168627451);
  align-items: center;
  padding: 15px;
  .toaster-left{
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
  .toaster-right{
      .button-section{
          font-size: 14px;
          button {
              margin-right: 14px;
      
      padding: 0.5rem;
      
      font-weight: bold;
      background-color: var(--color-capgemini-blue);
      border-color: var(--color-capgemini-blue);
      color: var(--color-white);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      
          }
         .link-button{
              margin-right: 14px;
      text-decoration: none;
              padding: 0.5rem;
              
              font-weight: bold;
              background-color: var(--color-capgemini-blue);
              border-color: var(--color-capgemini-blue);
              color: var(--color-white);
              border: none;
              border-radius: 5px;
              cursor: pointer;
          }
      }
  }
}
.toaster-main{
  z-index: 99;
}
.toaster-button{
  text-align: center;
  margin: 100px;
}
.toaster-button button{
  background-color:var(--color-capgemini-blue);
}
.top-0 {
  top: 60px!important;
}
.toast-header{
  font-size: 1.2rem;
  justify-content: space-evenly;
}
.toast {
   --bs-toast-border-radius: 0rem  !important;
   --bs-toast-header-border-color: none ;
  --bs-toast-header-color: #6c757d;
  --bs-toast-header-bg: none;
  min-width: 500px;

}
.success{
  border-color: #178c3d !important; 

     --bs-toast-header-color: #178c3d !important; 
}
.warning{
  border-color:#da681d !important;

      --bs-toast-header-color: #da681d!important; 

}
.error{
  border-color: red !important;

      --bs-toast-header-color: red !important; 
}
.info{
  border-color: #177cb4 !important;

      --bs-toast-header-color: #177cb4 !important; 
}
.btn-close{
  font-size: 0.875rem;
}
.toast-header strong{
  margin-left: 15px;
  font-size: 1rem;
}
`;

function Toaster() {

  const location = useLocation();
  const [activeTab, setActiveTab] = useState(1);

  const props = location.state.toasterProps;
  const { open: openEditToaster, close: closeEditToaster, ModalWrapper: ModalWrapperEditToaster } = useModal();

  const formattedCSS = CustomStyleToaster.componentStyle.rules[0];

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
      <ModalWrapperEditToaster>
        <EditToaster close={closeEditToaster} data={props} />
			</ModalWrapperEditToaster>
      <div className="component-toaster">
            <div className="toaster-left">
              <h1>Toaster</h1>
              <span> Component</span>
            </div>
            <div className="toaster-right">
              <div className="button-section">
                {/* <div  className="buttons"> */}
                <Link
                  to="/"
                  // state={headerData}
                  className="link-button"
                >
                  Back
                </Link>
                {/* </div> */}

                {/* <button className="backToHome" onClick={()=>{history("/")}}>Back</button> */}
                <button class="buttons" onClick={openEditToaster}>Edit</button>
              </div>
            </div>
      </div>
      <ToasterMain {...props}/>
      <div className="card-tabs">
        <button
          className={activeTab === 1 ? "active" : ""}
          aria-label="HTML Page of Toaster Component"
          onClick={() => setActiveTab(1)}
        >
          HTML
        </button>
        <button
          className={activeTab === 0 ? "active" : ""}
          aria-label="CSS Page of Toaster Component"
          onClick={() => setActiveTab(0)}
        >
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
          <ToasterHtml {...props} />
        )}
      </div>
    </>
  )
}

export default Toaster