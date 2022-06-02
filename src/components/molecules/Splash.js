import React, { Suspense } from "react";
import ScreenSection from "../atoms/FullScreenSection";
import SplashTextLayer from "./SplashTextLayer";
import "./Splash.css";

// const ThreeSplash = React.lazy(() => import("../organisms/ThreeSplash"));

export default function Splash() {
	return (
		<ScreenSection id="splash" className="columncenter columnalign">
			<Suspense fallback={null}>
				{/*<ThreeSplash/>*/}
			</Suspense>
			<SplashTextLayer/>
		</ScreenSection>
	);
}