
const startBtn=document.getElementById('Start_button');

const ROCK='Rock';
const PAPER='Paper';
const SCISSORS='Scissors';
const Default_Value='Rock';
let IsgameRunning = false;
const DRAW='DRAW';
const COMPUTERWINS='ComputerWins...'
const GetPlayerChoice=function()
{
    const Selection=prompt(`Enter Your Choice ${ROCK} ${PAPER} ${SCISSORS}`,'');

    if(Selection!==ROCK && Selection!==PAPER && Selection!==SCISSORS)
    {
    	alert(`invalied choice! we chose ${Default_Value} for you....`);
    	return Default_Value;
    }
    return Selection;
};

const GetComputerChoice=function()
{
	const random=Math.random();
     
     if(random<0.34)
     {
     	return ROCK;
     }
     else if(random<0.67)
     {
     	return PAPER;
     }
     else
     {
     	return SCISSORS;
     }

}

const choicewin=function(playerChoice,CompChoice)
{
	if(playerChoice==CompChoice)
	{
         return DRAW;
	}
	else if(playerChoice===ROCK && CompChoice===SCISSORS || playerChoice===SCISSORS && CompChoice===ROCK)
	{
		alert(`Congratulations Rock beats Scissors...... ${ROCK}`);
		return ROCK;
	}
	else if(playerChoice===SCISSORS && CompChoice===PAPER || playerChoice===PAPER && CompChoice=== SCISSORS)
	{
		alert(`Congratulations Scissors beats Paper...... ${SCISSORS}`);
		return SCISSORS;
	}
     
     else if(playerChoice===PAPER && CompChoice===ROCK || playerChoice===ROCK && CompChoice===PAPER)

     {
     	alert(`Congratulations Rock beats Paper...... ${PAPER}`);
        return PAPER;
     }
     else
     {
     	alert("Computer chase human:(");
     	return  COMPUTERWINS;
     }
}

startBtn.addEventListener('click',function()
{
	

   if(IsgameRunning===true)
   {
    return;
   }
    

       document.write("Start Game.......");
       const GetPlayer=GetPlayerChoice();
       const GetCompt=GetComputerChoice();
       const Getwin=choicewin(GetPlayer,GetCompt);
       document.write(Getwin);
});