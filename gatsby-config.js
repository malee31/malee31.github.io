module.exports = {
	pathPrefix: "/home",
	siteMetadata: {
		title: `Home`,
		siteUrl: `https://malee31.github.io/home`
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				"icon": "src/images/favicons/android-chrome-512x512.png"
			}
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		},
		"gatsby-plugin-loadable-components-ssr"
	]
};