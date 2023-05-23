import "../footer/footer.scss";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import EditFooterModal from "./edit-footer";
import FooterHtml from "./footer-html";
import Footer from "./footer-main";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";

export const CustomStyleFooter = styled.div`
.footer-section{
  background-color: var(--color-white);
  .component-header{
      display: flex;
      
  justify-content: space-between;
  box-shadow: 4px -2px 9px var(--color-grey-light);
  align-items: center;
  padding: 15px;
  .header-left{
      display: flex;
      align-items: center;
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
  .footer-container{
      display: flex;
      justify-content:space-between;
      padding:12px 32px;
  align-items: center;
  margin-top: 2px;
  .left-footer{
      p{
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 0px;
      }
  }
      .right-footer{
          .social-nav-wrapper{
.social-nav{
  display: flex;
  list-style: none;
  margin-bottom: 0px;
  li{
padding-left: 10px;
      a{
  overflow: hidden;
  position: relative;
  border: 1px solid var(--color-purple-wbh);
  background-color: var(--color-white);
  border-radius: 50%;
  color: var(--color-purple-wbh);
  background: 0 0;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-image: linear-gradient(to left,
  transparent,
  transparent 50%,
  var(--color-turquoise-blue) 50%,
  var(--color-turquoise-blue));
background-position: 100% 0;
background-size: 200% 100%;
transition: all .2s ease-out;

          img{
              width: 1.5rem;
  height: 1.5rem;
          }
      }
      a:focus-within{
          color: var(--color-purple-wbh);
  border-color: var(--color-turquoise-blue);
  background-color:  var(--color-turquoise-blue);
  box-shadow: 0 6px 30px 0 rgba(0,0,0,.2);
  transform: scale(1.2);
  z-index: 1;
      }
      a:hover{
          color: var(--color-purple-wbh);
  border-color: var(--color-turquoise-blue);
  box-shadow: 0 6px 30px 0 rgba(0,0,0,.2);
  z-index: 1;
  background-position: 0 0;
      }
  }
}
          }
      }
  }
  .Dark{
      .right-footer{
          .social-nav-wrapper{
              .social-nav{
                  li{
                      a{
                          background-color: var(--color-white);
                      }
                  }
              }
          }
      }
  }
  .Cg2{
      .right-footer{
          .social-nav-wrapper{
              .social-nav{
                  li{
                      a{
                          background-color: var(--color-white);
                      }
                  }
              }
          }
      }
  }
  .cg1{
      .right-footer{
          .social-nav-wrapper{
              .social-nav{
                  li{
                      a{
                          background-color: var(--color-white);
                      }
                  }
              }
          }
      } 
  }
}
`;



const FooterComponent =()=>{

    const location = useLocation();
    const { open: openEditFooter, close: closeEditFooter, ModalWrapper: ModalWrapperEditFooter } = useModal();
    const [activeTab, setActiveTab] = useState(0);
    const props = location.state.footerProps;

    const formattedCSS = CustomStyleFooter.componentStyle.rules[0];

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
       <ModalWrapperEditFooter>
    <EditFooterModal close={closeEditFooter} data={props} />
			</ModalWrapperEditFooter>
      <div className="footer-output">
        <div className="footer-section">
          <div className="component-header">
            <div className="header-left">
              <h1>Footer</h1>
              <span> Component</span>
            </div>
            <div className="header-right">
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
                <button class="buttons" onClick={openEditFooter}>Edit</button>
              </div>
            </div>
          </div>
         <Footer footerProps={props}/>
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
        <FooterHtml footerProps={props} />
    )}
    </div>
    </div>
      </>
    );  
};
export default FooterComponent;