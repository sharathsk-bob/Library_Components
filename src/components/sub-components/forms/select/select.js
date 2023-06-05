import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useModal from '../../use-modal/use-modal';
import { Link } from 'react-router-dom';
import EditSelect from './edit-select';
import SelectHtml from './select-html';
import SelectMain from './select-main';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";
import './select.scss';

export const CustomStyleSelect = styled.div`
@import "../../../theme/breakpoints.scss";

.select-fullwidth{
    width:100%;
}
.select-threefourthwidth{
    width: 75% !important;
}
.select-halfwidth{
    width: 50% !important;
}
.select-quaterwidth{
    width: 25% !important;
}
.slect-output{
    margin: 20px;

#multiselectContainerReact{
    .searchWrapper{
        border: none !important; 
    width: 100% !important;
    }
}
}

@media screen and (max-width: 300px){
   .slect-output{
      label{
        font-size: 0.6rem;
      }
    }
    }


    @media screen and (max-width: $bp-sm-mobile){
        .component-toaster{
            display: block!important;
            .toaster-left{
                h1{
                    font-size: 0.9rem!important;
                }
                span{
                    font-size: 0.9rem!important;
                }
            }
          
            .toaster-right{
                margin-left: 10px;
                margin-top: 10px;
                .buttons{
                    // width: 12%;
                    padding: 0.4rem!important;
                    font-size: 12px;
                }
                .link-button{
                    padding: 0.4rem!important;
                    font-size: 12px;  
                }
            }
        }
    
    }
`;
function SelectComponent() {
  const location = useLocation();
  const select = location.state.selectProps;
  const [activeTab, setActiveTab] = useState(1);
  const { open: openEditSelect, close: closeEditSelect, ModalWrapper: ModalWrapperEditSelect } = useModal();
  const formattedCSS = CustomStyleSelect.componentStyle.rules[0];
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
    <ModalWrapperEditSelect>
      <EditSelect close={closeEditSelect} data={select}/>
    </ModalWrapperEditSelect>
    <div className="component-toaster">
      <div className="toaster-left">
        <h1>Select</h1>
        <span> Component</span>
      </div>
      <div className="toaster-right">
        <div className="button-section">
          {/* <div  className="buttons"> */}
          <Link
            to="/formcomponents"
            aria-label="back to form component homepage"
            // state={headerData}
            className="link-button"
          >
            Back
          </Link>
          {/* </div> */}
          {/* <button className="backToHome" onClick={()=>{history("/")}}>Back</button> */}
          <button class="buttons" aria-label="Edit values for Select Component" onClick={openEditSelect}>Edit</button>
        </div>
      </div>
    </div>
    <SelectMain select={select}/>

    <div className="card-tabs">
      <button
        className={activeTab === 1 ? "active" : ""}
        aria-label="HTML Page of Select Component"
        onClick={() => setActiveTab(1)}
      >
        HTML
      </button>
      <button
        className={activeTab === 0 ? "active" : ""}
        aria-label="CSS Page of Select Component"
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
        <SelectHtml />
      )}
    </div>
    </>
  )
}
export default SelectComponent;