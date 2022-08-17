import React from "react";
import { Helmet } from "react-helmet";

export default function Seo() {
	return (
		<Helmet>
			<title>Marvin Lee | Developer Portfolio</title>
			<html lang="en"/>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta name="robots" content="index"/>

			<meta name="keywords" content="Marvin Lee Portfolio Site, Full Stack Developer"/>
			<meta name="description" content="Marvin Lee | Full Stack Developer Portfolio"/>
			<meta name="og:description" content="Marvin Lee | Full Stack Developer Portfolio"/>
			<meta itemProp="description" content="Marvin Lee | Full Stack Developer Portfolio"/>
			<meta name="og:url" content="https://malee31.github.io/home"/>
			<meta name="og:title" content="Marvin Lee | Developer Portfolio"/>
			<meta itemProp="name" content="Marvin Lee | Developer Portfolio"/>

			<link rel="apple-touch-icon" type="image/png" href="../../../images/favicons/apple-touch-icon.png" sizes="180x180"/>
			<link rel="icon" type="image/png" href="../../../images/favicons/favicon-16x16.png" sizes="16x16"/>
			<link rel="icon" type="image/png" href="../../../images/favicons/favicon-32x32.png" sizes="32x32"/>
			<link rel="icon" type="image/png" href="../../../images/favicons/android-chrome-192x192.png" sizes="192x192"/>
			<link rel="icon" type="image/png" href="../../../images/favicons/android-chrome-512x512.png" sizes="512x512"/>
			<link rel="icon" type="image/png" href="../../../images/favicons/favicon.ico"/>
			<link rel="manifest" href="../../../images/favicons/manifest.webmanifest"/>
		</Helmet>
	);
}