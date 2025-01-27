import React from "react";

export default function ThreeLighting() {
	return (
		<>
			<ambientLight intensity={1}/>
			<pointLight position={[-5, -10, 15]} decay={0} intensity={4}/>
			<pointLight position={[5, 10, -15]} decay={0} intensity={4}/>
			<spotLight position={[10, 10, 10]} angle={0.9} penumbra={1} decay={0} intensity={4}/>
		</>
	);
}