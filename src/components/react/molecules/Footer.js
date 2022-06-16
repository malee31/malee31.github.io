import React from "react";
import GitHubIcon from "../../../images/github.svg";
import LinkedInIcon from "../../../images/linkedIn.svg";
import "./Footer.css";

export default function Footer() {
	return (
		<footer className="column-align">
			<h2 id="lower-name">
				Marvin Lee
			</h2>
			<div id="socials" className="row-center">
				<a href="https://github.com/malee31" className="logoLink">
					<img src={GitHubIcon} alt="Github"/>
				</a>
				<a href="https://linkedin.com/in/marvin-lee~" className="logoLink">
					<img src={LinkedInIcon} alt="LinkedIn"/>
				</a>
			</div>
		</footer>
	);
}