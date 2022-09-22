// var P1Button = document.querySelector("#p1");
// var P2Button = document.querySelector("#p2");
// var P1Span = document.querySelector("#p1Display");
// var P2Span = document.querySelector("#p2Display");
// var noPlaysDisplay = document.querySelector("#playsDisplay");
// var PlaysInput = document.querySelector("#playsInput");

// var ResetButton = document.querySelector("#reset");
// var p1Score = 0;
// var p2Score = 0;
// var noOfPlays = 5;

var P1 = document.querySelector("#P1")
var P2 = document.querySelector("#P2")

var score1 = document.querySelector("#score1")
var score2 = document.querySelector("#score2")

var max_score = document.querySelector("#max_score")
var input = document.querySelector("#input")

var reset = document.querySelector("#reset")
var p1Score = 0
var p2Score = 0
var pt = 0

input.addEventListener("change", function(){
    max_score.textContent = input.value
    pt = Number(input.value)
    resetFunc()
})

P1.addEventListener("click", function(){
    if(p2Score === pt) {
        p1Score += 0
        }
    if (p1Score !== pt && p2Score !== pt) {
        p1Score ++
        score1.textContent = p1Score
        // if(p1Score === pt){
        //     score1.classList.add()
        // }
    }
    else if (p2Score === pt || p1Score === pt) {
        alert("GAME OVER")
    }
})

P2.addEventListener("click", function(){
    if(p1Score === pt) {
        p2Score += 0
        }
    if (p2Score !== pt && p1Score !== pt) {
        p2Score ++
        score2.textContent = p2Score
        // if(p2Score === pt){
        //     score1.classList.add()
        // }
    }
    else if (p2Score === pt || p1Score === pt) {
        alert("GAME OVER")
    }
})

reset.addEventListener("click", function(){
    resetFunc()
})

function resetFunc(){
    // if (p1Score === pt) {
    //     score1.classList.toggle()
    // } else if (p2Score === pt) {
    //     score2.classList.toggle()
    // }
    p1Score = 0
    p2Score = 0
    score1.textContent = p1Score
    score2.textContent = p2Score
}