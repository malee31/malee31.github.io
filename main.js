const repos = document.querySelectorAll(".repo");
const reposize = repos.length;
var currentRepoSlide = 0;

function repoTransition(change) {
	let increment = change % reposize + reposize;

	currentRepoSlide = (currentRepoSlide + increment) % reposize;

	let left = repos[(currentRepoSlide + reposize - 1) % reposize];
	let right = repos[(currentRepoSlide + 1) % reposize];
	let show = repos[currentRepoSlide];

	let hidden = document.querySelector(".hiderepo");
	if(hidden) hidden.classList.remove("hiderepo");

	let shown = document.querySelector(".showrepo");
	shown.classList.remove("showrepo");
	shown.classList.add("hiderepo");

	if(change >= 1) {
		let selected = document.querySelector(".leftrepo");
		if(selected) selected.classList.remove("leftrepo");
	} else if(change <= 1) {
		let selected = document.querySelector(".rightrepo");
		if(selected) selected.classList.remove("rightrepo");
	}

	for(let item = 0; item < reposize; item++) {
		if(item !== currentRepoSlide) {
			repos[item].classList.remove("leftrepo");
			repos[item].classList.remove("rightrepo");
		}
	}

	left.classList.add("leftrepo");
	show.classList.add("showrepo");
	right.classList.add("rightrepo");
}
