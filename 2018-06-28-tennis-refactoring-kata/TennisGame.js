const drawScoreName = (score) => {
  switch (score) {
      case 0:
          return "Love-All";
          break;
      case 1:
          return "Fifteen-All";
          break;
      case 2:
          return "Thirty-All";
          break;
      default:
          return "Deuce";
          break;
  }
};

const scoreName = (tempScore) => {
  switch (tempScore) {
      case 0:
          return "Love";
          break;
      case 1:
          return "Fifteen";
          break;
      case 2:
          return "Thirty";
          break;
      case 3:
          return "Forty";
          break;
  }
};

const evaluateResult = (player1, player2) =>{

  var minusResult = player1.score - player2.score;
  if (minusResult === 1) return `Advantage ${player1.name}`;
  else if (minusResult === -1) return `Advantage ${player2.name}`;
  else if (minusResult >= 2) return `Win for ${player1.name}`;
  else return `Win for ${player2.name}`;

};

const Player = function (name, score = 0) {
  return { name, score }
 };

const TennisGame = function (player1, player2) {
  return {
    player1,
    player2,
    wonPoint: function(playerName) {
        if (playerName === player1.name)
            return new TennisGame(new Player(player1.name, player1.score +1), player2);
        else
            return new TennisGame(player1, new Player(player2.name, player2.score +1));
    },
    getScore: function() {
        if (player1.score === player2.score) {
            return drawScoreName(player1.score);
        } else if (player1.score >= 4 || player2.score >= 4) {
            return evaluateResult(player1, player2);
        }
        return formatScore(player1, player2);
    }
  }
};

const formatScore = (player1, player2) => {
  return scoreName(player1.score) + '-' + scoreName(player2.score);
};

module.exports = { TennisGame, Player }; //eslint-disable-line
