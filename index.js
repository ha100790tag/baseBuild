// import carousel from 'bootstrap/js/dist/carousel';
import tab from 'bootstrap/js/dist/tab';
import collapse from 'bootstrap/js/dist/collapse';
import filterPlugin from './src/js/customFilter';
import modal from './src/js/modal';

$(document).ready(() => {
	filterPlugin();
	$('.andrew-button').click(e => e.preventDefault());
	$('#carousel2').slick({
		prevArrow: `<a class="slick-prev andrew-button"></a>`,
		nextArrow: `<div class="slick-next bg-image" style="background-image:url(images/logo.png)"></div>`
	});
});



