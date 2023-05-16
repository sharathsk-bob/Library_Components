import React, { useContext,useState } from 'react';
import { AppContext } from '../app-context';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';
import useModal from '../use-modal/use-modal';
import EditNav from './edit-navbar';
function Navbar() {
  const { numMenus,
    menus,
    hasIcons,
    navtheme,
    setNumMenus,
    setMenus,
    setHasIcons,
    setNavTheme,
    navValues
    }=useContext(AppContext);
    const { open: openEditNavs, close: closeEditNavs, ModalWrapper: ModalWrapperEditNavs } = useModal();
  const history=useNavigate();
  const resetNav = () => {
    setNumMenus(0);
    setMenus([{ type: "basic", text: "" }]);
    setHasIcons();
    setNavTheme("");
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = (index) => {
    setIsDropdownVisible({ ...isDropdownVisible, [index]: !isDropdownVisible[index] });
  };
  console.log(navValues);
  return (
    <>
    <ModalWrapperEditNavs>
    <EditNav close={closeEditNavs} />
  </ModalWrapperEditNavs>
    <div className="card-component">
    <div className="card-left">
    <h1>Navbar</h1><span> Component</span> 
        </div> 
   
      <div>
      <button className="backToHome"  onClick={()=>{history("/");resetNav();}}>Back</button>
      <button className="edit-card" onClick={openEditNavs}>Edit</button>
      </div>
    </div>
    <div id="mySidenav" class="sidenav">
    <nav class={`navbar navbar-expand-sm custom-nav ${navValues?.navtheme == "Dark"?"Dark":navValues?.navtheme == "cg1"?"cg1":navValues?.navtheme == "cg2"?"cg2":navValues?.navtheme == "Normal"?"Normal":"" }`}>
    <ul className="navbar-nav">
      {navValues.menus.map((menu, index) => (
        menu.type === "dropdown" ?<li class="dropdown"  onClick={() => toggleDropdown(index)} key={index}>
          <a href="#">{menu.text}</a>
            <ul class="dropdown-menu" >
              {[...Array(menu.numOptions)].map((_, optionIndex) => (
                isDropdownVisible[index] ?<li class="dropdown-item" key={optionIndex}>
                  <a href="#">{menu.options[optionIndex]}</a>
                </li>:("")
              ))}
            </ul>
        </li>:
        <li key={index}>
        <a href="#">{menu.text}</a></li>
      ))}
    </ul>

        { navValues.hasIcons=="yes" ?  <div class="documents-section">
                <ul class="navbar-nav">
                  
                    <li>
                        <a href="#" class="startTourBtn">
                            <i class="fa fa-question-circle fa-lg" aria-hidden="true"></i>
                            <span class="srt">FAQ</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           
                            <i class="fa fa-file-text fa-lg" aria-hidden="true"></i>
                            <span class="srt">User Manual</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           
                            <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
                            <span class="srt">Logout</span>
                        </a>
                    </li>
                    
                   
                   
                </ul>
            </div>:("")}
    
            </nav>

</div>
    </>
  )
}

export default Navbar;