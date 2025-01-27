import React from "react";
import { PerspectiveCamera } from "@react-three/drei";
import ThreeLighting from "../molecules/ThreeLighting";
import ThreeFigure from "../molecules/ThreeFigure";
import Backdrop from "../molecules/ThreeBackdrop";

export default function ThreeContent({ onLoad }) {
	return (
		<>
			<PerspectiveCamera makeDefault={true} position={[0, 0, 50]}/>
			<Backdrop/>
			<ThreeLighting/>
			<ThreeFigure onLoad={onLoad}/>
		</>
	);
}