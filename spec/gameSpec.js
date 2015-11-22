describe("game logic", function() {

  beforeEach(function() {
    game = new Game();
  })

  it("has default empty frames", function() {
    expect(game.frames.length).toEqual(0);
  });

  it("has default max frames of 10", function() {
    expect(game.maxFrames).toEqual(10);
  });

  it("has default total 0", function() {
    expect(game.total).toEqual(0);
  });

  it("returns score of 300 for a perfect Game", function() {
    for(var i = 0; !game.isGameOver(); i++) { game.play(10); }
    expect(game.total).toEqual(300);
  });

  it("returns score of 0 for a Gutter Game", function() {
    for(var i = 0; !game.isGameOver(); i++) { game.play(0); }
    expect(game.total).toEqual(0);
  });

  it("returns score of 20 when all rolls are 1", function() {
    for(var i = 0; !game.isGameOver(); i++) { game.play(1); }
    expect(game.total).toEqual(20);
  });

});
