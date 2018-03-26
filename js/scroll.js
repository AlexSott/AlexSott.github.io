window.onscroll = function() {
	scrollFunction();
	// this.console.log('test');
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 800) {
		document.getElementById("scrollBtn").style.display = "block";
	} else {
		document.getElementById("scrollBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
$('html, body').animate({scrollTop: 0}, 3000);