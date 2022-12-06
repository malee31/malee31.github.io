import React, { useEffect } from "react";
import ScreenSection from "../atoms/FullScreenSection";
import ScrollBanner from "../atoms/ScrollBanner";
import loadable from "@loadable/component";
import "./Splash_v2.css";

const ThreeSplash = loadable(() => import("../../three/organisms/ThreeSplash"));

export default function SplashV2() {
	useEffect(() => {
		ThreeSplash.load();
	}, []);

	return (
		<ScreenSection id="splash_v2" className="column-center column-align">
			<SplashOverlay>
				<ThreeSplash fallback={null}/>
			</SplashOverlay>
			<ScrollBanner to="#about">
				▼
			</ScrollBanner>
		</ScreenSection>
	);
}

function SplashOverlay({children}) {
	return (
		<div className="splash-overlay">
			<div className="splash-overlay-content">
				<p className="splash-mini-intro">Developed and </p>
				<h1 className="splash-mini-title">Designed by Marvin</h1>
				<p className="splash-mini-subtitle">A Full Stack Developer (with some UI/UX knowledge)</p>
				<p className="splash-mini-text">

				</p>
			</div>
			<div className="splash-overlay-visual">
				{children}
			</div>
		</div>
	);
}