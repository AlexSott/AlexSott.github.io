window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementsByClassName("header-wraper");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}