function insertPlayer(name, container) {
  // Inserts the html elements required for a twitch player embed into DOM
  const child = document.createElement('div');
  child.setAttribute('id', 'player_' + name);
  child.setAttribute('class', 'twitch-player');
  container.querySelector('#players').append(child);
}

function insertChat(name, container) {
  const parent = document.createElement('aside');
  const child = document.createElement('iframe');
  parent.setAttribute('id', 'chat');
  child.setAttribute(
    'src',
    `https://www.twitch.tv/embed/${name}/chat?parent=otvhub.com`
  );
  child.setAttribute('frameborder', '0');
  child.setAttribute('scrolling', 'yes');
  parent.append(child);
  container.append(parent);
  return child;
}

function removeChat(container) {
  const chat = container.querySelector('#chat');
  chat.remove();
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

export {
  insertPlayer,
  insertChat,
  removeChat,
  resizePlayer,
  clearContainer,
  autoPauseAll,
};
