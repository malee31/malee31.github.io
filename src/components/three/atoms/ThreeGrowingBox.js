import React, { useRef } from "react";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function calculateChangedScale(current, rate = 0) {
	const newScaleChange = Math.min(1 - current, rate);
	return current + newScaleChange;
}

/**
 * A box element that grows to full size. Pass-through props go to the Box component.
 * @param {Number[]} [props.scaleRate] Three numbers to correspond with rate at which the x, y, z scale to 1
 * @param {string} props.color Color for box mesh
 * @returns {JSX.Element}
 * @constructor
 */
export default function GrowingBox(props) {
	const {
		scaleRate,
		color,
		...boxProps
	} = props;

	const boxRef = useRef();

	useFrame(() => {
		const box = boxRef.current;
		box.scale.x = calculateChangedScale(box.scale.x, scaleRate[0]);
		box.scale.y = calculateChangedScale(box.scale.y, scaleRate[1]);
		box.scale.z = calculateChangedScale(box.scale.z, scaleRate[2]);

		if(box.scale.x === 1 && box.scale.z === 1) {
			box.scale.y = calculateChangedScale(box.scale.y, 0.02);
		}
	});

	return (
		<Box
			ref={boxRef}
			position={[0, 3, 0]}
			args={[12, 6, 12]}
			scale={[0.25, 0.3, 1]}
			{...boxProps}
		>
			<meshPhongMaterial aoMapIntensity={1} color={color} wireframe={false}/>
		</Box>
	);
}