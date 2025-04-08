var gameIsActive = false;
var userClickedPattern = [];
var gamePattern = [];
var curr_index = 0,curr_level = 1,prev_length = 0;
var buttonColors = ["red", "blue", "green", "yellow"];
$(document).keypress(function(event){
    if(gameIsActive){
        return;
    }
    gameIsActive = true;
    var num =1;
    startGame();

})
$(".btn").click(function(){

    var pressedColor = $(this).attr("class").split(" ")[1];
    $(".btn." + pressedColor).fadeOut(100).fadeIn(100);
    userClickedPattern.push(pressedColor);
    if(pressedColor != gamePattern[curr_index]){
        wrongButton();
        gameIsActive = false;
        curr_index = 0;
        curr_level = 1;
        return;
    }
    curr_index++;
    console.log(curr_index);
    if(curr_index == gamePattern.length){
        curr_level++;
        $("h1").text("Level " + curr_level);
        setTimeout(function(){
            genRandomColor();
        }, 1000);
    }
    
})
function genRandomColor(){
    var n = Math.floor(Math.random() * 4);
    $(".btn." + buttonColors[n]).fadeOut(100).fadeIn(100);
    var audio =  new Audio("sounds/" + buttonColors[n] + ".mp3");
    audio.play();
    gamePattern.push(buttonColors[n]);
    curr_index = 0;
    console.log(gamePattern);
}
function wrongButton(){
    $("h1").text("Game Over, Press Any Key to Restart");$("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
}
function startGame(){
    $("h1").text("Level " + curr_level);
    genRandomColor();
}
