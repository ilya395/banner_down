/*  
function() {
	var popupContainer = document.getElementById('popupContainer');
}
*/
function closeFunction() {
	var closePopup = document.getElementById('popupContainer');
	popupContainer.style.display = 'none';
}
/*  */
function deployContent() {
	var popupContent = document.getElementById('popupContent');
	console.log("popupContent.length");
	popupContent.classList.toggle('show');
/*
	if ((popupContent.style.display === 'none') || (popupContent.style.display === "")) {
		popupContent.style.display = 'block';
		popupContent.classList.toggle('show');
	} else {
		popupContent.style.display = 'none';
	}
*/
}
/*  */
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
	showSlides(slideIndex += 1);
}
function previousSlide() {
	showSlides(slideIndex -= 1);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("popup-container__content-slaid");
	var underlines = document.getElementsByClassName("control-underline__item");
	var numbers = document.getElementsByClassName("control-numbers__list-item");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < underlines.length; i++) {
		underlines[i].className = underlines[i].className.replace("active", "");
	}
	for (i = 0; i < numbers.length; i++) {
		numbers[i].className = numbers[i].className.replace("active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	underlines[slideIndex - 1].className += " active";
	numbers[slideIndex - 1].className += " active";
}