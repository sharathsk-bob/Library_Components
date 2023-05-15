import React from 'react';
import './navbar.scss';

function Navbar() {
  return (
    <>
    <div className="card-component">
    <div className="card-left">
    <h1>Navbar</h1><span> Component</span> 
        </div> 
   
      <div>
      <button className="backToHome" >Back</button>
      <button className="edit-card">Edit</button>
      </div>
    </div>

    <nav class="navbar">
  <div class="navbar-container">
    {/* <a href="#" class="logo">Logo</a> */}
    <ul class="navbar-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li class="dropdown">
        <a href="#">Dropdown</a>
        <ul class="dropdown-menu">
          <li><a href="#">Dropdown Link 1</a></li>
          <li><a href="#">Dropdown Link 2</a></li>
          <li><a href="#">Dropdown Link 3</a></li>
        </ul>
      </li>
    </ul>
    <div class="navbar-icons">
      <a href="#" class="icon"><i class="fa fa-search"></i></a>
      <a href="#" class="icon"><i class="fa fa-user"></i></a>
      <a href="#" class="icon"><i class="fa fa-shopping-cart"></i></a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;