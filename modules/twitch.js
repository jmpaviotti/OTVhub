function insertPlayer(name, container) {
  // Inserts the html elements required for a twitch player embed into DOM
  const child = document.createElement('div');
  child.setAttribute('id', 'player_' + name);
  child.setAttribute('class', 'twitch-player');
  container.querySelector('#players').append(child);
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
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

export { insertPlayer, clearContainer, autoPauseAll };
