import React, {useState} from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./RepoCard.css";

export default function RepoCard({ image, title, description, repoLink, demoLink }) {
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
		>
			<div className="repo-card repo-card-front" aria-hidden={flipped}>
				<GatsbyImage className="featured-card-img" alt={`${title} Demo Image`} image={image}/>
			</div>
			<div className="repo-card column-center repo-card-back" aria-hidden={!flipped}>
				<h3 className="repo-card-title">{title}</h3>
				<p className="repo-card-description">{description}</p>
				<div className="repo-card-links">
					<a href={repoLink} tabIndex={flipped ? 0 : -1}>Open in GitHub</a>
					<a href={demoLink} tabIndex={flipped ? 0 : -1}>Try Demo</a>
				</div>
			</div>
		</div>
	);
}