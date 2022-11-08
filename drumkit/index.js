var nofb=document.querySelectorAll(".drum").length;
for(var i=0;i<nofb;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnc=this.innerHTML;
        makeSound(btnc);
        

    });
}
document.addEventListener("keydown",function(event){
   makeSound(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/sound-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/sound-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/sound-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/sound-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/sound-5.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/sound-6.mp3");
            audio.play();
            break;
        case "l" :
            var audio = new Audio("sounds/sound-7.mp3");
            audio.play();
            break;

    }

}
