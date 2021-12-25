function fillHome(){
  var x = document.getElementById("header1");
  var y = document.getElementById("header2");
  var z = document.getElementById("header3");
  var g = document.getElementById("header4");
  x.style.background = "#3398D4";
  y.style.background = "none";
  z.style.background = "none";
  g.style.background = "none";
}
function fillChuDe(){
  var x = document.getElementById("header1");
  var y = document.getElementById("header2");
  var z = document.getElementById("header3");
  var g = document.getElementById("header4");
  x.style.background = "none";
  y.style.background = "#3398D4";
  z.style.background = "none";
  g.style.background = "none";
}
function fillNoiBat(){
  var x = document.getElementById("header1");
  var y = document.getElementById("header2");
  var z = document.getElementById("header3");
  var g = document.getElementById("header4");
  x.style.background = "none";
  y.style.background = "none";
  z.style.background = "#3398D4";
  g.style.background = "none";
}
function fillEBook(){
  var x = document.getElementById("header1");
  var y = document.getElementById("header2");
  var z = document.getElementById("header3");
  var g = document.getElementById("header4");
  x.style.background = "none";
  y.style.background = "none";
  z.style.background = "none";
  g.style.background = "#3398D4";
}
var notify = document.getElementById("notify");
var user = document.getElementById("user");



function displaySearch(){
  user.style.display = "none"
  notify.style.display = "none";
  var x = document.getElementById("heading");
  var y = document.getElementById("search-container");
  x.style.display = "none";
  y.style.display = "block"
}
function displayHeading(){
  var x = document.getElementById("heading");
  var y = document.getElementById("search-container");
  x.style.display = "flex";
  y.style.display = "none";
  
}

function displayNotify() {
  user.style.display = "none"
    if (notify.style.display == "none") {
      notify.style.display = "block";
    } 
    else
    {
      notify.style.display = "none";
    }
  }
  function displayUser() {
    notify.style.display = "none";
    if (user.style.display == "none") 
    {
      user.style.display = "block";
    } 
    else
    {
      user.style.display = "none";
    }
  }

  function AllNotify(){
    var x = document.getElementById("AllNotify");
    var y = document.getElementById("NotRead");
    var z = document.getElementsByClassName("readed");
    for(var i = 0; i < z.length; i++) {
        z[i].style.display = "flex";
    }
    x.style.background= "black";
    x.style.color = "white";
    y.style.background = "white";
    y.style.color = "black";
  }
  function NotRead(){
    var y = document.getElementById("AllNotify");
    var x = document.getElementById("NotRead");
    var z = document.getElementsByClassName("readed");
    for(var i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    x.style.background= "black";
    x.style.color = "white";
    y.style.background = "white";
    y.style.color = "black";
  }

  function loadHome() {
    $(document).ready(function(){
    $('#content').load("home.html");
  });
  }
  
  function loadChuDe() {
    $(document).ready(function(){
    $('#content').load("chu-de.html");
  });
  }
  
  function loadNoiBat() {
    $(document).ready(function(){
    $('#content').load("soinoi.html");
  });
  }

