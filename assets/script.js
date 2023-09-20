const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// constante
const dots = document.querySelector(".dots");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');

// Initialisation currentSlide variable
let currentSlide = 0;

// Creation des points
function generateDots() {
	for (i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add('dot');
		dot.setAttribute("data.id", i);
		if (i === currentSlide) {
			dot.classList.add('dot_selected');
		}
		dots.appendChild(dot);
	}
}
//lancement de la fonction dots
generateDots();

// recupération nombre Dots
const dotsList = document.querySelectorAll('.dot');
// pour tout les éléments de la list
dotsList.forEach( function(dot) {
	dot.addEventListener('click', function () {
		const data_id = dot.getAttribute('data.id');
		updateSlide(data_id - currentSlide);
	});
});

// Ajout de l'event click pour la flèche gauche
arrow_left.addEventListener("click", function () {
	console.log("Gauche");
	updateSlide(-1);
});
// Ajout de l'event click pour la flèche droite
arrow_right.addEventListener("click", function () {
	console.log("Droite");
	updateSlide(1);
});

function updateSlide(offset) {
	currentSlide += offset
	if (currentSlide >= slides.length) {
		currentSlide = 0
	} else if (currentSlide < 0) {
		currentSlide = slides.length -1
	}
	console.log(currentSlide);
	// Mise a jour de l'image via les assets
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	// Mise a jour du code HTML via le tagLine au lieu de innerText qui lui modifie le text d'une balise
	tagLine.innerHTML = slides[currentSlide].tagLine;
	updateDot();
}
function updateDot() {
	const selected = document.querySelector('.dot_selected');
	selected.classList.remove('dot_selected');
	dotsList[currentSlide].classList.add('dot_selected');
}