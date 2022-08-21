import React from "react";
import HalfScreenSection from "../atoms/HalfScreenSection";
import "./AboutMe.css";

export default function AboutMe() {
	return (
		<HalfScreenSection
			scrollId="about"
			className="column-align about-container"
		>
			<h1>About Me</h1>
			<p className="about-desc">
				I have been dedicated to programming ever since I learned that I could make the devices in my hands turn lines of text into visually appealing interactive games and websites in 6th grade.
				Ever since then, I have been diving into the world of web development and learning multiple languages and frameworks.
				<br/>
				<br/>
				I currently write most of my web projects in Nodejs with various React frameworks like Gatsby, React Native, or NextJS.
				<br/>
				Although my language of choice is JavaScript, I am also very familiar with C, C++, Java, and Python.
			</p>
		</HalfScreenSection>
	);
}