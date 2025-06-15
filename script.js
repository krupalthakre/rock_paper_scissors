let h_scores=0,c_scores=0;
function playRound(c_choice,h_choice=getHumanChoices())
{
    
    if((c_choice=='rock'&&h_choice=='scissors')||(c_choice=='paper'&&h_choice=='rock')||(c_choice=='scissors'&&h_choice=='paper'))
        c_scores++;
    else
        h_scores++;

    if(c_scores>h_scores)
    console.log("Computer wins!");
    else
    console.log("Human wins!");
    
}

function getComputerChoices(){
    let c_choice=Math.ceil(Math.random()*3);
    if(c_choice===0)
        return "rock";
    else if(c_choice===1)
        return "paper";
    else
    return "scissors";
}

function getHumanChoices(){
    let h_choice=prompt("Enter your choice");
    return h_choice;

}



playRound(getComputerChoices())
playRound(getComputerChoices())
playRound(getComputerChoices())
playRound(getComputerChoices())
playRound(getComputerChoices())

console.log(`computer score: ${c_scores } and human scores: ${h_scores} `)
if(c_scores>h_scores)
    console.log("Computer wins!");
else
    console.log("Human wins!");



