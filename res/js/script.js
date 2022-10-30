// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     // if (scroll > 50) {
//     //   $(".navBar").css("background", "white");
//     //   $(".nav-link").css("color", "black");
//     // } else {
//     //   $(".navBar").css("background", "transparent");
//     //   $(".nav-link").css("color", "white");
//     // }
//     if (scroll < 50) {
//       $(".navBar").css("background", "transparent");
//     } else {
//       $(".navBar").css("background", "white");
//     }
//   });
// });

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navBar
var navBar = document.getElementById("navBar");

// Get the offset position of the navBar
var sticky = navBar.offsetTop;

// Add the sticky class to the navBar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}
