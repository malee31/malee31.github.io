const repos = document.querySelectorAll(".repo");
var currentRepoSlide = 0;

function repoTransition(change) {
	document.querySelector(".showrepo").classList.remove("showrepo");
	currentRepoSlide += change + repos.length;
	currentRepoSlide %= repos.length;
	repos[currentRepoSlide].classList.add("showrepo");
}
