import "../header/header.scss";
import cgLogo from "../../asset/images/cg_logo.svg";
import appIcon from "../../asset/images/wbh-icon.png";
import profileImage from "../../asset/images/profile.png"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import EditHeaderModal from "./components/edit-header";
import useModal from "../../sub-components/use-modal/use-modal";
const HeaderComponent = ( ) => {
  const location = useLocation();
  const { open: openEditHeader, close: closeEditHeader, ModalWrapper: ModalWrapperEditHeader } = useModal();
  const props = location.state;
  const titleName = props.titleValue.toUpperCase();
  const  profileName = props.profileValue.charAt(0).toUpperCase() + props.profileValue.slice(1);;
  return (
    <>
    <ModalWrapperEditHeader>
    <EditHeaderModal close={closeEditHeader} data={props} />
			</ModalWrapperEditHeader>
    <div className="header-output">
      <div className="component-header">
        <div className="header-left">
         <h1>Header Component</h1>
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
    <div className="header-content">
        <div class="header-left">
          <img src={appIcon} alt="logo" class="logo-new" />
          <p class="heading-text">{titleName}</p>
        </div>
        <div class="header-right">
              <ul>
             {props.profileValue ? <li class="profile">
              
                  <img src={profileImage} />
                  <span>{profileName}</span>
              </li>
             :""}
            
            {props.cgLogoValue ==="Yes" ?  <li>
                  <img src={cgLogo} />
              </li> : ""}
              </ul>
            </div>
      </div>
    </div>
      
    </>
  );
};
export default HeaderComponent;
