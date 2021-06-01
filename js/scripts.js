$(document).ready(function () {
  $(".clickable").click(function () {
    $("#nirvana-showing").toggle();
    $("#nirvana-hidden").toggle();

    $(".clickable2").click(function () {
      $("#town-showing").toggle();
      $("#town-hidden").toggle();

    });
  });
});