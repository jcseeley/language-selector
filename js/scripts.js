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
      $(celeb).slideDown();
      $(animal).slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
      $("body").addClass(color);
    } else if (beverage === "Red Bull") {
      $("#ruby").slideDown();
      $(celeb).slideDown();
      $(animal).slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
      $("body").addClass(color);
    } else if (beverage === "Beer") {
      $("#python").slideDown();
      $(celeb).slideDown();
      $(animal).slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
      $("body").addClass(color);
    } else if (beverage === "Soda") {
      $("#rust").slideDown();
      $(celeb).slideDown();
      $(animal).slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Rust ain't one!");
      $("body").addClass(color);
    } else if (beverage === "Water") {
      $("#swift").slideDown();
      $(celeb).slideDown();
      $(animal).slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Swift ain't one!");
      $("body").addClass(color);
    } else {
      $("#invalid").slideDown();
      $("#reset").slideDown();
    }
    
    $("#reset-quiz").click(function() {
      $("#hide-quiz").slideDown();
      $("#reset").fadeOut();
      $("#invalid").fadeOut();
      $("#ruby").fadeOut();
      $("#java").fadeOut();
      $("#python").fadeOut();
      $(celeb).fadeOut();
      $(animal).fadeOut();
      $("#text").fadeOut();
    });
  });
});