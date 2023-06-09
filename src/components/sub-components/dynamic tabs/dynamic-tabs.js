import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../use-modal/use-modal";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";
import './dynamic-tabs.scss';
import EditDynamicTabs from "./edit-dynamic";
import DynamicMain from "./dynamic-tabsmain";
import DynamicHtml from "./dynamic-html";
export const CustomStyleDynamic = styled.div`
.light{
  background: #f1f4f8 !important;
  color: black !important;
  .react-tabs__tab--selected {
    background: #a2d2ff;
  }
  .react-tabs__tab:hover {
    background: #a2d2ff;
  }
}
.dark{
  background: black !important;

  .react-tabs__tab--selected {
    background: white;
    color: black !important ;
  }
  
  .react-tabs__tab:hover {
    background: white;
  }
}
.cg1-blue{
  background:var(--color-capgemini-blue) !important;
  .react-tabs__tab--selected {
    background: #4f95d6;
  }
  .react-tabs__tab:hover {
    background: #4f95d6;
  }
}
.cg2-purple{
  background: #2b0a3d !important;
}
/* Tab Container */
.Tabs {
  width: 80%;
  height: auto;
  min-height: 400px;
  background: #7286d3;
  margin: 3.5rem auto 1.5rem;
  padding: 2rem 1rem;
  color: #e8f0f2;
  border-radius: 1rem;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.168627451);
}

.react-tabs {
  -webkit-tap-highlight-color: transparent;
}

.react-tabs__tab-list {
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0px;
}

.react-tabs__tab {
  width: 50%;
  padding: 1rem;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.7s;
  border:1px solid #8ea7e9; 
  margin :5px;
  border-radius: 10px;
}

.react-tabs__tab--selected {
  background: #8ea7e9;
}

.react-tabs__tab--disabled {
  color: GrayText;
  cursor: default;
}

.react-tabs__tab:hover {
  background: #a2d2ff;
}
.react-tabs__tab-panel {
  display: none;
}

.react-tabs__tab-panel--selected {
  display: block;
  font-size: 1.25rem;
}
`;
function DynamicTabs() {
    const location = useLocation();
  const props = location.state?.tabsProps;
  const [activeTab, setActiveTab] = useState(1);
    const {
        open: openEditTabs,
        close: closeEditTabs,
        ModalWrapper: ModalWrapperEditTabs,
      } = useModal();
      console.log(props?.tabData);
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
  const formattedCSS = CustomStyleDynamic.componentStyle.rules[0];
  return (
    <>
     <ModalWrapperEditTabs>
      <EditDynamicTabs close={closeEditTabs} data={props}/>
    </ModalWrapperEditTabs>
      <div className="component-toaster">
        <div className="toaster-left">
          <h1>Tab / Panel</h1>
          <span> Component</span>
        </div>
        <div className="toaster-right">
          <div className="button-section">
            {/* <div  className="buttons"> */}
            <Link
              to="/"
              aria-label="back to various component homepage"
              // state={headerData}
              className="link-button"
            >
              Back
            </Link>
            {/* </div> */}

            {/* <button className="backToHome" onClick={()=>{history("/")}}>Back</button> */}
            <button class="buttons" aria-label="Edit values for Tab or Panel Component" onClick={openEditTabs}>
              Edit
            </button>
          </div>
        </div>
      </div>
      <DynamicMain props={props}/>
      <div className="card-tabs">
  <button
    className={activeTab === 1 ? "active" : ""}
    aria-label="HTML Page of Tab or Panel Component"
    onClick={() => setActiveTab(1)}
  >
    HTML
  </button>
  <button
    className={activeTab === 0 ? "active" : ""}
    aria-label="CSS Page of Tab or Panel Component"
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
    <DynamicHtml props={props} />
  )}
</div>
    </>
  )
}

export default DynamicTabs;