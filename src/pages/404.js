import React from "react";
import "../styles/global.css";
import { Link } from "gatsby"
import Seo from "../components/react/atoms/SEO";
import "./404.css";

export const Head = () => <Seo siteTitle="Not Found"/>;

export default function NotFoundPage() {
	return (
		<main className="http404-main">
			<h1>There's Nothing Here!</h1>
			<Link to="/">
				(Go back to home)
			</Link>
		</main>
	);
}