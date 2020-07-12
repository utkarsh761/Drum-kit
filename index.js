var btns = document.querySelectorAll(".drum")
for(var i=0;i<btns.length;i++)
{
btns[i].addEventListener("click",function(){
playSound(this.innerHTML);
activeBtn(this.innerHTML);

})
}
document.addEventListener("keydown",function(event){

playSound(event.key);
activeBtn(event.key);

})
function playSound(key){

  switch(key)
  {
  case "w":
  var tom1= new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;
  case "a":
  var tom2= new Audio("sounds/tom-2.mp3");
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
  var snare=new Audio("sounds/snare.mp3");
  snare.play();
  break;
  case "k":
  var crash = new Audio( "sounds/crash.mp3");
  crash.play();
  break;
  case "l":
  var kickbass = new Audio("sounds/kick-bass.mp3");
  kickbass.play();
  break;
  default:
  console.log("try refreshing the page sucker");

  }
}
function activeBtn(currentKey)
{
  var currentClass = document.querySelector("."+currentKey);
  currentClass.classList.add("pressed");
  setTimeout(function(){
    currentClass.classList.remove("pressed");
  },100)
}
