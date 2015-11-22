describe("Player logic", function() {
  var player;
  var mock;

  beforeEach(function() {
    function gameMock() {
      this.isFrameOver = function() { return true };
      this.play = function() { return true };
    }
    mock = new gameMock();
    player = new Player();
    player2 = new Player('name', mock);
  });

  it("defaults", function() {
    expect(player.name).toEqual('Computer');
    expect(player.isStillToRoll).toBeTruthy;
    expect(player.isPlaying).toBeFalsy;
  })

  it("player can change name", function() {
    player.changeNameTo('newName');
    expect(player.name).toEqual('newName');
  });

  it("start turn sets status", function() {
    player.startTurn();
    expect(player.isPlaying).toBeTruthy();
  });

  it("player end turn", function() {
    player2.endTurn();
    expect(player2.isStillToRoll).toBeFalsy();
    expect(player2.isPlaying).toBeFalsy();
  });

  it("player resets status", function() {
    player2.endTurn();
    player2.resetStatus();
    expect(player2.isStillToRoll).toBeTruthy();
  });

});
