import React, { useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
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
		className = "",
		...extraProps
	} = props;
	const [flipped, setFlipped] = useState(false);
	// For viewing without Javascript. Still not the best solution for SEO
	const [allowFocusFlip, setAllowFocusFlip] = useState(true);
	const toggleFlip = () => setFlipped(!flipped);

	// Disable focus flip if Javascript is enabled
	useEffect(() => {
		// setAllowFocusFlip(false);
	}, []);

	return (
		<div
			className={`repo-card-container ${allowFocusFlip ? "repo-card-container-focus-flip-enabled" : ""} ${className} ${flipped ? "repo-card-container-force-flip" : ""}`}
			role="menuitem"
			tabIndex="0"
			onClick={toggleFlip}
			onKeyUp={(e) => {
				if(e.code !== "Space" && e.code !== "Enter") return;
				e.preventDefault();
				toggleFlip();
			}}
			{...extraProps}
		>
			<div className="repo-card repo-card-front" aria-hidden={flipped || allowFocusFlip}>
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
					{repoLink && <a href={repoLink} tabIndex={(flipped || allowFocusFlip) ? 0 : -1} style={{ color: textColor }}>Open in GitHub</a>}
					{demoLink && <a href={demoLink} tabIndex={(flipped || allowFocusFlip) ? 0 : -1} style={{ color: textColor }}>Try Demo</a>}
				</div>
			</div>
		</div>
	);
};