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

    if ((beverage === "Coffee") && (celeb === "Snoop") && (animal === "coon")) {
      $("#java").slideDown();
      $("#snoop").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "Snoop") && (animal === "bun")) {
      $("#java").slideDown();
      $("#snoop").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "Snoop") && (animal === "squirrel")) {
      $("#java").slideDown();
      $("#snoop").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "Snoop") && (animal === "gorilla")) {
      $("#java").slideDown();
      $("#snoop").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Matt") && (animal === "coon")) {
      $("#java").slideDown();
      $("#matthew").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "Matt") && (animal === "bun")) {
      $("#java").slideDown();
      $("#matthew").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "Matt") && (animal === "squirrel")) {
      $("#java").slideDown();
      $("#matthew").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "Matt") && (animal === "gorilla")) {
      $("#java").slideDown();
      $("#matthew").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "LeBron")) {
      $("#java").slideDown();
      $("#lebron").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "John")) {
      $("#java").slideDown();
      $("#john").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Snoop")) {
      $("#ruby").slideDown();
      $("#snoop").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Matt")) {
      $("#ruby").slideDown();
      $("#matthew").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "LeBron")) {
      $("#ruby").slideDown();
      $("#lebron").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "John")) {
      $("#ruby").slideDown();
      $("#john").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Beer") && (celeb === "Snoop")) {
      $("#python").slideDown();
      $("#snoop").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Beer") && (celeb === "Matt")) {
      $("#python").slideDown();
      $("#matthew").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Beer") && (celeb === "LeBron")) {
      $("#python").slideDown();
      $("#lebron").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Beer") && (celeb === "John")) {
      $("#python").slideDown();
      $("#john").slideDown();
      $("#reset").slideDown();
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
      $("#snoop").fadeOut();
      $("#matthew").fadeOut();
      $("#lebron").fadeOut();
      $("#john").fadeOut();
      $("#racc").fadeOut();
      $("#bunn").fadeOut();
      $("#squir").fadeOut();
      $("#gorill").fadeOut();
    });
    });
  });