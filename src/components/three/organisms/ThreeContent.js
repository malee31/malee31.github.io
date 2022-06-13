import React from "react";
import { PerspectiveCamera, Plane } from "@react-three/drei";
import ThreeLighting from "../molecules/ThreeLighting";
import ThreeFigure from "../molecules/ThreeFigure";

export default function ThreeContent() {
	return (
		<>
			<PerspectiveCamera makeDefault={true} position={[0, 0, 50]}/>
			<ThreeLighting/>
			<Plane
				position={[0, 0, -100]}
				args={[100, 100]}
			>
				<meshPhongMaterial color="#EEEEEE" wireframe={false}/>
			</Plane>
			<ThreeFigure/>
		</>
	);
}