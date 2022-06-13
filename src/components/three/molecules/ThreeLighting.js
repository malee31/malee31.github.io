import React from "react";

export default function ThreeLighting() {
	return (
		<>
			<ambientLight intensity={0.5}/>
			<pointLight position={[-5, -10, 15]}/>
			<pointLight position={[5, 10, -15]}/>
			<spotLight position={[10, 10, 10]} angle={0.9} penumbra={1}/>
		</>
	);
}