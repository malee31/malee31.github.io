import React from "react";
import "./ScrollBanner.css";

export default function ScrollBanner(props) {
	const {
		to,
		className = "",
		children,
		...extraProps
	} = props;
	return (
		<a className={`scroll-banner ${className}`} href={to} {...extraProps}>
			<div className="scroll-banner-content">
				{children}
			</div>
		</a>
	);
};