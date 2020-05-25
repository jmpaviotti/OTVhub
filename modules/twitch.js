/* global Twitch*/

function insertPlayer(name, container) {
  // Inserts the html elements required for a twitch player embed into DOM
  const parent = document.createElement('div');
  const child = document.createElement('div');

  parent.setAttribute('class', 'grid-item');
  child.setAttribute('id', 'player_' + name);

  parent.append(child);
  container.append(parent);
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function resizePlayer(player, dimensions) {
  // Resizes a twitch player embed
  player.setHeight(dimensions.height);
  player.setWidth(dimensions.width);
}

function autoPauseAll(players) {
  players.forEach((player) =>
    player.addEventListener(
      Twitch.Player.READY,
      function () {
        player.pause();
      },
      false
    )
  );
}

export { insertPlayer, resizePlayer, clearContainer, autoPauseAll };
