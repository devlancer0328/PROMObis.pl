var parentDiv = document.querySelector(".avali-colors-slots");
var colors = document.querySelectorAll(".avali-colors-slots .avali-colors-slot");
for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}