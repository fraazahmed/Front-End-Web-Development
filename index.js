var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var posts = this.nextElementSibling;
    if (posts.style.display === "block") {
      posts.style.display = "none";
    } else {
      posts.style.display = "block";
    }
  });
}
