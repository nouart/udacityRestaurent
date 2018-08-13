// Get the container element
var list = document.getElementById("mainNav");

// Get all buttons with class="eleNav" inside the container
var elms = list.getElementsByClassName("eleNav");

// Loop through the links (a) and add the active class to the current/clicked link
for (var i = 0; i < elms.length; i++) {
  elms[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";


  });

}
