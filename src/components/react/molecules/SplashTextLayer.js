import React from "react";
import "./SplashTextLayer.css"

export default function SplashTextLayer(props) {
	const {
		centered,
		className = "",
		...extraProps
	} = props;

	return (
		<header className={`column-align splash-text-layer ${className}`} {...extraProps}>
			<div className={`column-align splash-text-layer-content ${!centered ? "splash-text-layer-content-top" : ""}`}>
				<h1 className="splash-title">Marvin Lee</h1>
				<h2 className="splash-subtitle">Full Stack Developer</h2>
			</div>
		</header>
	);
};