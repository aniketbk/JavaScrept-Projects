'use strice'

let NewGame = document.getElementById("NewGame");
let DiceImg = document.getElementById("DiceImg");
let RollDice = document.getElementById("RollDice");
let Hold = document.getElementById("Hold");

let player1dice = document.getElementById("player1dice");
let Player1balance = document.getElementById("Player1balance");
let player2dice = document.getElementById("player2dice");
let Player2balance = document.getElementById("Player2balance");

let side = "left";
DiceImg.style.display = "none";

NewGame.addEventListener("click", function()
{
    player1dice.textContent = "0";
    player2dice.textContent = "0";
    Player1balance.textContent = "0";
    Player2balance.textContent = "0";
    side = "left";
    document.querySelector(".left").classList.add("sideLeft");
    document.querySelector(".right").classList.remove("sideRight");
    DiceImg.style.display = "none";
});
RollDice.addEventListener("click", function()
{
    DiceImg.style.display = "block";
    let num = Math.trunc(Math.random() * 6) + 1;
    DiceImg.src = `./images/dice-${num}.png`;
    if(num !== 1)
    {
        if(side === "left")
        {
            player1dice.textContent = Number(player1dice.textContent) + num;
        }
        else
        {
            player2dice.textContent = Number(player2dice.textContent) + num;
        }
    }
    else
    {
        if(side == "left")
        {
            player1dice.textContent = "0";
        }
        else
        {
            player2dice.textContent = "0";
        }
        shift();
    }
});
Hold.addEventListener("click", function()
{
    if(side === "left" && player1dice.textContent != 0)
    {
        shift();
    }
    if(side === "right" && player2dice.textContent != 0)
    {
        shift();
    }
});


let newGame = function()
{
    player1dice.textContent = "0";
    player2dice.textContent = "0";
    Player1balance.textContent = "0";
    Player2balance.textContent = "0";
    DiceImg.style.display = "none";
}
let throwDice = function()
{
    DiceImg.style.display = "block";
    let num = Math.trunc(Math.random() * 6) + 1;
    DiceImg.src = `./images/dice-${num}.png`;
    if(num !== 1)
    {
        if(side === "left")
        {
            player1dice.textContent = Number(player1dice.textContent) + num;
        }
        else
        {
            player2dice.textContent = Number(player2dice.textContent) + num;
        }
    }
    else
    {
        if(side == "left")
        {
            side = "right"
            player1dice.textContent = "0";
        }
        else
        {
            side = "left";
            player2dice.textContent = "0";
        }
    }
}
function shift()
{
    if(side == "left")
    {
        Player1balance.textContent = Number(Player1balance.textContent) + Number(player1dice.textContent);
        player1dice.textContent = "0";
        side = "right";
        document.querySelector(".right").classList.toggle("sideRight");
        document.querySelector(".left").classList.toggle("sideLeft");
    }
    else
    {
        Player2balance.textContent = Number(Player2balance.textContent) + Number(player2dice.textContent);
        player2dice.textContent = "0";
        side = "left";
        document.querySelector(".left").classList.toggle("sideLeft");
        document.querySelector(".right").classList.toggle("sideRight");
    }
}




