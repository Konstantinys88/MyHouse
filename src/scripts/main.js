window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".header__wrapper"),
		modalLink = document.querySelectorAll(".modal-link"),
		overlay = document.querySelector(".overlay"),
		modal = document.querySelector(".modal"),
		modalClose = document.querySelector(".modal__close"),
		// body = document.querySelector("body"),
		hamburger = document.querySelector(".hamburger"),
		form = document.querySelector(".feed-form"),
		contactsBtn = document.querySelectorAll(".contacts__btn"),
		contactsFormEnd = document.querySelector(".form__end");
		
	
	contactsBtn.forEach(item => {
		item.addEventListener("click", (e) => {
			e.preventDefault();
			form.style.display = "none";
			contactsFormEnd.style.display = "block";
		})
	})
	

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

//Отправка формы на почту

$(document).ready(function() {

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: { 
					required: true,
					minlength: 2,
				},
				phone: "required",
				email: {
					required: true,
					email: true,
				},
				checkbox: "required",
			},
			messages: {
				name: {
					required: "Пожалуйста введите Ваше имя.",
					minlength: jQuery.validator.format("Введите больше {0} символов!")
				},
				phone: "Пожалуйста введите ваш номер телефон",
				email: {
					required: "Пожалуйста введите ваш email",
					email: "Не верно введен адрес",
				},
				checkbox: {
					required: "Чтобы продолжить, установите этот флажок",
				}
			},
		});
	}
	validateForms(".feed-form");
	validateForms(".feed-form-modal");

	$("input[name=phone]").mask("+7 (999) 999-99-99");

	$("form").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			// $(this).find("input").val("");
			$(this).find(".contacts__form_input").val("");
    
			$("form").trigger("reset");
		});
		return false;
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 600) {
			$(".pageup").fadeIn();
		} else {
			$(".pageup").fadeOut();
		}
	});
});



