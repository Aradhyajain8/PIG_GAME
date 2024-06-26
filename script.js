var die = document.querySelector('.dice');
var box0 = document.querySelector('.box1');
var box1 = document.querySelector('.box2');
var win = document.querySelector('.win');

let total_score = [0,0]; //total highscore of player
let playing = 0;  
let score = 0;    //current score
box0.style.backgroundColor = 'rgb(173, 203, 127)'

//displaying the winner
const winner = function(player){
    win.innerText = `Player ${player+1} is the Winner!! 🤩 `;
    win.classList.remove('hide');
}


const switchplayer = function(){
    score = 0;
    document.querySelector(`.score${playing}`).textContent = score;
    playing = playing === 1 ? 0: 1;
    if(playing){
        box1.style.backgroundColor = 'rgb(173, 203, 127)';
        box0.style.backgroundColor = 'rgb(212, 235, 182)';

    }else{
        box0.style.backgroundColor = 'rgb(173, 203, 127)';
        box1.style.backgroundColor = 'rgb(212, 235, 182)';
    }
}

//rolling die
document.querySelector('.rolldie').addEventListener('click', function(){
    die.classList.remove('hide');
    number = Math.trunc(Math.random() * 6) + 1;  //generating random no. b/w 1 to 6
    die.src = `dice-${number}.png`;

    if(!playing ){    //player 1 chance
        box0.style.backgroundColor = 'rgb(173, 203, 127)'
        if( number !==1){
            score+=number;
            document.querySelector(`.score0`).textContent = score;
        }else{
            playing= 1;
            score = 0;
            document.querySelector(`.score0`).textContent = score;
            box0.style.backgroundColor = 'rgb(212, 235, 182)';
            box1.style.backgroundColor = 'rgb(173, 203, 127)';

        }

    }else{
        if(number !== 1){
            score+=number;
            document.querySelector('.score1').textContent =score;
        }else{
            playing= 0;
            score = 0;
            document.querySelector('.score1').textContent =score;
            box1.style.backgroundColor = 'rgb(212, 235, 182)';
            box0.style.backgroundColor = 'rgb(173, 203, 127)';
        }
    }  

});

//hold button functionality
document.querySelector('.hold').addEventListener('click', function(){
    total_score[playing] += score;  //adding current score in the total
    document.querySelector(`.player${playing}`).textContent = total_score[playing];

    if(total_score[playing] >= 100){
        winner(playing);
    }else{
        switchplayer();  //switching the player 
    }    
});

//resetting the game 
document.querySelector('.newgame').addEventListener('click', function(){
    die.classList.add('hide');  //hiding the dice 
    win.classList.add('hide');  //hiding the winner

    //resetting everything to 0
    total_score = [0,0]; 
    playing = 0;    
    document.querySelector(`.score0`).textContent = 0;
    document.querySelector(`.score1`).textContent = 0; 
    box0.style.backgroundColor = 'rgb(173, 203, 127)';
    box1.style.backgroundColor = 'rgb(212, 235, 182)';
    document.querySelector(`.player0`).textContent = 0;
    document.querySelector(`.player1`).textContent = 0;
})
