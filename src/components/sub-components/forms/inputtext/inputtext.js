import InputMains from "./input-main";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const InputComponent = ( ) => {
    const location = useLocation();
    // const { open: openEditHeader, close: closeEditHeader, ModalWrapper: ModalWrapperEditHeader } = useModal();
    const props = location.state.headerProps;
   
    
    return (
      <>
      {/* <ModalWrapperEditHeader>
      <EditHeaderModal close={closeEditHeader} data={props} />
              </ModalWrapperEditHeader> */}
      <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
        <div className="component-header">
          <div className="header-left">
           <h1>Input Text</h1><span> Component</span> 
          </div>
          <div className="header-right"> 
          <div className="button-section">
         
          <Link
                to="/"     
                className="link-button"     
              >
                Back
              </Link>
                  <button class="buttons"  >
                    Edit
                  </button>
                </div>
          </div>
        </div>
      <InputMains headerVal={props}/>
      </div>
      {/* <div className="card-tabs">
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
      </div> */}
      </>
    );
  };
  export default InputComponent;