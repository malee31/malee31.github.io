import React from "react";
import "./styles.css";
import Navbar from "../components/molecules/Navbar";
import Splash from "../components/molecules/Splash";
import Footer from "../components/molecules/Footer.js";
import Featured from "../components/organisms/Featured";

export default function Home() {
	return (
		<>
			<Navbar/>
			<Splash/>
			<main>
				<section id="about" className="heavy-padding column-center column-align">
					<h1>
						About Me
					</h1>
					<p className="content">
						I have been an avid programmer ever since I learned that devices can turn lines of text into interactive and stunning games and websites in my first year of middle school.
						Currently, I write most of my projects using NodeJS on the backend and HTML, CSS, and Javascript on the front-end.
						Although my language of choice is JavaScript, I am also familiar with C, C++, Java, and Python.
					</p>
				</section>

				<section id="github">
					<Featured/>
				</section>
			</main>
			<Footer/>
		</>
	);
}