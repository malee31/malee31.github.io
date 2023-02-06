import React, { Suspense, useState } from "react";
import ScreenSection from "../atoms/FullScreenSection";
import ScrollBanner from "../atoms/ScrollBanner";
import CubeTrace from "../../../images/cube-trace.svg";
import "./Splash.css";

const ThreeSplash = React.lazy(() => import("../../three/organisms/ThreeSplash"));

// Hard-coded inline positioning for the first frame of the splash (traced)
function SubstituteSplash() {
	return (
		<div style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}>
			<img
				className="splash-overlay-substitute"
				src={CubeTrace}
				alt="Cube"
				role="presentation"
			/>
		</div>
	);
}

export default function SplashV2() {
	const [hideSubstitute, setHideSubstitute] = useState(false);

	return (
		<ScreenSection id="home" natural={true} className="column-center column-align">
			<SplashOverlay>
				{!hideSubstitute && <SubstituteSplash/>}
				<Suspense fallback={null}>
					<ThreeSplash
						fallback={null}
						hideSubstitute={() => {
							if(!hideSubstitute) setHideSubstitute(true)
						}}
					/>
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
				<p className="splash-mini-subtitle">
					A Full Stack Developer who enjoys building high-quality products and intuitive user experiences
				</p>
				<a
					href="#featured-projects"
					className="splash-cta-button"
				>
					<span className="splash-cta-text">
						<span className="splash-cta-text-words">See my projects</span>
						<span className="splash-cta-text-arrow"> &#x21B4;</span>
					</span>
				</a>
			</div>
			<div className="splash-overlay-visual">
				{children}
			</div>
		</div>
	);
}