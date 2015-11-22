function Game(frame, bonusCalc) {
  this.frame = frame || new Frame();
  this.bonusCalc = bonusCalc || new BonusCalc();
  this.frames = [];
  this.maxFrames = 10;
  this.total = 0;
}

Game.prototype.play = function(score) {
  if (this.isFrameOver()) { this.nextFrame(); }
  console.log(score);
  this.frame.play(score);
  this.endRoll();
}

Game.prototype.endRoll = function() {
  this.addToTotal(this.bonusCalc.calculate(this.frame, this.frames));
  if (this.isFrameOver()) { this.addFrameTotal(); }
  if (this.isGameOver()) { console.log("GAME OVER");}
}

Game.prototype.addFrameTotal = function() {
  if(this.isBonusTenthFrame()) {
    this.addToTotal(this.frame.rolls[0])
  } else {
    this.addToTotal(this.frame.total);
  }
}

Game.prototype.addToTotal = function(points) { this.total += points; }

Game.prototype.isFrameOver = function() {
  return (this.frame.isOver() && !this.isBonusTenthFrame() ||
    this.isBonusTenthFrame() && this.frame.rolls.length === 3);
}

Game.prototype.nextFrame = function() {
  this.frames.push(this.frame);
  this.frame = new Frame();
}

Game.prototype.isBonusTenthFrame = function() {
  return (this.frames.length === 9 &&
     (this.bonusCalc.isStrike || this.bonusCalc.isSpare));
}

Game.prototype.isGameOver = function() {
  return (this.frames.length === 9 && this.isFrameOver());
}
