import React from "react";
import "./Footer.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
	return (
		<footer className="column-align">
			<h2 id="lower-name">
				Marvin Lee
			</h2>
			<div id="socials" className="row-center">
				<a href="https://github.com/malee31" className="logoLink">
					<StaticImage src="../../../images/github.svg" alt="Github"/>
				</a>
				<a href="https://linkedin.com/in/marvin-lee~" className="logoLink">
					<StaticImage src="../../../images/linkedIn.svg" alt="LinkedIn"/>
				</a>
			</div>
		</footer>
	);
}