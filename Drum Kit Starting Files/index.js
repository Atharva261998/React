

//click button
var selectButton=document.querySelectorAll(".drum").length;
for(i=0;i<=selectButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
   var switchButton = this.innerHTML;

   makeSound(switchButton);
   addShadow(switchButton);

   
  })
};

// press key
  document.addEventListener("keypress", function(Event){
    makeSound(Event.key);
    addShadow(Event.key);
  });

  function makeSound(key){

    switch (key) { 
      case "a":
        var crash=new Audio("sounds/crash.mp3")
        crash.play();
        
        break;
        case "w":
          var kick=new Audio("sounds/kick-bass.mp3")
          kick.play();
          break;
        case "d":
          var snare =new Audio("sounds/snare.mp3")  
          snare.play();
          break;
  
        case "s":
          var tom1 =new Audio("sounds/tom-1.mp3")
          tom1.play();  
          break;
  
          case "k":
            var tom2 =new Audio("sounds/tom-2.mp3")
            tom2.play();
          break;
          
          case "j":
            var tom3 =new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
  
            case "l":
              var tom4 =new Audio("sounds/tom-4.mp3")
              tom4.play();
              brrak;
      
        default:console.log(switchButton);
       

  }
}makeSound(key);

function addShadow(currentKey){
  var shadow=document.querySelector("." + currentKey);
  shadow.classList.add("pressed");
  setTimeout(function(){
    shadow.classList.remove("pressed");
  },100);


}

// }
// //"event" is tap into the event that triggers event listners
// document.addEventListener("keypress",function(){
//   alert("key was pressed")
// })


// //this. is the identity that trigger the event by tapping on the button
// //var audio =new Audio("sounds/crash.mp3")
// //audio.play();

// // document.addEventListener("keypress",function(event){
// //   console.log(event);
// // })
// function clickW(drumkit){
//   this.drumkit=drumkit;
//   this.smash= function(){
//     alert("w is smashed");
//   }

// }

// var clickW1= new clickW("good drumkit")
// clickW1.smash();

