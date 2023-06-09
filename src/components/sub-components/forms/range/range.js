import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import RangeMain from './range-main';
import { Link } from 'react-router-dom';
import useModal from '../../use-modal/use-modal';
import RangeHtml from './range-html';
import EditRangeForm from './edit-range';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";
import './range.scss';

export const CustomStyleRange = styled.div`
.range-fullwidth{
  width: 100% !important;
}
.range-threefourthwidth{
  width:75% !important;
}
.range-halfwidth{
  width:50% !important;
}
.range-quaterwidth{
  width:25% !important;
}
.wrapper-range{
  height: 80px;
  width: 380px;
  margin: 150px auto;
  background: #fff;
  border-radius: 10px;
  padding: 0 65px 0 45px;
  box-shadow: 2px 4px 8px rgba(0,0,0,0.1);
}

.field{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}
.field .value{
  position: absolute;
  font-size: 18px;
  color: #045fa4;
  font-weight: 600;
}
.field .value.left{
  left: -22px;
}
.field .value.right{
  right: -43px;
}
.field input {
  flex: 1 1 auto;
}

.sliderValue{
  position: relative;
  width: 100%;
}
.sliderValue span{
  position: absolute;
  height: 45px;
  width: 45px;
  text-align: center;
  transform: translateX(-70%) scale(0);
  font-weight: 500;
  top: -40px;
  line-height: 55px;
  z-index: 2;
  color: #fff;
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
}

.sliderValue span.show{
  transform: translateX(-70%) scale(1);
}

.sliderValue span:after{
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
  background: #045fa4;
  border: 3px solid #fff;
  z-index: -1;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-bottom-left-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.1);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

.range input::-webkit-slider-thumb{

  -webkit-appearance: none;

  width: 20px;

  height: 20px;

  background: red;

  border-radius: 50%;

  background: #045fa4;

  border: 1px solid #045fa4;

  cursor: pointer;

}
.input-label{
  position: absolute;
  color: black;
}
.dark{
input[type="range"] {
  height: 4px;
  border-radius: 5px; 
  appearance: none;
  width: 8px; 
  height: 8px; 
  background-color: black; 
 
}
.sliderValue span:after{
  background: black !important;
}
.field .value{
  color:black !important;
}
}
.input-label-value{
  color: black;
  text-align: center;
  margin-top: 10px;
}
.light{
  input[type="range"] {
    height: 4px;
    border-radius: 5px; 
    appearance: none;
    width: 8px; 
    height: 8px; 
    background-color: #e9ecef !important; 
   
  }
  .sliderValue span{
    color:black !important;
  }
  .sliderValue span:after{
    background: #e9ecef !important;
  }
  .field .value{
    color:black !important;
  }
  }
  .purple{
    input[type="range"] {
      height: 4px;
      border-radius: 5px; 
      appearance: none;
      width: 8px; 
      height: 8px; 
      background-color: #2b0a3d !important; 
     
    }
    .field .value{
      color:#2b0a3d !important;
    }
    .sliderValue span:after{
      background: #2b0a3d !important; 
    }
    }
    .blue{
      input[type="range"] {
        height: 4px;
        border-radius: 5px; 
        appearance: none;
        width: 8px; 
        height: 8px; 
        background-color:  var(--color-capgemini-blue); 
       
      }
      .field .value{
        color:var(--color-capgemini-blue) !important;
      }
      .sliderValue span:after{
        background:  var(--color-capgemini-blue) !important;
      }
      }
   
.range input::-moz-range-progress{

  background: #664AFF;

}
`;
const RangeComponent = () => {
  const location = useLocation();
  const myrange = location.state.rangeProps;
  const [activeTab, setActiveTab] = useState(1);
  const { open: openEditRange, close: closeEditRange, ModalWrapper: ModalWrapperEditRange } = useModal();
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

  const formattedCSS = CustomStyleRange.componentStyle.rules[0];
  return (
    <>
    <ModalWrapperEditRange>
      <EditRangeForm close={closeEditRange} data={myrange}/>
    </ModalWrapperEditRange>
    <div className="component-toaster">
            <div className="toaster-left">
              <h1>Range</h1>
              <span> Component</span>
            </div>
            <div className="toaster-right">
              <div className="button-section">
                {/* <div  className="buttons"> */}
                <Link
                  to="/formcomponents"
                  // state={headerData}
                  className="link-button"
                >
                  Back
                </Link>
                {/* </div> */}

                {/* <button className="backToHome" onClick={()=>{history("/")}}>Back</button> */}
                <button class="buttons" onClick={openEditRange}>Edit</button>
              </div>
            </div>
          </div>
    <RangeMain myrange={myrange}/>
    <div className="card-tabs">
  <button
    className={activeTab === 1 ? "active" : ""}
    aria-label="HTML Page of Range Component"
    onClick={() => setActiveTab(1)}
  >
    HTML
  </button>
  <button
    className={activeTab === 0 ? "active" : ""}
    aria-label="CSS Page of Range Component"
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
    <RangeHtml myrange={myrange} />
  )}
</div>
    </>
    
  );

};

export default RangeComponent;
