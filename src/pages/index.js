import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../components/molecules/Navbar";
import RepoList from "../components/organisms/RepoList";
import "./styles.css";

export default function Home(data) {
	return (
		<>
			<Navbar navigation={data.navigation}/>

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
					<a href="https://github.com/malee31" className="logoLink">
						<StaticImage src="../images/github.svg" alt="Github"/>
					</a>
					<a href="https://linkedin.com/in/marvin-lee~" className="logoLink">
						<StaticImage src="../images/linkedIn.svg" alt="LinkedIn"/>
					</a>
				</div>
			</footer>
		</>
	);
}