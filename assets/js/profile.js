var x = document.getElementById("underline1");
var y = document.getElementById("underline2");
var z = document.getElementById("underline3");
var g = document.getElementById("contentex");

var a = document.getElementById("underline4");
var b = document.getElementById("underline5");
var c = document.getElementById("underline6");
var d = document.getElementById("content");


var e = document.getElementById("underline7");
var h = document.getElementById("underline8");
function loadBaiviet() {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    g.style.marginLeft = "2rem"
    g.style.marginRight = "0";
    $(document).ready(function(){
    $('#content').load("./baiviet/baiviet.html");
  });
  }
  function loadDaLuu() {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    g.style.marginLeft = "2rem"
    g.style.marginRight = "0";
    $(document).ready(function(){
    $('#content').load("./daluu/daluu.html");
  });
  }
  function loadBanNhap() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    g.style.marginLeft = "2rem"
    g.style.marginRight = "0";
    $(document).ready(function(){
    $('#content').load("ban-nhap.html");
  });
  }
  
  function loadBaivietTatca() {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    g.style.marginLeft = "2rem"
    g.style.marginRight = "0";
    $(document).ready(function(){
    $('#contentex').load("../baiviet/kid/tatca.html");
  });
  }
  
  function loadBaivietChuyenmuc() {
    y.style.display = "block";
    x.style.display = "none";
    z.style.display = "none";
    g.style.marginLeft = "0"
    g.style.marginRight = "1rem";
    $(document).ready(function(){
    $('#contentex').load("../baiviet/kid/chuyenmuc.html");
  });
  }
  
  function loadBaivietSoinoi() {
    z.style.display = "block";
    y.style.display = "none";
    x.style.display = "none";
    g.style.marginLeft = "2rem"
    g.style.marginRight = "0";
    $(document).ready(function(){
    $('#contentex').load("../baiviet/kid/tatca.html");
  });
  }
  
  function loadDaluu() {
    g.style.marginLeft = "2rem"
    g.style.marginRight = "0";
    $(document).ready(function(){
    $('#content').load("../daluu/daluu.html");
  });
  }
  
  function loadDaluuTatca() {
    e.style.display = "block";
    h.style.display = "none";
    g.style.marginLeft = "2rem"
    g.style.marginRight = "0";
    $(document).ready(function(){
    $('#contentex').load("../daluu/kid/tatca1.html");
  });
  }
  
  function loadDaluuBosuutap() {
    e.style.display = "none";
    h.style.display = "block";
    g.style.marginLeft = "0"
    g.style.marginRight = "1rem";
    $(document).ready(function(){
    $('#contentex').load("../daluu/kid/bosuutap.html");
  });
}
