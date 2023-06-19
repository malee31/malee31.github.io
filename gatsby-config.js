module.exports = {
	// pathPrefix: "/home",
	siteMetadata: {
		title: "Marvin Lee | Developer Portfolio",
		siteUrl: "https://designedbymarvin.com"
	},
	plugins: [
		"gatsby-plugin-image",
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://designedbymarvin.com",
				policy: [
					{
						userAgent: "*", allow: "/"
					},
					{
						userAgent: "*", disallow: "/upgrade"
					}
				],
			}
		},
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				"name": "Marvin Lee | Developer Portfolio",
				"short_name": "Marvin | Developer Portfolio",
				"start_url": "/",
				"icon": "src/images/favicons/android-chrome-512x512.png",
				"theme_color": "#FFFFFF",
				"background_color": "#FFFFFF",
				"display": "standalone"
			}
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/"
			},
			__key: "images"
		},
		"gatsby-plugin-mdx",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: `${__dirname}/src/projects`,
			},
		},
		{
			resolve: "gatsby-plugin-google-gtag",
			options: {
				trackingIds: [
					"G-1QJGJWN7RH"
				],
				gtagConfig: {
					anonymize_ip: true,
					cookie_expires: 0
				},
				pluginConfig: {
					head: false,
					respectDNT: true
				},
			},
		},
	]
};