import React from "react";
import ScreenSection from "../atoms/FullScreenSection";
import SplashTextLayer from "./SplashTextLayer";
import loadable from "@loadable/component";
import "./Splash.css";

const ThreeSplash = loadable(() => import("../organisms/ThreeSplash"));

export default function Splash() {
	return (
		<ScreenSection id="home" className="column-center column-align">
			<ThreeSplash fallback={null}/>
			<SplashTextLayer/>
		</ScreenSection>
	);
}