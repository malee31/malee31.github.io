import React, { useEffect, useRef, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router"
import "./RepoCard.css";

export default function RepoCard(props) {
	const {
		image,
		title,
		description,
		repoLink,
		demoLink,
		backgroundColor = "#AAAAAA",
		textColor = "#191816",
		shortNames = [],
		className = "",
		...extraProps
	} = props;
	const location = useLocation();
	const [flipped, setFlipped] = useState(false);
	const toggleFlip = () => setFlipped(!flipped);
	// To make sure flipping only occurs when focused on the card and not when focused on the buttons
	const cardRef = useRef();

	// For viewing without Javascript. Still not the best solution for SEO
	const [allowFocusFlip, setAllowFocusFlip] = useState(true);
	// Disable focus flip if Javascript is enabled
	useEffect(() => {
		setAllowFocusFlip(false);
	}, []);

	// For shortcut linking
	useEffect(() => {
		const projectShortName = (new URLSearchParams(location.search)).get("project");
		if(projectShortName && shortNames.includes(projectShortName)) {
			setFlipped(true);
		}
	}, [location.search, shortNames]);

	return (
		<div
			className={`repo-card-container ${allowFocusFlip ? "repo-card-container-focus-flip-enabled" : ""} ${className} ${flipped ? "repo-card-container-force-flip" : ""}`}
			role="menuitem"
			aria-label={title}
			aria-haspopup="menu"
			tabIndex="0"
			ref={cardRef}
			onClick={toggleFlip}
			onKeyDown={(e) => {
				if(e.code !== "Space" && e.code !== "Enter") return;
				if(e.target !== cardRef.current && e.code === "Enter") return;
				e.preventDefault();
				// Keep focus on button even when flipped away so that the position persists after flipping back
				// if(flipped) cardRef.current.focus();
				toggleFlip();
			}}
			{...extraProps}
		>
			<div className="repo-card repo-card-front" aria-hidden={flipped || allowFocusFlip} title={title}>
				<GatsbyImage className="featured-card-img" alt={`${title} Demo Image`} image={image}/>
			</div>
			<div
				className="repo-card column-center repo-card-back"
				aria-hidden={!flipped && !allowFocusFlip}
			>
				<h3
					className="repo-card-title"
					style={{ backgroundColor: backgroundColor, color: textColor }}
				>
					{title}
				</h3>
				<p className="repo-card-description">
					{description}
				</p>
				<div
					className="repo-card-links"
					style={{ backgroundColor: backgroundColor, color: textColor }}
				>
					{repoLink && <a role="menuitem" href={repoLink} tabIndex={(flipped || allowFocusFlip) ? 0 : -1} style={{ color: textColor }}>Open in GitHub</a>}
					{demoLink && <a role="menuitem" href={demoLink} tabIndex={(flipped || allowFocusFlip) ? 0 : -1} style={{ color: textColor }}>Try Demo</a>}
				</div>
			</div>
		</div>
	);
};