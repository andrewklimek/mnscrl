/**
* finds all links on the page which start with # and sets up smooth scrolling for them
* use an href of just "#" for "sroll to top" functionality
*/
function onPageLinkScroll(e){
	var target = 0;
	if ( this.hash ) {// href="#" has empty hash so target stays 0 (top of page)
		target = document.querySelector(this.hash).offsetTop;
	}
	mnscrl(target);
	e.preventDefault();
}
for ( var a = document.querySelectorAll('a[href^="#"]'), i=0; i<a.length; ++i ) {
	a[i].addEventListener('click', onPageLinkScroll );
}