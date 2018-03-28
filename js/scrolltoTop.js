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

$('#scrollBtn').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});