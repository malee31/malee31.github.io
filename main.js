const repos = document.querySelectorAll(".repo");
var currentRepoSlide = 0;

function repoTransition(change) {
	let hiddenSlide = document.querySelector(".hiderepo");
	if(hiddenSlide) hiddenSlide.classList.remove("hiderepo");

	let shown = document.querySelector(".showrepo");
	shown.classList.remove("showrepo");
	shown.classList.add("hiderepo");


	currentRepoSlide += change + repos.length;
	currentRepoSlide %= repos.length;

	repos[currentRepoSlide].classList.add("showrepo");
}
