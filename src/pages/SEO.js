import React from "react";
import { Helmet } from "react-helmet";

export default function SEO() {
	return (
		<Helmet>
			<title>Home</title>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
			<meta name="description" content="Marvin's Personal Website"/>
			<meta name="robots" content="index, nofollow"/>
			<link rel="apple-touch-icon" type="image/png" href="../images/favicons/apple-touch-icon.png" sizes="180x180"/>
			<link rel="icon" type="image/png" href="../images/favicons/favicon-16x16.png" sizes="16x16"/>
			<link rel="icon" type="image/png" href="../images/favicons/favicon-32x32.png" sizes="32x32"/>
			<link rel="icon" type="image/png" href="../images/favicons/android-chrome-192x192.png" sizes="192x192"/>
			<link rel="icon" type="image/png" href="../images/favicons/android-chrome-512x512.png" sizes="512x512"/>
			<link rel="icon" type="image/png" href="../images/favicons/favicon.ico"/>
			<link rel="manifest" href="../images/favicons/manifest.webmanifest"/>
		</Helmet>
	);
}