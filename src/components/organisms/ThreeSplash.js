import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

function ThreeContent() {
	const boxRef = useRef();
	useFrame(() => {
		boxRef.current.rotation.x += 0.01;
		boxRef.current.rotation.y -= 0.01;
		boxRef.current.rotation.z += 0.01;
	});

	return (
		<>
			<Box
				ref={boxRef}
				position={[0, 0, -10]}
				args={[10, 10, 10]}
			>
				<meshPhongMaterial color="#f3f3f3" wireframe={true}/>
			</Box>
		</>
	);
}

export default function ThreeSplash() {
	return (
		<div style={{ position: "absolute" }}>
			<Canvas>
				<ThreeContent/>
			</Canvas>
		</div>
	);
}