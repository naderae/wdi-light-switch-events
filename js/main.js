

var button = document.querySelector(".switch");
var check = document.querySelector(".switch").classList;
var text = document.querySelector(".status");
var bodyColor = document.querySelector(".light");
var body = document.querySelector("body")



button.addEventListener('click', function(event){
  if (check.contains('on')){
    text.innerText = "Who the F*** turned off the lights?";
    check.remove("on");
    check.add("off");
    text.style.color = 'white';
    bodyColor.style.backgroundColor = 'navy';
    body.className = "dark"

  }
  else {
    text.innerText = "It's so bright in here!";
    check.remove("off");
    check.add("on");
    text.style.color = 'black';
    bodyColor.style.backgroundColor = 'white';
    body.className = "light";
  }


});
