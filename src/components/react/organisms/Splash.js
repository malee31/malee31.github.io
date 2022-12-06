import React, { Suspense, useEffect, useState } from "react";
import ScreenSection from "../atoms/FullScreenSection";
import SplashTextLayer from "../molecules/SplashTextLayer";
import ScrollBanner from "../atoms/ScrollBanner";
import "./Splash.css";

const ThreeSplash = React.lazy(() => import("../../three/organisms/ThreeSplash"));

// To detect when Suspense finishes loading
function OnLoad({ action, dispose }) {
	useEffect(() => {
		// console.log("OnLoad fired!");
		if(typeof action === "function") action();
		return () => {
			// console.log("OnLoad Disposed");
			if(typeof dispose === "function") dispose();
		}
	}, [action, dispose]);

	return null;
}

export default function Splash() {
	const [splashTextCentered, setSplashTextCentered] = useState(true);

	return (
		<ScreenSection id="home" className="column-center column-align">
			<Suspense fallback={<OnLoad dispose={() => setSplashTextCentered(false)}/>}>
				<ThreeSplash fallback={null}/>
			</Suspense>
			<SplashTextLayer centered={splashTextCentered}/>
			<ScrollBanner to="#about">
				▼
			</ScrollBanner>
		</ScreenSection>
	);
}