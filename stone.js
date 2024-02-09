let UserScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
    const options =["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
    // rock, Paper ,scissors
}

const drawGame = () => {
    console.log("Game Wa draw")
}

const playGame = (userChoice) => {
   console.log("user choice = ", userChoice);
    // GENERATE COMPUTER CHOICE 
    const compChoice = genComputerChoice ();
    console.log("Comp  choice = ",compChoice );

    if(userChoice === compChoice) {
    drawGame(); 
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