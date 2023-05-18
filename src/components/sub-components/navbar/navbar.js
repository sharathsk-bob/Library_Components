import React, { useContext,useState } from 'react';
import { AppContext } from '../app-context';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.scss';

function Navbar(props) {
  const {
    navValues
    }=props;
   
  console.log(navValues);
  return (
    <>
    <div id="mySidenav" class="sidenav">
    <nav class={`navbar navbar-expand-lg navbar-light custom-nav ${navValues?.navtheme == "Dark"?"Dark":navValues?.navtheme == "cg1"?"cg1":navValues?.navtheme == "cg2"?"cg2":navValues?.navtheme == "Normal"?"Normal":"" }`}>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
    {navValues?.menus?.map((menu, index) =>
                menu.type === "dropdown" ? (
                  <li class="nav-item dropdown" key={index}>
                    <a
                      href="#"
                      class="nav-link dropdown-toggle menu-text"
                      id={`navbarDropdown${index}`}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {menu.text}
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby={`navbarDropdown${index}`}
                    >
                      {[...Array(menu.numOptions)].map((_, optionIndex) => (
                        <li class="dropdown-item" key={optionIndex}>
                          <a href="#">{menu.options[optionIndex]}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={index}>
                    <a href="#">{menu.text}</a>
                  </li>
                )
              )}
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
            </div>
            </nav>

</div>
    </>
  )
}

export default Navbar;