import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import GrowingBox from "../atoms/ThreeGrowingBox";

export default function ThreeFigure() {
	const camRef = useRef();
	const groupRef = useRef();

	// TODO: Simplify with another library like spring
	useFrame(() => {
		groupRef.current.rotation.x -= 0.005;
		groupRef.current.rotation.y += 0.01;
	});

	return (
		<>
			<PerspectiveCamera ref={camRef} position={[0, 0, 50]}/>
			<OrbitControls camera={camRef.current} position={[0, 0, 10]} enableZoom={false}/>
			<group
				ref={groupRef}
				position={[0, 0, 0]}
				rotation={[Math.PI / 6, Math.PI / 6, 0]}
			>
				<GrowingBox
					color="#067DDC"
					position={[0, 3, 0]}
					args={[12, 6, 12]}
					scale={[0.25, 0.3, 1]}
					scaleRate={[0.01, 0, 0]}
				/>
				<Box
					position={[0, 0, 0]}
					args={[10, 9.95, 10]}
				>
					<meshPhongMaterial color="#EEEEEE" wireframe={false}/>
				</Box>
				<GrowingBox
					color="#067DDC"
					position={[0, -3, 0]}
					args={[12, 6, 12]}
					scale={[1, 0.3, 0.25]}
					scaleRate={[0, 0, 0.01]}
				/>
			</group>
		</>
	);
}