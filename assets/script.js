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
function generateDots() {
	// boucle parcourir slides
	for (i = 0; i < slides.length; i++) {
		// Créer balise div a chaque passage du i
		const dot = document.createElement("div");
		//Ajout de la class dot
		dot.classList.add('dot');
		dot.setAttribute("data.id", i);
		// Vérification que i == currentSlide
		if (i === currentSlide) {
			//Ajout de l'élement dot_selected
			dot.classList.add('dot_selected');
		}
		// Attache le dot au parent dots
		dots.appendChild(dot);
	}
}
//lancement de la fonction dots
generateDots();
// recupération nombre Dots
const dotsNbr = document.querySelectorAll('.dot');
dotsNbr.forEach((dot) => {
	dot.addEventListener('click', (event) => {
		const data_id = dot.getAttribute('data.id');
		updateSlide(data_id - currentSlide);
	});
});

// Ajout de l'event click pour la flèche gauche
arrow_left.addEventListener("click", function () {
	console.log("Gauche");
	//Update des points et des slides
	updateSlide(-1);
});
// Ajout de l'event click pour la flèche droite
arrow_right.addEventListener("click", function () {
	console.log("Droite");
	//update des dots et slides
	updateSlide(+1);
});

function updateSlide(value) {
	currentSlide = (currentSlide + value + slides.length) % slides.length
	console.log(currentSlide);
	// Mise a jour de l'image via les assets
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	// Mise a jour du code HTML via le tagLine au lieu de innerText qui lui modifie le text d'une balise
	tagLine.innerHTML = slides[currentSlide].tagLine;
	updateDot();
}
function updateDot() {
	//Récupération du dot selected
	const selected = document.querySelector('.dot_selected');
	// retirer la class a ce dots
	selected.classList.remove('dot_selected');
	// Ajouté dot_select au dots actuel
	dotsNbr[currentSlide].classList.add('dot_selected');
}