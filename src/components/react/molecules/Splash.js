import React, { useEffect, useState } from "react";
import ScreenSection from "../atoms/FullScreenSection";
import SplashTextLayer from "./SplashTextLayer";
import loadable from "@loadable/component";
import "./Splash.css";

const ThreeSplash = loadable(() => import("../../three/organisms/ThreeSplash"));

export default function Splash() {
	const [splashTextCentered, setSplashTextCentered] = useState(true);

	useEffect(() => {
		ThreeSplash.load().then(() => setSplashTextCentered(false));
	}, []);

	return (
		<ScreenSection id="home" className="column-center column-align">
			<ThreeSplash fallback={null}/>
			<SplashTextLayer centered={splashTextCentered}/>
		</ScreenSection>
	);
}