import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function ThreeFigure() {
	const groupRef = useRef();
	const topRef = useRef();
	const bottomRef = useRef();

	// TODO: Simplify with another library like spring
	useFrame(() => {
		groupRef.current.rotation.x += 0.01;
		const top = topRef.current;
		const bottom = bottomRef.current;
		const newScaleChange = Math.min(1 - top.scale.x, 0.01);
		top.scale.x += newScaleChange;
		bottom.scale.z += newScaleChange;

		if(!newScaleChange) {
			const newHeightScale = Math.min(1 - top.scale.y, 0.02);
			top.scale.y += newHeightScale;
			bottom.scale.y += newHeightScale;
		}
	});

	const camRef = useRef();

	return (
		<>
			<PerspectiveCamera ref={camRef} position={[0, 0, 50]}/>
			<OrbitControls camera={camRef.current} position={[0, 0, 10]}/>
			<group
				ref={groupRef}
				position={[0, 0, 0]}
				rotation={[Math.PI / 6, Math.PI / 6, 0]}
			>
				<Box
					ref={topRef}
					position={[0, 3, 0]}
					args={[12, 6, 12]}
					scale={[0.25, 0.3, 1]}
				>
					<meshPhongMaterial color="#067DDC" wireframe={false}/>
				</Box>
				<Box
					position={[0, 0, 0]}
					args={[10, 9.95, 10]}
				>
					<meshPhongMaterial color="#EEEEEE" wireframe={false}/>
				</Box>
				<Box
					ref={bottomRef}
					position={[0, -3, 0]}
					args={[12, 6, 12]}
					scale={[1, 0.3, 0.25]}
				>
					<meshPhongMaterial color="#067DDC" wireframe={false}/>
				</Box>
			</group>
		</>
	);
}