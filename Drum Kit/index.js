var drumButtons = document.querySelectorAll(".drum");


for (var i = 0; i < drumButtons.length; i++)
{
    drumButtons[i].addEventListener("click", handleClick);
}
document.addEventListener("keypress",handleKeyPress);

function handleClick()
{
    playSound(this.innerHTML);

}



function handleKeyPress(event)
{ 
    e =event.key
   playSound(e);
}

function playSound(key)
{
      
    switch(key)
    {
        case "w":
            var tom1Audio = new Audio("./sounds/tom-1.mp3");
            tom1Audio.play();
          break;

        case "a":
            var tom2Audio = new Audio("./sounds/tom-2.mp3");
            tom2Audio.play();
            break;

        case "s":
            var tom3Audio = new Audio("./sounds/tom-3.mp3");
            tom3Audio.play();
            break;

        case "d":
            var tom4Audio = new Audio("./sounds/tom-4.mp3");
            tom4Audio.play();
            break;

        case "j":
            var snareAudio = new Audio("./sounds/snare.mp3");
            snareAudio.play();
            break;

        case "k":
            var crashAudio = new Audio("./sounds/crash.mp3");
            crashAudio.play();
            break;

        case "l":
            var kickAudio = new Audio("./sounds/kick-bass.mp3");
            kickAudio.play();
            break;
        default:
        break;
    }
}