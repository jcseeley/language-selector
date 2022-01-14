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

    if ((beverage === "Coffee") && (celeb === "Snoop")) {
      $("#java").slideDown();
      $("#snoop").slideDown();
      $("#reset").slideDown();
    } else if ((beverage === "Coffee") && (celeb === "Matt")) {
      $("#java").slideDown();
      $("#matthew").slideDown();
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
    });
    });
  });