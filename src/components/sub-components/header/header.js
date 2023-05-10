import "../header/header.scss";
import cgLogo from "../../asset/images/cg_logo.svg";
import appIcon from "../../asset/images/wbh-icon.png";
import profileImage from "../../asset/images/profile.png";
import appIconTheme from "../../asset/images/wbh-theme.png";
import cgLogoWhite  from "../../asset/images/capgemini-white.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import EditHeaderModal from "../header/components/header-modal/edit-header";
import useModal from "../../sub-components/use-modal/use-modal";
const HeaderComponent = ( ) => {
  const location = useLocation();
  const { open: openEditHeader, close: closeEditHeader, ModalWrapper: ModalWrapperEditHeader } = useModal();
  const props = location.state.headerProps;
  console.log(location.state.headerProps, "props in header");
  const titleName = props?.titleValue?.toUpperCase();
  const  profileName = props?.profileValue?.charAt(0).toUpperCase() + props.profileValue?.slice(1);;
  // const themeClass = {props.themeValue?}
  return (
    <>
    <ModalWrapperEditHeader>
    <EditHeaderModal close={closeEditHeader} data={props} />
			</ModalWrapperEditHeader>
    <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
      <div className="component-header">
        <div className="header-left">
         <h1>Header</h1><span> Component</span> 
        </div>
        <div className="header-right"> 
        <div className="button-section">
        <Link
              to="/"
            
              className="btn btn-primary btn-lg"
             
            >
                <button class="buttons" >
                  Back
                </button>
                </Link>
                <button class="buttons" onClick={openEditHeader} >
                  Edit
                </button>
              </div>
        </div>
      </div>
    <div className= {`header-content ${props?.themeValue == "Dark"?"Dark":props?.themeValue == "cg1"?"cg1":props?.themeValue == "cg2"?"Cg2":props?.themeValue == "Normal"?"light-theme":"" }`}>
        <div class="header-left">
        {props.imageValue ==="Yes" ? props?.themeValue == "cg1"?<img  src={appIconTheme} alt="Application logo" class="logo-new" />:<img  src={appIcon} alt="Application logo" class="logo-new" />: ""}
          <p class="heading-text">{titleName}</p>
        </div>
        <div class="header-right">
              <ul>
              <li class="profile">
              
              {props.profileLogo === "Yes" ?  <img alt="profile logo" src={profileImage} />  :""}
                  <span>{profileName}</span>
              </li>
           
            
              {props.cgLogoValue ==="Yes" ?  <li>
              {props.themeValue == "cg1" ? <img  alt="Capgemini logo" className="cg-logo" src={cgLogoWhite} />:
                  <img alt="Capgemini logo"  className="cg-logo" src={cgLogo} />}
              </li> : ""}
              </ul>
            </div>
      </div>
    </div>
      
    </>
  );
};
export default HeaderComponent;
