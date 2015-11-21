$(document).ready(function() {

  $('#play').click(function() {
    bowlingGame.play();

    var player = bowlingGame.players.indexOf(bowlingGame.currentPlayer)+1;
    var first = bowlingGame.currentPlayer.game.frame.rolls[0];
    var second = bowlingGame.currentPlayer.game.frame.rolls[1] || '';
    var third = bowlingGame.currentPlayer.game.frame.rolls[2] || '';
    var frame = bowlingGame.currentPlayer.game.frame.total;
    if (first === 10) { second = 'x';}
    if (first + second === 10 ) { second = '/'; }
    var total = bowlingGame.currentPlayer.game.total;
    updateTable(player, bowlingGame.currentPlayer.game.frames.length +1, first+' - '+second+' - '+third+' | '+frame);
    updateTable(player, 11, total);
  });

  $('#addScore').click(function() {
    var score = parseInt($('#score').val());
    bowlingGame.play(score);

    var player = bowlingGame.players.indexOf(bowlingGame.currentPlayer)+1;
    var first = bowlingGame.currentPlayer.game.frame.rolls[0];
    var second = bowlingGame.currentPlayer.game.frame.rolls[1] || '';
    var third = bowlingGame.currentPlayer.game.frame.rolls[2] || '';
    var frame = bowlingGame.currentPlayer.game.frame.total;
    if (first === 10) { second = 'x';}
    if (first + second === 10 ) { second = '/'; }
    var total = bowlingGame.currentPlayer.game.total;
    updateTable(player, bowlingGame.currentPlayer.game.frames.length +1, first+' - '+second+' - '+third+' | '+frame);
    updateTable(player, 11, total);
  });

  $('#addPlayer').click(function() {
    var name = $('#playerName').val();
    displayName(name);
    bowlingGame.addPlayer(new Player(name));
  });

  $('#newGame').click(function() {
    location.reload();
  });
});
