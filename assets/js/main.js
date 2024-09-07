window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	window.addEventListener('scroll', function() {
		document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 135);
	});
}) 