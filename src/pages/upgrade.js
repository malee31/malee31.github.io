import React from "react";
import "../styles.css";
import Navbar from "../components/react/molecules/Navbar";
import Footer from "../components/react/molecules/Footer.js";
import Seo from "../components/react/atoms/SEO";
import AboutMe from "../components/react/organisms/AboutMe";
import loadable from "@loadable/component";
import SplashV2 from "../components/react/organisms/Splash_v2";

const Featured = loadable(() =>
	import("../components/react/organisms/Featured")
);

export const Head = () => (<Seo siteTitle="🚧 Under Construction 🚧"/>);

export default function Upgrade() {
	return (
		<>
			<Seo/>
			<Navbar/>
			<SplashV2/>
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