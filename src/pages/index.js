import React from "react";
import "../styles.css";
import Navbar from "../components/react/molecules/Navbar";
import Splash from "../components/react/molecules/Splash";
import Footer from "../components/react/molecules/Footer.js";
import Featured from "../components/react/organisms/Featured";
import Seo from "../components/react/atoms/SEO";
import AboutMe from "../components/react/organisms/AboutMe";

export default function Home() {
	return (
		<>
			<Seo/>
			<Navbar/>
			<Splash/>
			<main>
				<AboutMe/>
				<section id="github">
					<Featured/>
				</section>
			</main>
			<Footer/>
		</>
	);
}