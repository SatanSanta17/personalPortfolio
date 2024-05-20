$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    // if (scroll > 50) {
    //   $(".navBar").css("background", "white");
    //   $(".nav-link").css("color", "black");
    // } else {
    //   $(".navBar").css("background", "transparent");
    //   $(".nav-link").css("color", "white");
    // }
    if (scroll < 50) {
      $(".navBar").css("background", "transparent");
    } else {
      $(".navBar").css("background", "white");
    }
  });
});
