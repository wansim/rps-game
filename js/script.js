const header_score = document.querySelector('.header .header-score p span');
const game_board = document.querySelector('.game-board');
const buttons = Array.from(document.getElementsByClassName('.board-options .board-buttons'));
const score_card = document.querySelector('score-card');
const user_result = document.querySelector('.score-card .score-card-you');
const ai_result = document.querySelector('.score-card .score-card-house');
const win_text = document.querySelector('.score-card-win .win-text');

//winning rules
var winner_combo = [
  {
    'selected': 'rock',
    'beats': 'scissors',
    'icon': '👊'
  },
  {
    'selected': 'paper',
    'beats': 'rock',
    'icon': '🖐'
  },
  {
    'selected': 'scissors',
    'beats': 'paper',
    'icon': '✌'
  },
]


//intialize player scores
var player_score = 0;

//check scores
buttons.forEach(button => {
  button.addEventListener('click', e => {
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
  })
  })
  
  function ai_selected(){
    const randomIndex = Math.floor(Math.random() * winner_combo.length);
    return winner_combo[randomIndex];
  }
  
  
  function calculateWininer(user, ai){
    if(user.beats == ai.selected()){
      header_score.innerHTML = player_score += 1;
      updateUI(user, ai, 'You Win!');
      return;	
  }
    if(user.selected == ai.selected){
      updateUI(user, ai, 'Draw');
      return;
  }
    updateUI(user, ai, 'You Loose!');
  }
  
  function updateUI(user, ai, outcome_text){
    user_result.innerHTML = user.icon;
    user_result.classList.add('${user.selected}');
  
    ai_result.innerHTML = ai.icon;
    ai_result.classList.add('${ai.selected}');
  
    win_text.innerHTML = outcome_text;
    game_board.classList.add('hide');
    score_card.classList.remove('hide');
  }
  
  
  
  
  
