import * as React from "react";
import Navbar from "../components/molecules/Navbar";
import Splash from "../components/molecules/Splash";
import RepoList from "../components/organisms/RepoList";
import Footer from "../components/molecules/Footer.js";
import "./styles.css";

export default function Home(data) {
	return (
		<>
			<Navbar navigation={data.navigation}/>
			<Splash/>
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
			<Footer/>
		</>
	);
}