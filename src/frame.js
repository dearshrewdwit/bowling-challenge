function Frame() {
  this.pins = 10;
  this.currentRoll = null;
  this.rolls = [];
  this.total = 0;
}

Frame.prototype.roll = function(score) {
   return score || Math.floor(Math.random() * (this.pins + 1));
}

Frame.prototype.play = function(score) {
  var roll = this.roll(score)
  this.currentRoll = roll;
  this.pins -= roll;
  this.total += roll;
  this.rolls.push(roll);
}

Frame.prototype.isStrike = function() {
  return this.rolls[0] === 10
}

Frame.prototype.isSpare = function() {
  return this.rolls[0] !== 10 && this.total === 10
}

Frame.prototype.isOver = function() {
  return (this.rolls.length >= 2) || this.isStrike();
}
