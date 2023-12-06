

/*-- Initialize Swiper --*/
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  var navLinks = document.getElementById("navLinks");
  function showMenu(){
    navLinks.style.right = "0";
  }
  function hideMenu(){
    navLinks.style.right = "-1000px";
  }