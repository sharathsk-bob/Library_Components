import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";
import LoginMain from "./login-main";
import EditLoginModal from "./edit-login";
import LoginHtml from "./login-html";

export const CustomStyleLoader = styled.div`
.login-form{
  border-radius: 4px;
  min-height: 100vh;
  padding: 20px;
  .form-header{
      //  border-bottom: 1px solid black;
      box-shadow: var(--box-shadow);
      // background-color: black;
      // color: white;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      p{
          font-size: 20px;
          margin: 0px;
          padding: 10px 0px 10px 20px;
          font-weight: 700;
      }
  }
  .form-container{
      padding: 20px;
      p{
          margin-bottom: 0px;
          font-weight: 600;
      }
      .form-floating{
          margin-bottom: 10px;
          input{
             min-height:2.8rem;
             height: 2.8rem;
          }
          label{
              font-weight: 500;
          }
          .form-floating-bottom{
              float: right;
              .form-control-char-size{
                  display: flex;
                  align-items: center;
                  font-size: 10px;
                  font-weight: 600;
                  span{
                      margin-left: 4px;
                  }
              }
          }
      }
    
  }
  .login-button{
      .link-button{
          // float: right;
          // padding: 0px 20px;
          text-align: center;
          width: max-content;
          margin: 0px auto 20px;
          .submit-button{
              // background-color: var(--color-capgemini-blue);
              // border-color: var(--color-capgemini-blue);
              // color: var(--color-white);
              border-radius: 6px;
              cursor: pointer;
              padding: 8px 24px;
              font-weight: 600;
              font-size: 16px;
              text-decoration: none;
          }
      }  
  }
}

.form-Normal{
  // background-color: #ececec;
  .form-header{
      background-color: #B7C9E2;
      color: var(--color-black);
  }
  .login-subcontainer{
      background-color: #ececec;
      box-shadow: var(--box-shadow-grey);
      // border: 1px solid black;
      // height: 75vh;
      // width: 70%;
      margin: auto;
      border-radius: 10px;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255,255,255,0.1);
      .submit-button{
          background-color: #B7C9E2 !important;
          color: var(--color-black) !important;
          border: 0.5px var(--color-black) solid;
      }
  
  }
}

.form-Dark{
  color: var(--color-black)!important;
  .form-header{
      background-color: var(--color-black);
      color: var(--color-white)!important;
  }
  .login-subcontainer{
      background-color: #ececec;
      box-shadow: var(--box-shadow-grey);
      // border: 1px solid black;
      // height: 75vh;
      // width: 70%;
      margin: auto;
      border-radius: 10px;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255,255,255,0.1);
      .submit-button{
          background-color: var(--color-black) !important;
          color: var(--color-white) !important;
          border: 0.5px var(--color-black) solid;
      }
  }  
}

.form-Cg1{
  // background-color: #ececec;
  // padding: 20px;
  color: var(--color-black)!important;
  .form-header{
      background-color: var(--color-capgemini-blue);
      color: var(--color-white)!important;
  }
  .login-subcontainer{
      background-color: #ececec;
      // height: 80vh;
      box-shadow: var(--box-shadow-grey);
      // background-color: #ececec;
      // border: 1px solid black;   
      // width: 70%;
      margin: auto;
      border-radius: 10px;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255,255,255,0.1);
      .submit-button{
          background-color: var(--color-capgemini-blue)!important;
          border: var(--color-white) !important;
          color: var(--color-white) !important;
      }
  }
  // .form-container{
  //     color: grey;       
  // }
}

.form-Cg2{
color: black!important;
.form-header{
  background-color: var(--color-purple-wbh);
  color: var(--color-white)!important;
}
.login-subcontainer{
  background-color: #ececec;
  box-shadow: var(--box-shadow-grey);
  // border: 1px solid black;
  // height: 75vh;
  // width: 70%;
  margin: auto;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.1);
  .submit-button{
      background-color: var(--color-purple-wbh) !important;
      color: var(--color-white) !important;
      border: 0.5px var(--color-black) solid;
  }
}
}
.error{
color: red;
font-size: 12px;
}
.width-form{
  width: 75%;
}
.half-form{
  width: 50%;
  @media (max-width: $bp-sm-mobile) {
      width: 100% !important;
  }
}
.one-fourth-form{
  width: 25%;
  @media (max-width: $bp-mobile) {
      width: 100% !important;
  }
}
`;

const LoginComponent = ( ) => {
  const { open: openEditLogin, close: closeEditLogin, ModalWrapper: ModalWrapperEditLogin } = useModal();
    const location = useLocation();
    const props = location.state.loginProps;
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
          <LoginHtml loginVal={props} />
        )}
        </div>
      </>
    );
};
export default LoginComponent;