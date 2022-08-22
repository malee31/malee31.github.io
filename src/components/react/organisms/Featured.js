import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import RepoCard from "../molecules/RepoCard";
import "./Featured.css";

const FEATURED_DATA = [
	{
		title: "Pantry Cabinet",
		description: "[WIP] A site for displaying what is available in your pantry and how many of each item you have",
		repoLink: "https://github.com/malee31/the-pantry-cabinet",
		demoLink: "https://pantry-cabinet.vercel.app/",
		imageSrc: "repositories/PantryCabinet.png",
		backgroundColor: "#BA8C63",
		textColor: "#342918"
	},
	{
		title: "CardinalHours App",
		description: "An Expo App written in React Native for logging hours into the CardinalBotics CardinalHours server. (Demo password: bob)",
		repoLink: "https://github.com/malee31/ReactNativeCardinalBoticsApp",
		demoLink: "https://malee31.github.io/ReactNativeCardinalBoticsApp",
		imageSrc: "repositories/ReactNativeCardinalBoticsApp.png",
		backgroundColor: "#973337",
		textColor: "#F5F5F5"
	},
	{
		title: "Asteroids Game",
		description: "A recreation of Asteroids from 1979! Controls are listed in the footer below so enjoy!",
		repoLink: "https://github.com/malee31/Processing-Java-Projects/tree/AsteroidsGame",
		demoLink: "https://malee31.github.io/Processing-Java-Projects/AsteroidsGame",
		imageSrc: "repositories/AsteroidsGame.png",
		backgroundColor: "#262626",
		textColor: "#D6D6D6"
	},
	{
		title: "Starfield",
		description: "A mesmerizing canvas with a calming sea of stars",
		repoLink: "https://github.com/malee31/Processing-Java-Projects/tree/Starfield",
		demoLink: "https://malee31.github.io/Processing-Java-Projects/Starfield",
		imageSrc: "repositories/Starfield.png",
		backgroundColor: "#470B33",
		textColor: "#EBEBEB"
	},
	{
		title: "Slack to Discord Bridge",
		description: "Creates a Discord archive by forwarding Slack messages and files to a Discord Server of your choosing",
		repoLink: "https://github.com/malee31/Slack-to-Discord-Bridge",
		imageSrc: "repositories/SlackToDiscordBridge.png",
		backgroundColor: "#431F4F",
		textColor: "#E8E8FD"
	},
	{
		title: "Canvas Helpers",
		description: "Python CLI tool for automatically creating study groups on Canvas based on student preferences (See other contributors on GitHub)",
		repoLink: "https://github.com/malee31/CanvasHelpers/tree/better-study-groups",
		imageSrc: "repositories/CanvasHelpers.png",
		backgroundColor: "#C55B43",
		textColor: "#FFFFFF"
	},
	{
		title: "EduConnect",
		description: "A chatroom created using WebSockets and Google Authentication that allows teachers to answer questions from students in real time!",
		repoLink: "https://github.com/malee31/EduConnect",
		demoLink: "https://educonnect-hyphen-hacks.herokuapp.com/chatroom/chatroom.html",
		imageSrc: "repositories/EduConnect.png",
		backgroundColor: "#5175E8",
		textColor: "#FFFFFF"
	},
	{
		title: "Custom Form Maker",
		description: "Build custom forms that forward data to a spreadsheet using the Google Sheets NodeJS API",
		repoLink: "https://github.com/malee31/Custom-Form-Maker",
		demoLink: "https://custom-google-form.herokuapp.com/",
		imageSrc: "repositories/CustomFormMaker.png",
		backgroundColor: "#1786F1",
		textColor: "#FFFFFF"
	},
	{
		title: "Cube Color Picker",
		description: "A color picker that uses WebGL to allow you to better choose from hues of the same color by presenting it as a lit cube",
		demoLink: "https://malee31.github.io/CubeColorPicker",
		imageSrc: "repositories/CubeColorPicker.png",
		backgroundColor: "#3D93E7",
		textColor: "#E9EDFA"
	},
	{
		title: "Halloween Discord Bot",
		description: "A Discord Bot I made for a one-off Halloween Event on a specific Discord Server!",
		repoLink: "https://github.com/malee31/HalloweenDiscordBot",
		imageSrc: "repositories/HalloweenBot.png",
		backgroundColor: "#303135",
		textColor: "#E2E3E5"
	},
	{
		title: "Data Visualization",
		description: "A nice animated chart for random data that can be changed and adapted for different data sets",
		repoLink: "https://github.com/malee31/Processing-Java-Projects/tree/DataVisualization",
		demoLink: "https://malee31.github.io/Processing-Java-Projects/DataVisualization",
		imageSrc: "repositories/DataVisualization.png",
		backgroundColor: "#646464",
		textColor: "#FFFFFF"
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
				  gatsbyImageData(
					placeholder: TRACED_SVG
					tracedSVGOptions: {}
					webpOptions: {quality: 25}
					formats: [AUTO, WEBP]
					breakpoints: [100, 150, 200, 250, 300, 400, 600, 800, 960, 1280, 1920]
					sizes: "(min-width: 1275px) 25vw, (min-width: 667px) 33vw, (min-width: 660px) 50vw, 100vw"
				  )
				}
			  }
			}
		  }
		}
	`);

	return (
		<div id="featured">
			<h1>Featured Projects</h1>
			<div id="featured-container" role="menu">
				{FEATURED_DATA.map(featuredData => {
					const {
						imageSrc,
						...cardData
					} = featuredData;
					const imageData = data.allFile.edges.find(edge => edge.node.relativePath === imageSrc)?.node;
					const image = getImage(imageData);

					return (
						<RepoCard key={cardData.title} {...cardData} image={image}/>
					);
				})}
			</div>
		</div>
	);
}