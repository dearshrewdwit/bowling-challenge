function GameManager() {
  this.players = [];
  this.currentPlayer = null;
}

GameManager.prototype.addPlayer = function(player) {
  this.players.push(player);
}

GameManager.prototype.play = function(score) {
  this.getPlayer();
  this.currentPlayer.roll(score);
}

GameManager.prototype.getPlayer = function() {
  if (!this.isRoundFinished()) {
    if (this.currentPlayer === null || !this.currentPlayer.isPlaying) {
      this.currentPlayer = this.selectPlayersToRoll()[0];
    }
  } else {
    this.resetPlayers();
    this.currentPlayer = this.selectPlayersToRoll()[0];
  }
}

GameManager.prototype.resetPlayers = function() {
  this.players.forEach(function(player) { player.resetStatus(); });
}

GameManager.prototype.selectPlayersToRoll = function() {
  return this.players.filter(function(player) { return player.isStillToRoll; });
}

GameManager.prototype.isRoundFinished = function() {
  return this.selectPlayersToRoll().length === 0;
}

GameManager.prototype.newGame = function() {
  this.players = [];
}
