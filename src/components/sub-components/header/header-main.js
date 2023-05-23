import React from 'react';
import cgLogo from "../../asset/images/cg_logo.svg";
import appIcon from "../../asset/images/wbh-icon.png";
import profileImage from "../../asset/images/profile.png";
import appIconTheme from "../../asset/images/wbh-theme.png";
import cgLogoWhite  from "../../asset/images/capgemini-white.png";

function Header(props) {
  const { headerVal }=props;
  console.log(headerVal, "props value");
  const titleName =  headerVal?.titleValue?.toUpperCase();
  const  profileName =  headerVal?.profileValue?.charAt(0).toUpperCase() + headerVal.profileValue?.slice(1);
  return (
    <div className= {`header-content ${headerVal?.themeValue == "Dark"?"Dark":headerVal?.themeValue == "cg1"?"cg1":headerVal?.themeValue == "cg2"?"Cg2":headerVal?.themeValue == "Normal"?"light-theme":"" }`}>
        <div class="header-left">
        {headerVal?.imageValue =="Yes" ? headerVal?.themeValue == "cg1"?<img  src={appIconTheme} alt="Application logo" class="logo-new" />:<img  src={appIcon} alt="Application logo" class="logo-new" />: ""}
          <p class="heading-text">{titleName}</p>
        </div>
        <div class="header-right">
              <ul>
              <li class="profile">
              
              {headerVal?.profileLogo === "Yes" ?  <img alt="profile logo" src={profileImage} />  :""}
                  <span>{profileName}</span>
              </li>
           
            
              {headerVal?.cgLogoValue ==="Yes" ?  <li>
              {headerVal?.themeValue == "cg1" ? <img  alt="Capgemini logo" className="cg-logo" src={cgLogoWhite} />:
                  <img alt="Capgemini logo"  className="cg-logo" src={cgLogo} />}
              </li> : ""}
              </ul>
            </div>
      </div>
  )
}

export default Header;