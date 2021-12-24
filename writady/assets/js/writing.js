function myFunction() {
    var x = document.getElementById("icons");
    var y = document.getElementById("input-content");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
        x.style.display = "none"
    }
  }
  function auto_grow(element) {
    element.style.height = "10px";
    element.style.height = (element.scrollHeight)+"px";
}