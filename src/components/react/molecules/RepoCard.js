import React, { useState } from "react";
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
		...args
	} = props;

	const [flipped, setFlipped] = useState(false);
	const toggleFlip = () => setFlipped(!flipped);

	return (
		<div
			className={`repo-card-container ${flipped ? "repo-card-container-force-flip" : ""}`}
			role="menuitem"
			tabIndex="0"
			onClick={toggleFlip}
			onKeyUp={({ code }) => {
				if(code !== "Space") return;
				toggleFlip();
			}}
			{...args}
		>
			<div className="repo-card repo-card-front" aria-hidden={flipped}>
				<GatsbyImage className="featured-card-img" alt={`${title} Demo Image`} image={image}/>
			</div>
			<div
				className="repo-card column-center repo-card-back"
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