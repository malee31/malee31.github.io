exports.onRenderBody = ({ setHtmlAttributes }) => {
	setHtmlAttributes({
		lang: "en",
		itemScope: true,
		itemType: "https://schema.org/WebPage"
	});
};