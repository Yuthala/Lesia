
window.addEventListener('DOMContentLoaded', function() {
	'use strict';


/*переменная для scroll up*/
let btn = document.getElementById('toTop');

	//Уменьшаем padding Navbar при скролле вниз на 135px
	window.addEventListener('scroll', function() {
		document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 135);
	});


	/*Scroll up*/
	window.addEventListener('scroll', function () {
        // Если прокрутили дальше 400px, показываем кнопку
        if (scrollY > 400) {
            btn.classList.add('show');
            // Иначе прячем
        } else {
            btn.classList.remove('show');
        }
    });

    // При клике прокручиваем на самый верх
	btn.addEventListener('click', function(click) {
		click.preventDefault();
		window.scrollTo({
			top: 0, //scroll to the top of the page, edit if necessary
			behavior: "smooth"
		});
	});
}) 