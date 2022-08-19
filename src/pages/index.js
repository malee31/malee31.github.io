import React from "react";
import "../styles.css";
import Navbar from "../components/react/molecules/Navbar";
import Splash from "../components/react/molecules/Splash";
import Footer from "../components/react/molecules/Footer.js";
import Featured from "../components/react/organisms/Featured";
import Seo from "../components/react/atoms/SEO";
import HalfScreenSection from "../components/react/atoms/HalfScreenSection";

export default function Home() {
	return (
		<>
			<Seo/>
			<Navbar/>
			<Splash/>
			<main>
				<HalfScreenSection id="about" className="heavy-padding column-align">
					<h1>
						About Me
					</h1>
					<p className="content">
						I have been an avid programmer ever since I learned that devices can turn lines of text into interactive and stunning games and websites in my first year of middle school.
						Currently, I write most of my projects using NodeJS on the backend and HTML, CSS, and Javascript on the front-end.
						Although my language of choice is JavaScript, I am also familiar with C, C++, Java, and Python.
					</p>
				</HalfScreenSection>

				<section id="github">
					<Featured/>
				</section>
			</main>
			<Footer/>
		</>
	);
}