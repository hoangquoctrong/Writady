var x = document.getElementById("underline1");
var y = document.getElementById("underline2");
var z = document.getElementById("underline3");
var g = document.getElementById("contentex");

function loadBaiviet() {
    $(document).ready(function(){
    $('#content').load("./baiviet/baiviet.html");
  });
  }
  
  function loadBaivietTatca() {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    g.style.marginLeft = "2rem"
    g.style.marginRight = "0";
    $(document).ready(function(){
    $('#contentex').load("./baiviet/kid/tatca.html");
  });
  }
  
  function loadBaivietChuyenmuc() {
    y.style.display = "block";
    x.style.display = "none";
    z.style.display = "none";
    g.style.marginLeft = "0"
    g.style.marginRight = "1rem";
    $(document).ready(function(){
    $('#contentex').load("./baiviet/kid/chuyenmuc.html");
  });
  }
  
  function loadBaivietSoinoi() {
    z.style.display = "block";
    y.style.display = "none";
    x.style.display = "none";
    g.style.marginLeft = "2rem"
    g.style.marginRight = "0";
    $(document).ready(function(){
    $('#contentex').load("./baiviet/kid/soinoi.html");
  });
  }
  
  function loadDaluu() {
    $(document).ready(function(){
    $('#content').load("./daluu/daluu.html");
  });
  }
  
  function loadDaluuTatca() {
    $(document).ready(function(){
    $('#contentex').load("./daluu/kid/tatca1.html");
  });
  }
  
  function loadDaluuBosuutap() {
    $(document).ready(function(){
    $('#contentex').load("./daluu/kid/bosuutap.html");
  });
}
  
  function loadBannhap() {
    $(document).ready(function(){
    $('#content').load("bannhap.html");
  });
}