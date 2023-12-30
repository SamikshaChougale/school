

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
    navLinks.style.right = "-200px";
  }

/*--Pop up function for media--*/
// Function to open the popup with the selected image
function openPopup(imageSrc) {
  document.getElementById("popupImg").src = imageSrc;
  document.getElementById("popup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Add event listeners to all "Explore" buttons
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function(event) {
      event.preventDefault();
      const imageSrc = this.getAttribute("data-image");
      openPopup(imageSrc);
  });
});





