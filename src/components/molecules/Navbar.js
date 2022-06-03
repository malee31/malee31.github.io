import React from "react";
import "./Navbar.css";

export default function Navbar() {
	return (
		<>
			<input id="menutoggle" className="hidden" type="checkbox"/>
			<label id="menuicon" htmlFor="menutoggle">
				<div id="menuiconcontainer">
					<div className="menuicondiv"/>
					<div className="menuicondiv"/>
					<div className="menuicondiv"/>
				</div>
			</label>
			<nav>
				<div id="navpadding">
					<a href="#home"><span>Home</span></a>
					<a href="#about"><span>About Me</span></a>
					<a href="#github"><span>Github</span></a>
				</div>
			</nav>
		</>
	);
}