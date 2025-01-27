import React, { useRef } from "react";
import { Box, PerspectiveCamera, TrackballControls } from "@react-three/drei";
import GrowingBox from "../atoms/ThreeGrowingBox";
import { animated, easings, useChain, useSpring, useSpringRef } from "@react-spring/three";

export default function ThreeFigure({ onLoad }) {
	const camRef = useRef();
	const transitionTime = 20000;

	const accelerateRef = useSpringRef();
	const velocityRef = useSpringRef();
	const accelerate = useSpring({
		ref: accelerateRef,
		from: {
			rotateX: Math.PI / 6,
			rotateY: Math.PI / 6,
		},
		to: {
			rotateX: 2 * Math.PI,
			rotateY: 10 * Math.PI,
		},
		config: {
			duration: transitionTime,
			easing: t => {
				return easings.easeInSine(t);
			}
		},
		loop: false
	});
	const velocity = useSpring({
		ref: velocityRef,
		from: {
			rotateX: 0,
			rotateY: 0,
		},
		to: {
			rotateX: 2 * Math.PI,
			rotateY: 10 * Math.PI,
		},
		config: {
			duration: 20000,
		},
		loop: true
	});

	useChain([accelerateRef, velocityRef]);

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
				position={[0, 0, 0]}
				rotation-x={accelerate.rotateX}
				rotation-y={accelerate.rotateY}
			>
				<animated.group
					position={[0, 0, 0]}
					rotation-x={velocity.rotateX}
					rotation-y={velocity.rotateY}
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
						<meshPhongMaterial
							color="#EEEEEE"
							wireframe={false}
							onBeforeCompile={onLoad}
						/>
					</Box>
					<GrowingBox
						color="#067DDC"
						position={[0, -3, 0]}
						args={[12, 6, 12]}
						scale={[1, 0.3, 0.25]}
						scaleRate={[0, 0, 0.01]}
					/>
				</animated.group>
			</animated.group>
		</>
	);
}