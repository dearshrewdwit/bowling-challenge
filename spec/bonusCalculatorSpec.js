describe("bonusCalc", function() {
  var bonusCalc;
  var mock;

  beforeEach(function() {
    function FrameMock() {
      this.isStrike = function() { return true };
      this.isSpare = function() { return true };
    }
    mock = new FrameMock();
    bonusCalc = new BonusCalc();
  });

  it("sets bonus status", function() {

  });
});
