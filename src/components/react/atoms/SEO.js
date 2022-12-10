import React from "react";
import mediaImage from "../../../images/marvin-portfolio.png";
import appleFavicon from "../../../images/favicons/apple-touch-icon.png";
import favicon from "../../../images/favicons/favicon.ico";
import favicon16 from "../../../images/favicons/favicon-16x16.png";
import favicon32 from "../../../images/favicons/favicon-32x32.png";
import favicon192 from "../../../images/favicons/android-chrome-192x192.png";
import favicon512 from "../../../images/favicons/android-chrome-512x512.png";

export default function Seo({ siteTitle }) {
	return (
		<>
			<title>{siteTitle || "Marvin Lee | Developer Portfolio"}</title>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta name="robots" content="index"/>

			<meta property="og:type" content="website"/>
			<meta property="twitter:card" content="summary_large_image"/>

			<meta name="keywords" content="Marvin Lee Portfolio, Full Stack Developer"/>
			<meta name="description" content="Marvin Lee | Full Stack Developer Portfolio"/>
			<meta name="og:description" content="Marvin Lee | Full Stack Developer Portfolio"/>
			<meta name="twitter:description" content="Marvin Lee | Full Stack Developer Portfolio"/>
			<meta itemProp="description" content="Marvin Lee | Full Stack Developer Portfolio"/>

			<meta itemProp="name" content="Marvin Lee | Developer Portfolio"/>
			<meta name="og:title" content="Marvin Lee | Developer Portfolio"/>
			<meta name="twitter:title" content="Marvin Lee | Developer Portfolio"/>

			<meta name="og:url" content="https://designedbymarvin.com"/>
			<meta name="twitter:url" content="https://designedbymarvin.com"/>

			<meta property="og:image" content={mediaImage}/>
			<meta property="twitter:image" content={mediaImage}/>
			<meta property="og:image:alt" content="Marvin | Full Stack Developer"/>
			<meta property="twitter:image:alt" content="Marvin Lee | Full Stack Developer"/>

			<link rel="apple-touch-icon" type="image/png" href={appleFavicon} sizes="180x180"/>
			<link rel="icon" type="image/png" href={favicon16} sizes="16x16"/>
			<link rel="icon" type="image/png" href={favicon32} sizes="32x32"/>
			<link rel="icon" type="image/png" href={favicon192} sizes="192x192"/>
			<link rel="icon" type="image/png" href={favicon512} sizes="512x512"/>
			<link rel="icon" type="image/png" href={favicon}/>
		</>
	);
}