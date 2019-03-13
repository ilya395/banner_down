/* достаем popup из-за нижней границы */
window.onscroll = function() {	
	var specBlock = document.getElementById('specBlock');
	var coords = specBlock.getBoundingClientRect();
	var windowHeight = document.documentElement.clientHeight;
	if (coords.top < 0) {
		var popupWrap = document.getElementById('popupContainer');
		popupWrap.classList.add('show');
	}
}
/* закрываем popup */
function closeFunction() {
	var closePopup = document.getElementById('popupContainer');
	console.log(closePopup.length);
	closePopup.style.display = 'none';
}
/* достаем всплывающий контент */
function deployContent() {
	var popupContent = document.getElementById('popupContent');
	console.log("popupContent.length");
	popupContent.classList.toggle('show');
}
/* 2 типа состояний во всплывающем контенте */
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