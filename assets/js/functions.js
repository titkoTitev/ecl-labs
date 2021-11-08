var navToggle = document.getElementById('navtoggle');

if( !!navToggle ) {
	navToggle.addEventListener('click', toggleNav);
}

function toggleNav(event) {
	var html = document.documentElement;

	if( event.hasOwnProperty('forceHide') ) {
		var forceHide = true;
	}

	if( html.classList.contains('nav-opened') || forceHide ) {
		html.classList.remove('nav-opened');
	} else {
		html.classList.add('nav-opened');
	}
}

if(window.location.hash) {
	scrollToSection(window.location.hash);
}

// document.querySelectorAll(".header .contact-btn").forEach(function (a) {
//     a.addEventListener("click", function (event) {
//         event.preventDefault();
//         const hash = event.target.getAttribute("href");
//         const scrollTarget = document.querySelector(hash);
      
//         // Some additional logic
//         const headerHeight = -40;
//         window.scrollTo(0, scrollTarget.offsetTop - headerHeight);
//     });
// });