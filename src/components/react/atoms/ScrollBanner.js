import React from "react";
import "./ScrollBanner.css";

export default function ScrollBanner({ to, children }) {
	return (
		<a className="scroll-banner" href={to}>
			<div className="scroll-banner-content">
				{children}
			</div>
		</a>
	);
}