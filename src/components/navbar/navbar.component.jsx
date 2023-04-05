import React from 'react'
import {NavigationBarStyle} from "./navbar.styles.jsx";
import {Link, NavLink} from "react-router-dom";

const NavbarComponent = () => {
  return (<NavigationBarStyle>
	<div className="nav-logo"><NavLink to={"/"}>RECEPIE.</NavLink>< /div>
	<div className="nav-links">
	  <NavLink to={"/"}>Categories</NavLink>
	  <NavLink to={"/"}>Ingredients</NavLink>
	  <NavLink to={"/"}>Countries</NavLink>
	</div>
	<div className="nav-cta">
	  <div>get Started</div>
	</div>
  </NavigationBarStyle>)
}
export default NavbarComponent
