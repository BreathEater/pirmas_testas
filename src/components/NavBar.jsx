import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
  } from './NavbarElements.js';
  



function NavBar(){
    return (
        <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='../pages/Home.jsx'>
            Home
          </NavLink>
          <NavLink to='../pages/List.jsx'>
            List
          </NavLink>
        </NavMenu>
        </Nav>
        );
    
};
export default NavBar