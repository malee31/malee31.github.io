import React, { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
	{ label: "Home", href: "#home" },
	{ label: "About Me", href: "#about" },
	{ label: "Featured Projects", href: "#github" }
];

export default function Navbar() {
	const [checked, setChecked] = useState(false);
	const toggleCheck = () => setChecked(!checked);
	const close = () => setChecked(false);

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
				onClick={close}
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
					{
						NAV_LINKS.map(({ label, href }) => (
							<a href={href} onClick={close} key={label}><span>{label}</span></a>
						))
					}
				</div>
			</nav>
		</>
	);
}