import { FEATURED_DATA } from "../components/react/organisms/Featured";

const wakeServices = ["onrender.com"];
export default function wake() {
	// Sends a fire-and-forget request to demo services that need time to wake up
	const wakeURLs = FEATURED_DATA
		.map(featuredData => featuredData.demoLink)
		.filter(demoLink => typeof demoLink === "string" && wakeServices.some(wakeService => demoLink.includes(wakeService)));

	// Fire and forget the request with no-ops
	wakeURLs.map(wakeURL => {
		return fetch(wakeURL, { method: "HEAD", mode: "no-cors", cache: "no-store" })
			.then(() => {})
			.catch(() => {})
	});
}