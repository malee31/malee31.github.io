import * as React from "react";
import { useState } from "react";
import "./styles.css";
import "./octocat.css";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";

export default function Home(data) {
	return (
		<>
			<input id="menutoggle" className="hidden" type="checkbox"/>
			<label id="menuicon" htmlFor="menutoggle">
				<div id="menuiconcontainer">
					<div className="menuicondiv"/>
					<div className="menuicondiv"/>
					<div className="menuicondiv"/>
				</div>
			</label>
			<nav>
				<div id="navpadding">
					<Link href="#home"><span>Home</span></Link>
					<Link href="#about"><span>About Me</span></Link>
					<Link href="#github"><span>Github</span></Link>
				</div>
			</nav>

			<header id="home" className="columnalign">
				<h2>Marvin Lee</h2>
				<h4>Student</h4>
			</header>

			<main>
				<section id="about" className="heavyPadding columncenter columnalign">
					<h1>
						About Me
					</h1>
					<p className="content">
						I have been programming ever since I learned about it in the beginning of middle school. I mostly work on the server-side with NodeJS using HTML, CSS, and JavaScript as the front-end. Although my language of choice is JavaScript, I am also familiar with Java and basic Python.
					</p>
				</section>

				<section id="github" className="columnstack">
					<h1>
						Checkout my GitHub Repositories
					</h1>
					<RepoList data={data}/>
				</section>
			</main>

			<footer className="slightPadding columnalign">
				<h2 id="lowerName">
					Marvin Lee
				</h2>
				<div id="socials" className="rowcenter">
					<Link href="https://github.com/malee31" className="logoLink">
						<StaticImage src="../images/github.svg" alt="Github"/>
					</Link>
					<Link href="https://linkedin.com/in/marvin-lee~" className="logoLink">
						<StaticImage src="../images/linkedIn.svg" alt="LinkedIn"/>
					</Link>
				</div>
			</footer>
		</>
	);
}

const REPO_DATA = [
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

function RepoList() {
	const data = useStaticQuery(graphql`
		query HomeQuery {
			allFile {
				edges {
					node {
						relativePath
						childImageSharp {
							gatsbyImageData
						}
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
		<div id="repoList" className="rowstack">
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
			<div id="prevrepo" onClick={() => offsetSlide(-1)}>
				<StaticImage src="../images/nextArrow.svg" alt="Previous"/>
			</div>
			<div id="nextrepo" onClick={() => offsetSlide(1)}>
				<StaticImage src="../images/nextArrow.svg" alt="Next"/>
			</div>
		</div>
	);
}

// Display position of <=-1, ==0, >=1 for left, center, right
function RepoSlide({ title, description, repoLink, demoLink, image, displayPosition, hideState }) {
	const displayClass = displayPosition ? (displayPosition < 0 ? "repo-left" : "repo-right") : "repo-display";
	return (
		<div className={`repo ${displayClass} ${hideState ? "hide-repo" : ""}`}>
			<h2>
				{title}
			</h2>
			<div className="repomain">
				<Link href={repoLink} className="github-corner" aria-label="View source on GitHub">
					<GatsbyImage className="repo-img" alt={`${title} Demo Image`} image={image}/>
					<svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
						<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
						<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: "130px 106px" }} className="octo-arm"></path>
						<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
					</svg>
				</Link>
				<div className="desc">
					<p>{description}</p>
					<Link href={demoLink}>Try it out! ></Link>
				</div>
			</div>
		</div>
	);
}