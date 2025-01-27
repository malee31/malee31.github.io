import React, { useEffect } from "react";
import Seo from "../components/react/atoms/SEO";
import Navbar from "../components/react/molecules/Navbar";
import Splash from "../components/react/organisms/Splash";
import AboutMe from "../components/react/organisms/AboutMe";
import Featured from "../components/react/organisms/Featured";
import Footer from "../components/react/molecules/Footer.js";
import wake from "../utils/wake";

export const Head = Seo;

export default function Home() {
	useEffect(() => {
		console.log("Waking");
		wake();
	}, []);

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