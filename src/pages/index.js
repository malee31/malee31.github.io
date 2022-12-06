import React from "react";
import "../styles.css";
import Navbar from "../components/react/molecules/Navbar";
import Footer from "../components/react/molecules/Footer.js";
import Seo from "../components/react/atoms/SEO";
import AboutMe from "../components/react/organisms/AboutMe";
import Featured from "../components/react/organisms/Featured";
import Splash from "../components/react/organisms/Splash";

export const Head = Seo;

export default function Home() {
	return (
		<>
			<Navbar/>
			<Splash/>
			<main>
				<AboutMe/>
				<section id="featured-projects">
					<Featured/>
				</section>
			</main>
			<Footer/>
		</>
	);
}