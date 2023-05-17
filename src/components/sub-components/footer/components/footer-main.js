import React from 'react';
import instagramicon from "../../../asset/images/Instagram.png";
import facebookicon from "../../../asset/images/Facebook.png";
import glassdooricon from "../../../asset/images/Glassdoor.png";
import linkedinicon from "../../../asset/images/Linkedin.png";
import twittericon from "../../../asset/images/Twitter.png";
import youtubeicon from "../../../asset/images/YouTube.png";
function Footer(props) {
    const { footerProps }=props;
  return (
    <div className= {`footer-container ${footerProps?.footertheme == "Dark"?"Dark":footerProps?.footertheme == "cg1"?"cg1":footerProps?.footertheme == "cg2"?"Cg2":footerProps?.footertheme == "Normal"?"light-theme":"" }`}>
    <div className="left-footer">
      <p>{footerProps.textValue}</p>
    </div>
    <div className="right-footer">
      <div class="social-nav-wrapper">
        {footerProps.iconsValue == "Yes"?
        <ul class="social-nav">
           {footerProps.multiselectValue && footerProps.multiselectValue.map(element => {
            // console.log(element, "elemnet value");
          
                 if(element==="Tiwtter"){
                  
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
                    // console.log("Insta");
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
                    // console.log("face");
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
                    // console.log("you");
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
                    // console.log("glass");
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
  )
}

export default Footer;