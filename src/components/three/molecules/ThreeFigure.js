import React, { useRef } from "react";
import { Box, TrackballControls, PerspectiveCamera } from "@react-three/drei";
import GrowingBox from "../atoms/ThreeGrowingBox";
import { animated, useSpring } from "@react-spring/three";

export default function ThreeFigure() {
	const camRef = useRef();
	const groupRef = useRef();

	const { rotateX, rotateY } = useSpring({
		from: {
			rotateX: Math.PI / 6,
			rotateY: Math.PI / 6,
		},
		to: {
			rotateX: 2 * Math.PI + Math.PI / 6,
			rotateY: 10 * Math.PI + Math.PI / 6
		},
		config: {
			duration: 20000,
		},
		loop: true
	});

	return (
		<>
			<PerspectiveCamera ref={camRef} position={[0, 0, 50]}/>
			<TrackballControls
				camera={camRef.current}
				position={[0, 0, 10]}
				noZoom={true}
				noPan={true}
				rotateSpeed={2.5}
			/>
			<animated.group
				ref={groupRef}
				position={[0, 0, 0]}
				rotation-x={rotateX}
				rotation-y={rotateY}
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
			</animated.group>
		</>
	);
}