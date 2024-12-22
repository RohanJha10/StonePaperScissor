let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const genCompChoice=()=>
{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];

}
const playGame=(userChoice)=>
{
    const drawGame=()=>
    {
        msg.innerText="Game Draw!Play Again";
        msg.style.backgroundColor="#081b31";
    }
    const showWinner=(userWin,userChoice,compChoice)=>{
        if(userWin)
        {
            userScore++;
            userscorepara.innerText=userScore;
            msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";

        }
        else
        {
            compScore++;
            compscorepara.innerText=compScore;
            msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
        }
            
    }
    //generate computer choice
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice=="rock")
        {
            //paper,scissor
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper")
        {
            //rock,scissor
            userWin=compChoice==="scissor"?false:true;
        }
        else
        {
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});