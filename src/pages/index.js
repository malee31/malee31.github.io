import React from "react";
import "../styles.css";
import Navbar from "../components/react/molecules/Navbar";
import Splash from "../components/react/molecules/Splash";
import Footer from "../components/react/molecules/Footer.js";
import Seo from "../components/react/atoms/SEO";
import AboutMe from "../components/react/organisms/AboutMe";
import loadable from "@loadable/component";

const Featured = loadable(() =>
	import("../components/react/organisms/Featured")
);

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