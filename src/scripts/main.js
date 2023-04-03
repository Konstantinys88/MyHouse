window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".header__wrapper"),
		hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		menu.classList.toggle("header__wrapper_active");
	});
});
