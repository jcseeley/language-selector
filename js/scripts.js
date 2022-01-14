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
    } else if ((beverage === "Coffee") && (celeb === "LeBron") && (animal === "coon")) {
      $("#java").slideDown();
      $("#lebron").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "LeBron") && (animal === "bun")) {
      $("#java").slideDown();
      $("#lebron").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "LeBron") && (animal === "squirrel")) {
      $("#java").slideDown();
      $("#lebron").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "LeBron") && (animal === "gorilla")) {
      $("#java").slideDown();
      $("#lebron").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "John") && (animal === "coon")) {
      $("#java").slideDown();
      $("#john").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "John") && (animal === "bun")) {
      $("#java").slideDown();
      $("#john").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "John") && (animal === "squirrel")) {
      $("#java").slideDown();
      $("#john").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "John") && (animal === "gorilla")) {
      $("#java").slideDown();
      $("#john").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Snoop") && (animal === "coon")) {
      $("#ruby").slideDown();
      $("#snoop").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Snoop") && (animal === "bun")) {
      $("#ruby").slideDown();
      $("#snoop").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Snoop") && (animal === "squirrel")) {
      $("#ruby").slideDown();
      $("#snoop").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Snoop") && (animal === "gorilla")) {
      $("#ruby").slideDown();
      $("#snoop").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Matt") && (animal === "coon")) {
      $("#ruby").slideDown();
      $("#matthew").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Matt") && (animal === "bun")) {
      $("#ruby").slideDown();
      $("#matthew").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Matt") && (animal === "squirrel")) {
      $("#ruby").slideDown();
      $("#matthew").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Red Bull") && (celeb === "Matt") && (animal === "gorilla")) {
      $("#ruby").slideDown();
      $("#matthew").slideDown();
      $("#gorill").slideDown();
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