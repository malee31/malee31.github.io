import React, {Suspense} from "react";
import SplashTextLayer from "./SplashTextLayer";
import "./Splash.css";

// const ThreeSplash = React.lazy(() => import("../organisms/ThreeSplash"));

export default function Splash() {
	return (
		<header id="splash" className="columnalign">
			<Suspense fallback={null}>
				{/*<ThreeSplash/>*/}
			</Suspense>
			<SplashTextLayer/>
		</header>
	);
}