
 var x = document.getElementById("bai-viet");
 var y = document.getElementById("nguoi-dung");
 var z = document.getElementById("tags");
 var g = document.getElementById("chu-de");

function loadSoiNoi() {
    $(document).ready(function(){
    $('#content').load("noi-bat-soi-noi.html");
  });
}
function loadNguoiDung() {
    $(document).ready(function(){
    $('#content').load("noi-bat-nguoi-dung.html");
  });
}
function loadchude() {
    $(document).ready(function(){
    $('#content').load("tim-kiem-chu-de.html");
  });
}

function baivietClick(){
    x.style.color = "white";
    x.style.background = "black"
    y.style.color = "black";
    y.style.background = "white"
    z.style.color = "black";
    z.style.background = "white"
    g.style.color = "black";
    g.style.background = "white"
    loadSoiNoi();
}
function nguoidungClick(){
    y.style.color = "white";
    y.style.background = "black"
    x.style.color = "black";
    x.style.background = "white"
    z.style.color = "black";
    z.style.background = "white"
    g.style.color = "black";
    g.style.background = "white"
    loadNguoiDung();
}
function tagsClick(){
    z.style.color = "white";
    z.style.background = "black"
    y.style.color = "black";
    y.style.background = "white"
    x.style.color = "black";
    x.style.background = "white"
    g.style.color = "black";
    g.style.background = "white"
    loadSoiNoi();
}
function chudeClick(){
    z.style.color = "black";
    z.style.background = "white"
    y.style.color = "black";
    y.style.background = "white"
    x.style.color = "black";
    x.style.background = "white"
    g.style.color = "white";
    g.style.background = "black"
    loadchude();
}

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