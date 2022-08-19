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
				<h2>Marvin Lee</h2>
				<h4>Full Stack Developer</h4>
			</div>
		</header>
	);
};