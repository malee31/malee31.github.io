import React, { useMemo, useRef } from "react";
import { createPortal, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera, Plane } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import { Scene } from "three";

export default function Backdrop() {
	const {
		gl,
		scene,
		camera,
		size
	} = useThree();

	const backgroundScene = useMemo(() => new Scene(), []);
	const backgroundCamRef = useRef();

	const { opacity } = useSpring({
		from: { opacity: 0 },
		to: { opacity: 0.95 }
	});

	useFrame(() => {
		gl.autoClear = true;
		gl.render(backgroundScene, backgroundCamRef.current);
		gl.autoClear = false;
		gl.clearDepth();
		gl.render(scene, camera);
	}, 1);

	return createPortal(
		<>
			<OrthographicCamera
				ref={backgroundCamRef}
				makeDefault={false}
				position={[0, 0, 100]}
			/>
			<Plane
				position={[0, 0, -100]}
				args={[size.width, size.height]}
			>
				<animated.meshBasicMaterial
					position={[0, 0, -100]}
					color="#F0F0F0"
					toneMapped={false}
					transparent={true}
					opacity={opacity}
				/>
			</Plane>
		</>,
		backgroundScene
	);
}