$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const number = parseInt($("input#number").val());
    const beverage = $("select#beverage").val();
    const color = $("select#color").val();
    const celeb = $("input:radio[name=celebrity]:checked").val();
    const animal = $("input:radio[name=animal]:checked").val();

    $("#hide-quiz").hide();

    if (beverage === "Coffee") {
      $("#java").slideDown();
      $("#reset").slideDown();
    } else if (beverage === "Red Bull") {
      $("#ruby").slideDown();
      $("#reset").slideDown();
    } else if (beverage === "Beer") {
      $("#python").slideDown();
      $("#reset").slideDown();
    } else {
      $("#invalid").slideDown();
    }
    $("#reset-quiz").click(function() {
      $("#hide-quiz").slideDown();
      $("#reset").fadeOut();
      $("#ruby").fadeOut();
      $("#java").fadeOut();
      $("#python").fadeOut();
    });
    });
  });