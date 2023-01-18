import React, { Suspense } from "react";
import ScreenSection from "../atoms/FullScreenSection";
import ScrollBanner from "../atoms/ScrollBanner";
import CubeTrace from "../../../images/cube-trace.svg";
import "./Splash.css";

const ThreeSplash = React.lazy(() => import("../../three/organisms/ThreeSplash"));

// Hard-coded inline positioning for the first frame of the splash (traced)
function SubstituteSplash() {
	return (
		<div style={{ position: "absolute", width: "100%", height: "100%" }}>
			<img
				style={{ position: "relative", left: "-6px", width: "316px", height: "100%" }}
				src={CubeTrace}
				alt="Cube"
				role="presentation"
			/>
		</div>
	);
}

export default function SplashV2() {
	return (
		<ScreenSection id="home" natural={true} className="column-center column-align">
			<SplashOverlay>
				<Suspense fallback={<SubstituteSplash/>}>
					<ThreeSplash fallback={null}/>
				</Suspense>
			</SplashOverlay>
			<ScrollBanner to="#about">
				▼
			</ScrollBanner>
		</ScreenSection>
	);
}

function SplashOverlay({ children }) {
	return (
		<div className="splash-overlay">
			<div className="splash-overlay-content">
				<p className="splash-mini-intro">Developed and </p>
				<h1 className="splash-mini-title">Designed by Marvin</h1>
				<p className="splash-mini-subtitle">A Full Stack Developer with some UI/UX knowledge</p>
				<p className="splash-mini-text">

				</p>
			</div>
			<div className="splash-overlay-visual">
				{children}
			</div>
		</div>
	);
}