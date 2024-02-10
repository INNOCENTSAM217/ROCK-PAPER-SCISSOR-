let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    const options =["rock","paper","sccissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
    // rock, Paper ,scissors
};

const drawGame = () => {
    // console.log("Game Wa draw")
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor = "#7cacfc";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You WIN ");
        // msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        // msg.style.backgroundColor = "green";
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#f49cb4";
     } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose");
        msg.innerText =`You Lose ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#f083a2c";
     }
};

const playGame = (userChoice) => {
   console.log("user choice = ", userChoice);
    // GENERATE COMPUTER CHOICE 
    const compChoice = genCompChoice ();
    console.log("Comp  choice = ", compChoice );

    if(userChoice === compChoice) {
      drawGame(); 
    } else {
    let userWin = true;
    if(userChoice === "rock") {
        // sccissors ,  paper
        userWin = compChoice === "paper"  ? false :  true;
    } else if (userChoice === "paper" ) {
        // rock , sccissors 
        userWin = compChoice === "sccissors"  ? false :  true;
 
    } else {
        // rock , paper 
        userWin = compChoice === "rock"  ? false :  true;
    }
        showWinner(userWin, userChoice, compChoice);
  }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener ("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" ,userChoices);
        playGame(userChoice);
    })
});