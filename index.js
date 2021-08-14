// Click Event Listener
for (i = 0; i <= 6; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function()
  {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// Keyboard EventListener

document.addEventListener("keypress", function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});


// Switch Statement as Function MakeSound
function buttonAnimation(currentKey){
  var btnAnimation= document.querySelector("."+currentKey);
  btnAnimation.classList.add("pressed");
  setTimeout(function(){
    btnAnimation.classList.remove("pressed");
  },100);
}

function makeSound(key)
{
  switch (key)
  {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    case "l":
      var tom7 = new Audio("sounds/snare.mp3");
      tom7.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}
