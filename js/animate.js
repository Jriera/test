function myMove() {
  var elem = document.getElementById("panel");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
     
    }
  }
}// JavaScript Document