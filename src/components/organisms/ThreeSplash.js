import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, PerspectiveCamera } from "@react-three/drei";

function ThreeContent() {
	const boxRef = useRef();
	useFrame(() => {
		boxRef.current.rotation.x += 0.01;
		boxRef.current.rotation.y -= 0.01;
		boxRef.current.rotation.z += 0.01;
	});

	return (
		<>
			<PerspectiveCamera makeDefault={true} position={[0, 0, 10]}/>
			<ambientLight intensity={0.5}/>
			<pointLight position={[-5, -5, 15]}/>
			<spotLight position={[10, 10, 10]} angle={0.9} penumbra={1}/>
			<Box
				ref={boxRef}
				position={[0, 0, -10]}
				args={[10, 10, 10]}
			>
				<meshPhongMaterial color="#067DDC" wireframe={false}/>
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