document.getElementById("tab1").onmouseover = function() { hoverFunction('tab1') }
document.getElementById("tab2").onmouseover = function() { hoverFunction('tab2') }
document.getElementById("tab3").onmouseover = function() { hoverFunction('tab3') }
document.getElementById("tab4").onmouseover = function() { hoverFunction('tab4') }

document.getElementById("tab1").onmouseout = function() { hoverOut('tab1') }
document.getElementById("tab2").onmouseout = function() { hoverOut('tab2') }
document.getElementById("tab3").onmouseout = function() { hoverOut('tab3') }
document.getElementById("tab4").onmouseout = function() { hoverOut('tab4') }
function hoverFunction(x){
  var temp = document.getElementById(x);
  event.target.classList.add("taba");
}

function hoverOut(x){
  var temp = document.getElementById(x);
  event.target.classList.remove("taba");
}
