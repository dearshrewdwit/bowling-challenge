describe("frame logic", function() {
  var frame;
  var frame2;
  var roll1;
  var roll2;
  var roll3;

  beforeEach(function() {
    frame = new Frame();
    frame2 = new Frame();
  });

  it("has ten pins", function() {
    expect(frame.pins).toEqual(10);
  });

  it("has default currentRoll of null", function() {
    expect(frame.currentRoll).toBeNull();
  });

  it("has empty rolls array", function() {
    expect(frame.rolls.length).toEqual(0);
  });

  it("has empty total", function() {
    expect(frame.total).toEqual(0);
  });

  it("roll method can take an optional argument", function() {
    roll1 = 5;
    expect(frame.roll).not.toThrow();
    expect(frame.roll(roll1)).toEqual(roll1);
  });

  it("random roll is always between 0 and 10", function() {
    for(var i = 0; i < 100; i++) {
      expect(frame.roll()).not.toBeGreaterThan(10);
      expect(frame.roll()).not.toBeLessThan(0);
    }
  });

  it("play method adds roll into roll array", function() {
    frame.play()
    expect(frame.rolls.length).toEqual(1);
  });

  it("play method sets roll score to currentRoll", function() {
    frame.play()
    expect(frame.currentRoll).not.toBeNull();
  });

  it("play method knocks down pins according to roll score", function() {
    frame.play()
    expect(frame.pins).toEqual(10-frame.currentRoll);
  });

  it("play method increases total by roll score", function() {
    var t = frame.total
    frame.play()
    expect(frame.total).toEqual(t + frame.currentRoll);
  });

  it("isStrike method returns true only if first roll is 10", function() {
    frame.play(10);
    expect(frame.isStrike()).toBeTruthy();
    frame2.play(9);
    expect(frame2.isStrike()).toBeFalsy();
  });

  it("isSpare method returns true only if first roll is not 10, but total is 10", function() {
    frame.play(10);
    expect(frame.isSpare()).toBeFalsy();
    frame2.play(9);
    expect(frame2.isSpare()).toBeFalsy();
    frame2.play(1);
    expect(frame2.isSpare()).toBeTruthy();
    expect(frame2.isStrike()).toBeFalsy();
  });

  it("isOver method returns true if strike or more than 2 rolls", function() {
    frame.play(10);
    expect(frame.isOver()).toBeTruthy();
    frame2.play(3);
    expect(frame2.isOver()).toBeFalsy();
    frame2.play(4);
    expect(frame2.isOver()).toBeTruthy();
  })

});
