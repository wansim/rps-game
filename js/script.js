const header_score = document.querySelector('.header-score .score');
const game_board = document.querySelector('.game-board');
const buttons = Array.from(document.getElementsByClassName('board-options'));
const score_card = document.querySelector('.score-card');
const user_result = document.querySelector('.score-card .score-card-you');
const ai_result = document.querySelector('.score-card .score-card-house');
const win_text = document.querySelector('.score-card-win .win-text');

//const button_paper = document.getElementById('paper');

score_card.classList.add("hide"); 

//winning rules
var winner_combo = [
  {
    'selected': 'paper',
    'beats': 'rock',
    'icon': '🖐',
    'img': 'images/icon-paper.svg'
  },
  
  {
    'selected': 'scissors',
    'beats': 'paper',
    'icon': '✌',
    'img': 'images/icon-scissors.svg'
  },

  {
    'selected': 'rock',
    'beats': 'scissors',
    'icon': '👊',
    'img': 'images/icon-rock.svg'
  },
  
]


//intialize player scores
let player_score = 0;

//check scores

/*   button_paper.addEventListener('click', e => {
    switch (e.target.id) {
      case 'rock':
      calculateWinner(winner_combo[0], ai_selected());
      break;
      case 'paper':
      calculateWinner(winner_combo[1], ai_selected());
      break;
      case 'scissors':
      calculateWinner(winner_combo[2], ai_selected());
      break;
  }
  }) */
 

 buttons.forEach(button => {
  button.addEventListener('click', e => {
    game_board.classList.add("hide"); 
    switch (e.target.id) {
      case 'paper':
      calculateWinner(winner_combo[0], ai_selected());
      break;
      case 'scissors':
      calculateWinner(winner_combo[1], ai_selected());
      break;
      case 'rock':
      calculateWinner(winner_combo[2], ai_selected());
      break;
  }
  })
  }) 
  
  function ai_selected(){
    const randomIndex = Math.floor(Math.random() * winner_combo.length);
    return winner_combo[randomIndex];
  }
  
  
  function calculateWinner(user_option, ai_option){

    let span_score = document.createElement("span"); //create span

    if(user_option.beats == ai_option.selected){
      span_score.innerHTML = player_score += 1; //add span
      header_score.appendChild(span_score);
     
      updateUI(user_option, ai_option, 'You Win!'); //show Win
      return;	
    }
    if(user_option.selected == ai_option.selected){
      span_score.innerHTML = player_score;
      header_score.appendChild(span_score);
     
      updateUI(user_option, ai_option, 'Draw');  //show Draw
      return;
    }
    else {
      span_score.innerHTML = player_score;
      header_score.appendChild(span_score);
      updateUI(user_option, ai_option, 'You Loose!');  //show Loose
    }
  }
  
  function updateUI(user_option, ai_option, score_message){
  
    //show user score on left
    let user_score_img = document.createElement("img");  //create img
    user_score_img.setAttribute("src", "" + user_option.img + "");
    user_result.appendChild(user_score_img);  //add imag
    //user_result.innerHTML = user_option.icon;  
    user_result.classList.add('${user_option.selected}');
  
    //show ai score on right
    let ai_score_img = document.createElement("img"); //create img
    ai_score_img.setAttribute("src", "" + ai_option.img + "");
    ai_result.appendChild(ai_score_img);  ///add img
    //ai_result.innerHTML = ai_option.icon;
    ai_result.classList.add('${ai_option.selected}');
  
    win_text.innerHTML = score_message;
    game_board.classList.add("hide");
    score_card.classList.remove("hide");
  }
  
  
