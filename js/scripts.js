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
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "Snoop") && (animal === "bun")) {
      $("#java").slideDown();
      $("#snoop").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "Snoop") && (animal === "squirrel")) {
      $("#java").slideDown();
      $("#snoop").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "Snoop") && (animal === "gorilla")) {
      $("#java").slideDown();
      $("#snoop").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "Matt") && (animal === "coon")) {
      $("#java").slideDown();
      $("#matthew").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "Matt") && (animal === "bun")) {
      $("#java").slideDown();
      $("#matthew").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "Matt") && (animal === "squirrel")) {
      $("#java").slideDown();
      $("#matthew").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "Matt") && (animal === "gorilla")) {
      $("#java").slideDown();
      $("#matthew").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "LeBron") && (animal === "coon")) {
      $("#java").slideDown();
      $("#lebron").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "LeBron") && (animal === "bun")) {
      $("#java").slideDown();
      $("#lebron").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "LeBron") && (animal === "squirrel")) {
      $("#java").slideDown();
      $("#lebron").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "LeBron") && (animal === "gorilla")) {
      $("#java").slideDown();
      $("#lebron").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "John") && (animal === "coon")) {
      $("#java").slideDown();
      $("#john").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "John") && (animal === "bun")) {
      $("#java").slideDown();
      $("#john").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "John") && (animal === "squirrel")) {
      $("#java").slideDown();
      $("#john").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Coffee") && (celeb === "John") && (animal === "gorilla")) {
      $("#java").slideDown();
      $("#john").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and JavaScript ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "Snoop") && (animal === "coon")) {
      $("#ruby").slideDown();
      $("#snoop").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "Snoop") && (animal === "bun")) {
      $("#ruby").slideDown();
      $("#snoop").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "Snoop") && (animal === "squirrel")) {
      $("#ruby").slideDown();
      $("#snoop").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "Snoop") && (animal === "gorilla")) {
      $("#ruby").slideDown();
      $("#snoop").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "Matt") && (animal === "coon")) {
      $("#ruby").slideDown();
      $("#matthew").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "Matt") && (animal === "bun")) {
      $("#ruby").slideDown();
      $("#matthew").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "Matt") && (animal === "squirrel")) {
      $("#ruby").slideDown();
      $("#matthew").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "Matt") && (animal === "gorilla")) {
      $("#ruby").slideDown();
      $("#matthew").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "LeBron") && (animal === "coon")) {
      $("#ruby").slideDown();
      $("#lebron").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "LeBron") && (animal === "bun")) {
      $("#ruby").slideDown();
      $("#lebron").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "LeBron") && (animal === "squirrel")) {
      $("#ruby").slideDown();
      $("#lebron").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "LeBron") && (animal === "gorilla")) {
      $("#ruby").slideDown();
      $("#lebron").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "John") && (animal === "coon")) {
      $("#ruby").slideDown();
      $("#john").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "John") && (animal === "bun")) {
      $("#ruby").slideDown();
      $("#john").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "John") && (animal === "squirrel")) {
      $("#ruby").slideDown();
      $("#john").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Red Bull") && (celeb === "John") && (animal === "gorilla")) {
      $("#ruby").slideDown();
      $("#john").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Ruby ain't one!");
    } else if ((beverage === "Beer") && (celeb === "Snoop") && (animal === "coon")) {
      $("#python").slideDown();
      $("#snoop").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "Snoop") && (animal === "bun")) {
      $("#python").slideDown();
      $("#snoop").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "Snoop") && (animal === "squirrel")) {
      $("#python").slideDown();
      $("#snoop").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "Snoop") && (animal === "gorilla")) {
      $("#python").slideDown();
      $("#snoop").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "Matt") && (animal === "coon")) {
      $("#python").slideDown();
      $("#matthew").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "Matt") && (animal === "bun")) {
      $("#python").slideDown();
      $("#matthew").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "Matt") && (animal === "squirrel")) {
      $("#python").slideDown();
      $("#matthew").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "Matt") && (animal === "gorilla")) {
      $("#python").slideDown();
      $("#matthew").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "LeBron") && (animal === "coon")) {
      $("#python").slideDown();
      $("#lebron").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "LeBron") && (animal === "bun")) {
      $("#python").slideDown();
      $("#lebron").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "LeBron") && (animal === "squirrel")) {
      $("#python").slideDown();
      $("#lebron").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "LeBron") && (animal === "gorilla")) {
      $("#python").slideDown();
      $("#lebron").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "John") && (animal === "coon")) {
      $("#python").slideDown();
      $("#john").slideDown();
      $("#racc").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "John") && (animal === "bun")) {
      $("#python").slideDown();
      $("#john").slideDown();
      $("#bunn").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "John") && (animal === "squirrel")) {
      $("#python").slideDown();
      $("#john").slideDown();
      $("#squir").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
    } else if ((beverage === "Beer") && (celeb === "John") && (animal === "gorilla")) {
      $("#python").slideDown();
      $("#john").slideDown();
      $("#gorill").slideDown();
      $("#reset").slideDown();
      $("#output").text(name + ", you've got " + number + " problems and Python ain't one!");
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
      $("#text").fadeOut();
    });
  });
});