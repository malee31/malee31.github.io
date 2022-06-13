import React from "react";
import "./SplashTextLayer.css"

export default function SplashTextLayer({ centered }) {
	return (
		<header className="column-align splash-text-layer">
			<div className={`column-align splash-text-layer-content ${!centered ? "splash-text-layer-content-top" : ""}`}>
				<h2>Marvin Lee</h2>
				<h4>Full Stack Developer</h4>
			</div>
		</header>
	);
}