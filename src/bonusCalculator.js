function BonusCalc() {
  this.isStrike = false;
  this.isSpare = false;
  this.bonus = [];
}

BonusCalc.prototype.calculate = function(frame, frames) {
  this.collectBonus(frame.currentRoll);
  this.setBonusStatus(frame);
  return this.getBonus(frames, this.bonus);
}

BonusCalc.prototype.setBonusStatus = function(frame) {
  if (frame.isStrike()) { this.isStrike = true; }
  if (frame.isSpare()) { this.isSpare = true; }
}

BonusCalc.prototype.collectBonus = function(score) {
  if (this.isStrike || this.isSpare ) { this.bonus.push(score); }
}

BonusCalc.prototype.getBonus = function(frames, bonusArray) {
  var strikeBonus = this.checkStrike(frames, bonusArray);
  var spareBonus = this.checkSpare(frames, bonusArray);
  return strikeBonus + spareBonus;
}

BonusCalc.prototype.checkStrike = function(frames, bonusArray) {
  var total = 0;
  if (bonusArray.length === 2) {
    total = this.sumBonuses(bonusArray);
    if (frames[frames.length-1].isStrike()) {
      bonusArray.splice(0,1);
    } else {
      this.isStrike = false;
      this.bonus = [];
    }
  }
  return total;
}

BonusCalc.prototype.checkSpare = function(frames, bonusArray) {
  var total = 0;
  if (this.isSpare && bonusArray.length > 0) {
    total = this.sumBonuses(bonusArray);
    this.isSpare = false;
    this.bonus = [];
    }
  return total;
}
BonusCalc.prototype.sumBonuses = function(array) {
  var total = 0;
  array.forEach(function(item) { total += item; });
  return total;
}
