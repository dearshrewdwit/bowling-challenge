function Player(name, game) {
  this.game = game || new Game();
  this.name = name
  this.isStillToRoll = true;
  this.isPlaying = false;
}

Player.prototype.roll = function(score) {
  this.startTurn();
  this.game.roll(score);
  this.endTurn();
}

Player.prototype.changeNameTo = function(newName) {
  this.name = newName
}
Player.prototype.startTurn = function() {
  this.isPlaying = true;
}

Player.prototype.endTurn = function() {
  if (this.game.isFrameOver()) {
    this.isStillToRoll = false;
    this.isPlaying = false;
  }
}

Player.prototype.resetStatus = function() {
  this.isStillToRoll = true;
}
