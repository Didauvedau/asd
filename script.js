$(document).ready(function () {
  $(".button").hover(
    function () {
      // over
      $(".p-button").text("hoved button");
    },
    function () {
      $(".p-button").text("click button");
    }
  );
});

