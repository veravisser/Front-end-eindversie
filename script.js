var knop = document.querySelector("#button");
var openfilter = document.querySelector("#filter");

function togglefilter() {
	openfilter.classList.toggle("visible");
}
knop.addEventListener("click", togglefilter);


var aanmelden = document.querySelector("#aanmelden");
var hoogte = document.querySelector("#hoogte");

function weergevenbericht() {
	hoogte.classList.toggle("weergeven");
}
aanmelden.addEventListener("click", weergevenbericht);
