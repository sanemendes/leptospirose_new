// DESKTOP

// Ajustar a altura da página quando for menor que a sidebar

// $(document).ready( function () {

(function () {
	let sidebarHeight = document.getElementsByClassName('sidebar');
	let contentHeight = document.getElementsByClassName('content');
	let headerHeight = document.getElementsByTagName('header');
	let footerHeight = document.getElementsByTagName('footer');
	let sectionsToDiscount = headerHeight[0].offsetHeight + footerHeight[0].offsetHeight;
	// const sidebarHeight = $(".sidebar").height()
	// const contentHeight = $(".content").height()
	// const sectionsToDiscount = ($(".header").height() + 2 * $("footer").height())

	// console.log(sidebarHeight[0].offsetHeight)
	// console.log(contentHeight[0].offsetHeight)
	// console.log(sectionsToDiscount)

	if (sidebarHeight[0].offsetHeight > contentHeight[0].offsetHeight) {
		//

		let pageContent = document.getElementById('page-content');
		pageContent.style.minHeight = sidebarHeight[0].offsetHeight - sectionsToDiscount + 'px';
		//($(".sidebar").height() - ($(".header").height() + 2 * $("footer").height()))
	}
})();

// MOBILE

var sidebarBtn = document.getElementById('sidebar-toggle');
var content = document.querySelector('.content');
var sidebarMobile = document.querySelector('.sidebar');
var btn = document.querySelector('.btn');

function touchControl(event, obj) {
	if (event == true) {
		obj.style.touchAction = 'auto';
	}
}

sidebarBtn.addEventListener('click', function () {
	if (sidebarMobile.classList.contains('sidebar--open')) {
		// closing
		sidebarMobile.classList.remove('sidebar--open');
		sidebarMobile.classList.add('sidebar--close');

		sidebarBtn.classList.remove('sidebar-toggle--open');
		sidebarBtn.classList.add('sidebar-toggle--close');
		// sidebarBtn.css('background-color', '#3c7d1b');

		btn.classList.toggle('active');
		btn.classList.toggle('not-active');

		content.classList.remove('touch-disable');
		content.classList.add('touch-enable');
	} else {
		// opening
		sidebarMobile.classList.remove('sidebar--close');
		sidebarMobile.classList.add('sidebar--open');

		sidebarBtn.classList.remove('sidebar-toggle--close');
		sidebarBtn.classList.add('sidebar-toggle--open');
		// sidebarBtn.css('background-color', '#917434');

		btn.classList.toggle('active');
		btn.classList.toggle('not-active');

		content.classList.remove('touch-enable');
		content.classList.add('touch-disable');
	}
});

// if ($(window).width() < 768) {
// }
