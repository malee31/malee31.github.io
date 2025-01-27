import React from "react";
import { Canvas } from "@react-three/fiber";
import ThreeContent from "./ThreeContent";

export default function ThreeSplash({ onLoad }) {
	return (
		<div style={{ position: "absolute", width: "100%", height: "100%" }}>
			<Canvas className="fade">
				<ThreeContent onLoad={onLoad}/>
			</Canvas>
		</div>
	);
}