import React from "react";
import { Canvas } from "@react-three/fiber";

export default function ThreeSplash() {
	return (
		<div style={{ position: "absolute" }}>
			<Canvas>
				<mesh>
					<boxBufferGeometry
						attach="geometry"
						arcs={[1, 1, 1]}
					/>
					<meshBasicMaterial attach="material" color="red"/>
				</mesh>
			</Canvas>
		</div>
	);
}