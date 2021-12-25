
 var x = document.getElementById("nguoi-dung");
 var y = document.getElementById("soi-noi");
 var z = document.getElementById("hang-dau");


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

function nguoidungClick(){
    x.style.color = "white";
    x.style.background = "black"
    y.style.color = "black";
    y.style.background = "white"
    z.style.color = "black";
    z.style.background = "white"
    loadNguoiDung();
}
function soinoiClick(){
    y.style.color = "white";
    y.style.background = "black"
    x.style.color = "black";
    x.style.background = "white"
    z.style.color = "black";
    z.style.background = "white"
    loadSoiNoi();
}
function hangdauClick(){
    z.style.color = "white";
    z.style.background = "black"
    y.style.color = "black";
    y.style.background = "white"
    x.style.color = "black";
    x.style.background = "white"
    loadSoiNoi();
}
