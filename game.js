const player = document.getElementById("playerDisplay");
const computer = document.getElementById("computerDisplay");
const result = document.getElementById("resultDisplay");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
let array = ["rock", "paper", "scissor"];
let finalResult;
function randomGenarate() {
    return Math.floor(Math.random() * 3);
}
rockBtn.addEventListener("click", () => {
    finalResult = array[randomGenarate()];
    playerDisplay.innerHTML = "rock";
    computer.innerHTML = finalResult
    switch (finalResult) {
        case "rock":
            result.innerHTML = "Draw!";
            break;
        case "paper":
            result.innerHTML = "Lose!";
            break;
        case "scissor":
            result.innerHTML = "win!";
            break;
        default:
            break;
    }
});
paperBtn.addEventListener("click",()=>{
    finalResult = array[randomGenarate()];
    playerDisplay.innerHTML = "paper";
    computer.innerHTML = finalResult
    switch (finalResult) {
        case "rock":
            result.innerHTML = "Win!";
            break;
        case "paper":
            result.innerHTML = "Draw!";
            break;
        case "scissor":
            result.innerHTML = "Lose!";
            break;
        default:
            break;
    }
});
scissorBtn.addEventListener("click",()=>{
    finalResult = array[randomGenarate()];
    playerDisplay.innerHTML = "scissor";
    computer.innerHTML = finalResult
    switch (finalResult) {
        case "rock":
            result.innerHTML = "Lose!";
            break;
        case "paper":
            result.innerHTML = "Win!";
            break;
        case "scissor":
            result.innerHTML = "Draw!";
            break;
        default:
            break;
    }
});