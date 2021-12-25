function follow(clicked_id) {
    var x = document.getElementById(clicked_id);
    if (x.value == "Theo dõi") {
      x.value = "Đang theo dõi"
      x.style.color = "white";
      x.style.background = "black"
    } else if(x.value == "Đang theo dõi"){
     x.value = "Theo dõi"
     x.style.color = "black";
     x.style.background = "white"
    }
  }