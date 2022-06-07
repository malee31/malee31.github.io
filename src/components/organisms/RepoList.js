import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import RepoSlide from "../molecules/RepoSlide";
import "./RepoList.css";
import ScreenSection from "../atoms/FullScreenSection";

const REPO_DATA = [
	{
		title: "CardinalHours App",
		description: "An Expo App written in React Native for logging hours into the CardinalBotics CardinalHours server. (Demo password: bob)",
		repoLink: "https://github.com/malee31/ReactNativeCardinalBoticsApp",
		demoLink: "https://malee31.github.io/ReactNativeCardinalBoticsApp",
		imageSrc: "repositories/ReactNativeCardinalBoticsApp.png"
	},
	{
		title: "Asteroids Game",
		description: "A recreation of Asteroids from 1979! Controls are listed in the footer below so enjoy!",
		repoLink: "https://github.com/malee31/AsteroidsGameProcessing",
		demoLink: "https://malee31.github.io/AsteroidsGameProcessing",
		imageSrc: "repositories/AsteroidsGame.png"
	},
	{
		title: "Data Visualization",
		description: "A nice animated chart for random data that can be changed and adapted for different data sets",
		repoLink: "https://github.com/malee31/DataVisualization",
		demoLink: "https://malee31.github.io/DataVisualization",
		imageSrc: "repositories/DataVisualization.png"
	},
	{
		title: "Starfield",
		description: "A mesmerizing canvas with a calming sea of stars",
		repoLink: "https://github.com/malee31/StarfieldProcessing",
		demoLink: "https://malee31.github.io/StarfieldProcessing",
		imageSrc: "repositories/Starfield.png"
	}
];

export default function RepoList() {
	const data = useStaticQuery(graphql`
		query HomeQuery {
			allFile {
				edges {
					node {
						childImageSharp {
							gatsbyImageData
						}
						publicURL
						id
						relativePath
					}
				}
			}
		}
	`);

	const [slideNumber, setSlideNumber] = useState(0);
	const [slideLeft, setSlideLeft] = useState(true);
	const offsetSlide = offset => {
		const len = REPO_DATA.length;
		setSlideNumber((slideNumber + len + (offset % len)) % len);
		setSlideLeft(offset < 0);
	}

	return (
		<ScreenSection id="repoList" className="row-stack">
			{REPO_DATA.map((repoData, repoIndex) => {
				let position = repoIndex - slideNumber;
				if(REPO_DATA.length === slideNumber + 1 && repoIndex === 0) {
					position = 1;
				} else if(slideNumber === 0 && repoIndex === REPO_DATA.length - 1) {
					position = -1;
				}

				const image = getImage(data.allFile.edges.find(edge => edge.node.relativePath === repoData.imageSrc)?.node);

				return (
					<RepoSlide
						key={repoData.title}
						{...repoData}
						image={image}
						displayPosition={position}
						hideState={(position === -1) !== slideLeft}
					/>
				);
			})}
			<div id="prevrepo" role="button" tabIndex={0} onClick={() => offsetSlide(-1)} onKeyUp={() => offsetSlide(-1)}>
				<StaticImage src="../../images/nextArrow.svg" alt="Previous"/>
			</div>
			<div id="nextrepo" role="button" tabIndex={0} onClick={() => offsetSlide(1)} onKeyUp={() => offsetSlide(1)}>
				<StaticImage src="../../images/nextArrow.svg" alt="Next"/>
			</div>
		</ScreenSection>
	);
}