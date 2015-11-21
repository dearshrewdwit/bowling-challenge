var bowlingGame;
bowlingGame = new GameManager();

function displayName(playerName) {
  var count = bowlingGame.players.length + 1;
  updateTable(count, 0, playerName);
}

function updateTable(row, column, value) {
  var tableRow = document.getElementsByTagName("TR")[row];
  tableRow.getElementsByTagName("TD")[column].innerHTML = value;
}
