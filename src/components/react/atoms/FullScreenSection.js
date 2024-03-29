import React from "react";
import "./FullScreenSection.css";

/**
 * Creates a section element that takes up 100% of the width and height
 * @param props Properties to pass through to the section component. Some properties are merged with internal properties
 * @returns {JSX.Element}
 * @constructor
 */
export default function ScreenSection(props) {
	const {
		className = "",
		children,
		natural,
		...extraProps
	} = props;

	return (
		<section className={`screen-section column-center ${natural ? "screen-section-natural" : ""} ${className}`} {...extraProps}>
			{children}
		</section>
	);
}