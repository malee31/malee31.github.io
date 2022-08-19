import React from "react";
import "./HalfScreenSection.css";

/**
 * Creates a section element that takes up 100% of the width and half the height of the screen
 * @param props Properties to pass through to the section component. Some properties are merged with internal properties
 * @returns {JSX.Element}
 * @constructor
 */
export default function HalfScreenSection(props) {
	const {
		className = "",
		children,
		...extraProps
	} = props;

	return (
		<section className={`half-screen-section column-center ${className}`} {...extraProps}>
			{children}
		</section>
	);
}