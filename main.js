var mainNav = document.getElementById("mainNav");
var logoImage = document.getElementById("logoImage");

/*
window.addEventListener("scroll", function( ) {
    const logoImage = document.getElementById
    ("logoImage");
   
    const mainNav = document.getElementById
    ("mainNav");

    if (window.pageyOffset > 100) {
        console.log(window.pageYOffset);
        
        logoImage.style.height = "64px";
        mainNav.classList.add("bg-black");
        mainNav.classList.add("txt-white");
        
    } else {
        logoImage.style.height = "84px";
        mainNav.classList.remove("bg-black");
        mainNav.classList.remove("txt-white");
    }
});

*/
window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     mainNav.style.height = "60px";
     
     logoImage.style.height = "50px";
    } else {
     mainNav.style.height = "100px";
     logoImage.style.width = "auto";
     logoImage.style.height = "84px";
    }
  }
