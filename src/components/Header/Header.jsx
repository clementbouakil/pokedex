import React from "react";
import logo from "./logo.svg";
import "./Header.css";

function Header() {
	return (
		<header className="Header-header">
			<img src={logo} className="Header-logo" alt="logo" />
			<h1>REACT : Pokedex</h1>
		</header>
	);
}

export default Header;
