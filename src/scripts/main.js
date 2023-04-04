window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".header__wrapper"),
		modalLink = document.querySelectorAll(".modal-link"),
		overlay = document.querySelector(".overlay"),
		modal = document.querySelector(".modal"),
		modalClose = document.querySelector(".modal__close"),
		// body = document.querySelector("body"),
		hamburger = document.querySelector(".hamburger");
		
		

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		menu.classList.toggle("header__wrapper_active");
	});


	[...modalLink].forEach(modalLink => modalLink.addEventListener("click", (e) => {
		overlay.classList.add("overlay_active");
		modal.classList.add("modal_active");
		e.preventDefault();
	}));

	modalClose.addEventListener("click", () => {
		overlay.classList.remove("overlay_active");
		modal.classList.remove("modal_active");
	});

	overlay.addEventListener("click", (e) => {
		if(e.target === overlay) {
			overlay.classList.remove("overlay_active");	
			modal.classList.remove("modal_active");
		}
	});


});



