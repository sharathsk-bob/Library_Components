import React, { useContext } from 'react';
import { AppContext } from '../app-context';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  const {
    setNoOfMenus,
    setEachMenu,
    setNoOfOptions,
    setNavTheme,
    setShowIcons,
    navValues,
  } = useContext(AppContext);
  const history=useNavigate();
  const resetNav = () => {
    setNoOfMenus("");
    setEachMenu([]);
    setNoOfOptions("");
    setNavTheme("");
    setShowIcons("");
  };
  console.log(navValues);
  return (
    <>
    <div className="card-component">
    <div className="card-left">
    <h1>Navbar</h1><span> Component</span> 
        </div> 
   
      <div>
      <button className="backToHome"  onClick={()=>{history("/");resetNav();}}>Back</button>
      <button className="edit-card">Edit</button>
      </div>
    </div>

    <nav class={`navbar ${navValues?.navtheme == "Dark"?"Dark":navValues?.navtheme == "cg1"?"cg1":navValues?.navtheme == "cg2"?"cg2":navValues?.navtheme== "Normal"?"Normal":"" }`}>
  <div class="navbar-container">
    {/* <a href="#" class="logo">Logo</a> */}
    <ul class="navbar-links">
      <li><a href="#">{navValues.eachMenu[0].menuText}</a></li>
      {/* <li><a href="#">{navValues.eachMenu[1].menuText}</a></li> */}
      {/* <li class="dropdown">
        <a href="#">Dropdown</a>
        <ul class="dropdown-menu">
          <li><a href="#">Dropdown Link 1</a></li>
          <li><a href="#">Dropdown Link 2</a></li>
          <li><a href="#">Dropdown Link 3</a></li>
        </ul>
      </li> */}
    </ul>
   {navValues.showIcons? <div class="navbar-icons">
      <a href="#" class="icon"><i class="fa fa-search"></i></a>
      <a href="#" class="icon"><i class="fa fa-user"></i></a>
      <a href="#" class="icon"><i class="fa fa-shopping-cart"></i></a>
    </div>:("")}
  </div>
</nav>
    </>
  )
}

export default Navbar;