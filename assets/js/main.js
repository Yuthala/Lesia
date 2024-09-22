
window.addEventListener('DOMContentLoaded', function() {
	'use strict';

// Переменные
	/*переменная для scroll up*/
	let btn = document.getElementById('toTop'),
		headerNav = document.getElementById('header-nav');

	/*переменные для offcanvas*/
	const offcanvasCartEl = document.getElementById('offcanvasCart'),
		offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl),
		cartOpen = document.getElementById('cart-open'),
		closeCart = document.querySelectorAll('.closecart');

	/*Event Listeners*/
	/*Открываем offcanvas*/
	cartOpen.addEventListener('click', (e) => {
		e.preventDefault();
		offcanvasCart.toggle();
		
	});
	/*Закрываем offcanvas*/
	closeCart.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault;
			offcanvasCart.hide();
			let href = item.dataset.href;
			document.getElementById(href).scrollIntoView();
		});
	});

	/*Скрываем offcanvas после выбора пункта dropdown menu и прокручиваем страницу до выбранного пункта*/
	document.querySelectorAll('.closecart').forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			offcanvasCart.hide();
			// let href = item.href.split('#').pop();//если в index используется href
			const href = item.dataset.href;
			offcanvasCartEl.addEventListener('hidden.bs.offcanvas', () => {
				document.getElementById(href).scrollIntoView();
			});
		});
	});

	//Уменьшаем padding Navbar при скролле вниз на 135px
	window.addEventListener('scroll', function() {
		headerNav.classList.toggle('headernav-scroll', window.scrollY > 135);
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
});