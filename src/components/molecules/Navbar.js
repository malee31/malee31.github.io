import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
	const [checked, setChecked] = useState(false);
	const toggleCheck = () => setChecked(!checked);

	return (
		<>
			<input
				id="menu-toggle"
				className="hidden"
				aria-hidden="true"
				type="checkbox"
				checked={checked}
				onChange={toggleCheck}
			/>
			<div
				id="nav-underlay"
				aria-hidden="true"
				onClick={() => setChecked(false)}
			/>
			<label id="menu-icon" htmlFor="menu-toggle">
				<div id="menu-icon-container">
					<div className="menu-icon-div"/>
					<div className="menu-icon-div"/>
					<div className="menu-icon-div"/>
				</div>
			</label>
			<nav>
				<div id="nav-padding">
					<a href="#home"><span>Home</span></a>
					<a href="#about"><span>About Me</span></a>
					<a href="#github"><span>Github</span></a>
				</div>
			</nav>
		</>
	);
}