describe("GameManager logic", function() {
  var gameManager;
  var mock;

  beforeEach(function() {
    function PlayerMock() {
      this.isPlaying = function() { return true };
      this.isStillToRoll = function() { return true };
      this.resetStatus = function() { return true };
      this.isStillToRoll = true;
    }
    mock = new PlayerMock();
    gm = new GameManager();
  });

  it("can add players", function() {
    gm.addPlayer(mock);
    expect(gm.players).toContain(mock);
  })

  it("selects players still to roll", function() {
    expect(gm.selectPlayersToRoll()).toEqual([mock]);
  });

  it("can start a new game", function() {
    gm.addPlayer(mock);
    gm.newGame();
    expect(gm.players.length).toEqual(0);
  })
});
