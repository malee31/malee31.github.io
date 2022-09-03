import React from "react";
import ScreenSection from "../atoms/FullScreenSection";
import ProfileSVG from "../../../images/profile.svg";
import "./AboutMe.css";
import ScrollBanner from "../atoms/ScrollBanner";

export default function AboutMe() {
	return (
		<ScreenSection
			id="about"
			className="column-align about-container"
		>
			<h1 className="about-heading">About Me</h1>
			<div className="about-content">
				<img
					className="about-profile-picture"
					src={ProfileSVG}
					alt="Profile"
				/>
				<p className="about-desc">
					I enjoy building interactive responsive websites and tools using various frameworks like React. I currently write most of my web projects with NodeJS alongside React frameworks like Gatsby, React Native, or NextJS but I also have some projects in Python and normal HTML/CSS/JS.
					<br/>
					<span className="about-desc-spacer"></span>
					Although my language of choice is JavaScript, I am also very familiar with C, C++, Java, and Python and constantly look out for new tools, libraries, and frameworks to learn.
					<br/>
					<span className="about-desc-spacer"></span>
					I value turning ideas into websites that are comfortable to interact using the right tools for each job and creating clean, well-documented code.
					<br/>
				</p>
			</div>
			<ScrollBanner to="#github" className="about-desc-scroll-banner">
				▼
			</ScrollBanner>
		</ScreenSection>
	);
}