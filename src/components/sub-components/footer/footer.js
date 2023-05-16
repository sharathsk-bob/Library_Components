import "../footer/footer.scss";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import instagramicon from "../../asset/images/Instagram.png";
import facebookicon from "../../asset/images/Facebook.png";
import glassdooricon from "../../asset/images/Glassdoor.png";
import linkedinicon from "../../asset/images/Linkedin.png";
import twittericon from "../../asset/images/Twitter.png";
import youtubeicon from "../../asset/images/YouTube.png";
import useModal from "../../sub-components/use-modal/use-modal";
import EditFooterModal from "../footer/components/footer-modal/edit-footer";


const FooterComponent =()=>{

    const location = useLocation();
    const { open: openEditFooter, close: closeEditFooter, ModalWrapper: ModalWrapperEditFooter } = useModal();
    const props = location.state.footerProps;
   console.log(props, "value");

  
    return (
      <>
       <ModalWrapperEditFooter>
    <EditFooterModal close={closeEditFooter} data={props} />
			</ModalWrapperEditFooter>
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
          <div className= {`footer-container ${props?.footertheme == "Dark"?"Dark":props?.footertheme == "cg1"?"cg1":props?.footertheme == "cg2"?"Cg2":props?.footertheme == "Normal"?"light-theme":"" }`}>
            <div className="left-footer">
              <p>{props.textValue}</p>
            </div>
            <div className="right-footer">
              <div class="social-nav-wrapper">
                {props.iconsValue == "Yes"?
                <ul class="social-nav">
                   {props.multiselectValue && props.multiselectValue.map(element => {
                    // console.log(element, "elemnet value");
                  
                         if(element==="Tiwtter"){
                            console.log("twit");
                            return(<li>
                                
                                <a
                                  href="https://twitter.com/Capgemini"
                                  target="_blank"
                                  class="footer-class"
                                  rel="noopener noreferrer"
                                >
                                  <img src={twittericon} class="social-icon-footer" />
                                  {/* <span class="sr-only">Twitter</span> */}
                                </a>
                                {/* <span aria-hidden="true" class="tooltip">Twitter</span> */}
                              </li>);
                            
                        } 
                      if(element==="LinkedIn"){
                        console.log("link");
                        return(
                            <li>
                        <a
                          href="https://www.linkedin.com/company/capgemini"
                          target="_blank"
                          class="footer-class"
                          title="Opens in a new window"
                          rel="noopener noreferrer"
                        >
                          <img src={linkedinicon} class="social-icon-footer" />
                        </a>
                      </li>
                        );
                        
                        }
                        if(element==="Instagram"){
                            console.log("Insta");
                            return(   <li>
                                <a
                                  href="https://www.instagram.com/capgemini/"
                                  target="_blank"
                                  class="footer-class"
                                  rel="noopener noreferrer"
                                >
                                  <img src={instagramicon} class="social-icon-footer" />
                                  
                                </a>
                              
                              </li>);
                         
                        }
                        if(element === "Facebook"){
                            console.log("face");
                            return(
                                <li>
                            <a
                              href="https://www.facebook.com/Capgemini/"
                              target="_blank"
                              class="footer-class"
                              title="Opens in a new window"
                              rel="noopener noreferrer"
                            >
                              <img src={facebookicon} class="social-icon-footer" />
                             
                            </a>
                           
                          </li>
                            );
                            
        
                        }
                        if(element === "You Tube"){
                            console.log("you");
                            return(
                                <li>
                                <a
                                  href="https://www.youtube.com/user/capgeminimedia"
                                  target="_blank"
                                  class="footer-class"
                                  title="Opens in a new window"
                                  rel="noopener noreferrer"
                                >
                                  <img src={youtubeicon} class="social-icon-footer" />
                                  
                                </a>
                                
                              </li>
                            );
                          
                        }
                        if(element === "Glass door"){
                            console.log("glass");
                            return(<li>
                                <a
                                  href="https://www.glassdoor.com/Overview/Working-at-Capgemini-EI_IE3803.11,20.htm"
                                  target="_blank"
                                  class="footer-class"
                                  title="Opens in a new window"
                                  rel="noopener noreferrer"
                                >
                                  <img src={glassdooricon} class="social-icon-footer" />
                                </a>
                              </li>);
                            
                        }
                
                   
                    })}
                

                

                  

                
                 

                 
                </ul>
                :""}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default FooterComponent;