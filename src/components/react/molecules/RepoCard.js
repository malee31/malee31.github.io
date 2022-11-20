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
	const [flipped, setFlipped] = useState(true);
	const [noJSAnimation, setNoJSAnimation] = useState(true);
	const toggleFlip = () => setFlipped(!flipped);

	// For the No Javascript Enabled experience
	// CSS Animation gives a second for JS to load and run this effect so that cards default face down
	// IS a race condition. If it fails to complete on time, a flash of the reveal/hide is shown
	useEffect(() => {
		setNoJSAnimation(false);
		setFlipped(false);
	}, []);

	return (
		<div
			className={`repo-card-container ${className} ${flipped ? "repo-card-container-force-flip" : ""}`}
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
			<div className="repo-card repo-card-front" aria-hidden={flipped}>
				<GatsbyImage className="featured-card-img" alt={`${title} Demo Image`} image={image}/>
			</div>
			<div
				className={`repo-card column-center repo-card-back ${noJSAnimation ? "repo-card-back-no-js" : ""}`}
				aria-hidden={!flipped}
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
					{repoLink && <a href={repoLink} tabIndex={flipped ? 0 : -1} style={{ color: textColor }}>Open in GitHub</a>}
					{demoLink && <a href={demoLink} tabIndex={flipped ? 0 : -1} style={{ color: textColor }}>Try Demo</a>}
				</div>
			</div>
		</div>
	);
};