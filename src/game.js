function Game(frame) {
  this.frame = frame || new Frame();
  this.frames = [];
  this.maxFrames = 10;
  this.total = 0;
  this.strike = false;
  this.spare = false;
  this.strikeBonus = [];
  this.spareBonus = 0;
}

Game.prototype.roll = function(score) {
  if (this.isFrameOver()) { this.nextFrame(); }
  this.frame.play(score);
  this.collectBonus(this.frame.currentRoll);
  this.checkStrikeBonus();
  this.checkSpareBonus();
  this.endRoll();
  if (this.isGameOver()) {
    if (this.strikeBonus.length > 0) {this.addToTotal(this.strikeBonus[0]);}
    console.log("GAME OVER");}
}

Game.prototype.endRoll = function() {
  if (this.frame.isStrike()) { this.strike = true; }
  if (this.frame.isSpare()) { this.spare = true; }
  if (this.isFrameOver()) { this.endFrame(); }
}

Game.prototype.isBonusTenthFrame = function() {
  return (this.frames.length === 9 && (this.strike || this.spare));
}

Game.prototype.nextFrame = function() {
  this.frames.push(this.frame);
  this.frame = new Frame();
}
Game.prototype.endFrame = function() { this.addToTotal(this.frame.total); }

Game.prototype.addToTotal = function(points) { this.total += points; }

Game.prototype.isFrameOver = function() {
  return (this.frame.isOver() && !this.isBonusTenthFrame()); }

Game.prototype.isGameOver = function() {
  return (this.frames.length === 9 && this.isFrameOver()) || (this.isBonusTenthFrame() && this.frame.rolls.length === 3);
}

Game.prototype.collectBonus = function(score) {
  if (this.strike) { this.strikeBonus.push(score)}
  if (this.spare) { this.spareBonus = score }
}

Game.prototype.checkStrikeBonus = function() {
  if (this.strikeBonus.length === 2) {
     var bonus = 0;
     this.strikeBonus.forEach(function(sum) { bonus += sum });
     this.addToTotal(bonus);
     if (this.frames[this.frames.length-1].isStrike()) {
       this.strikeBonus.splice(0,1);
     } else {
        this.strikeBonus = [];
        this.strike = false;
     }
  }
}

Game.prototype.checkSpareBonus = function() {
  if (this.spareBonus !== 0) {
     this.addToTotal(this.spareBonus);
     this.spareBonus = 0;
     this.spare = false;
    }
}
