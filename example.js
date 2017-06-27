// finds all links on the page which start with # and sets up smooth scrolling for them
for ( var a = document.querySelectorAll('a[href^="#"]'), i=0; i<a.length; ++i ) {
	a[i].addEventListener('click', function(e){
		var target = 0;
		if ( this.hash ) {
			target = document.querySelector(this.hash).offsetTop;
		}
		mnscrl(target);
		e.preventDefault();
	});
}