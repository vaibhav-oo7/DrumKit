var numberofdrumbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofdrumbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert("i got clicked");
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(button){
    switch (button) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(button);
            break;
    }
}

function buttonAnimation(currentKey){
    var x = document.querySelector("."+currentKey);
    x.classList.add("pressed");
    setTimeout(function(){
        x.classList.remove("pressed");
    },100);
}

