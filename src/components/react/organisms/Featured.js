import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import RepoCard from "../molecules/RepoCard";
import "./Featured.css";

const FEATURED_DATA = [
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
		repoLink: "https://github.com/malee31/Processing-Java-Projects/tree/AsteroidsGame",
		demoLink: "https://malee31.github.io/Processing-Java-Projects/AsteroidsGame",
		imageSrc: "repositories/AsteroidsGame.png"
	},
	{
		title: "Starfield",
		description: "A mesmerizing canvas with a calming sea of stars",
		repoLink: "https://github.com/malee31/Processing-Java-Projects/tree/Starfield",
		demoLink: "https://malee31.github.io/Processing-Java-Projects/Starfield",
		imageSrc: "repositories/Starfield.png"
	},
	{
		title: "Data Visualization",
		description: "A nice animated chart for random data that can be changed and adapted for different data sets",
		repoLink: "https://github.com/malee31/Processing-Java-Projects/tree/DataVisualization",
		demoLink: "https://malee31.github.io/Processing-Java-Projects/DataVisualization",
		imageSrc: "repositories/DataVisualization.png"
	}
];
export default function Experimental() {
	const data = useStaticQuery(graphql`
		query RepoQuery {
			allFile(filter: {relativeDirectory: {eq: "repositories"}}) {
				edges {
					node {
						publicURL
						relativePath
						id
						name
						childImageSharp {
							gatsbyImageData(placeholder: TRACED_SVG)
						}
					}
				}
			}
		}
	`);

	return (
		<div id="featured">
			<h1>Featured Projects</h1>
			<div id="featured-container" role="list">
				{FEATURED_DATA.map(featuredData => {
					const imageData = data.allFile.edges.find(edge => edge.node.relativePath === featuredData.imageSrc)?.node;
					const image = getImage(imageData);

					return (
						<RepoCard key={featuredData.title} {...featuredData} image={image}/>
					);
				})}
			</div>
		</div>
	)
}