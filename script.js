document
  .getElementById("show")
  .addEventListener("click", function showDescription(e) {
    var p = document.getElementById("description");
    if (p.style.display === "none") {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
