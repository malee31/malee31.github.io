import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Box, PerspectiveCamera } from "@react-three/drei";

function ThreeContent() {
	// For debugging
	const Three = useThree();
	useEffect(() => console.log(Three), [Three]);

	const boxRef = useRef();
	useFrame(() => {
		boxRef.current.rotation.x += 0.01;
		boxRef.current.rotation.y -= 0.01;
		boxRef.current.rotation.z += 0.01;
	});

	return (
		<>
			<PerspectiveCamera makeDefault={true} position={[0, 0, 100]}/>
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
		<div style={{ position: "absolute", width: "100%", height: "100%" }}>
			<Canvas>
				<ThreeContent/>
			</Canvas>
		</div>
	);
}