import React, { useContext,useState } from 'react';
import { AppContext } from '../app-context';
// import 'font-awesome/css/font-awesome.min.css';
import './navbar.scss';

function Navbar(props) {
  const {
    navValues
    }=props;
   
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = (index) => {
    setIsDropdownVisible({ ...isDropdownVisible, [index]: !isDropdownVisible[index] });
  };
  console.log(navValues);
  return (
    <>
    <div id="mySidenav" class="sidenav">
    <nav class={`navbar navbar-expand-sm custom-nav ${navValues?.navtheme == "Dark"?"Dark":navValues?.navtheme == "cg1"?"cg1":navValues?.navtheme == "cg2"?"cg2":navValues?.navtheme == "Normal"?"Normal":"" }`}>
    {/* <div className="navbar-toggler" onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
            <span className={`navbar-toggler-icon ${isDropdownVisible ? 'open' : ''}`}></span>
    </div> */}
    <ul className="navbar-nav">
      {navValues?.menus?.map((menu, index) => (
        menu.type === "dropdown" ?<li class="dropdown"  onClick={() => toggleDropdown(index)} key={index}>
          <a href="#" className='menu-text'>{menu.text}</a>
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

        { navValues?.hasIcons=="yes" ?  <div class="documents-section">
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