// Modules
import { insertPlayer, resizePlayer } from './twitch.js';

// Functions
function calcPlayerDimensions(container) {
  return {
    width: container.offsetWidth * 0.7,
    height: container.offsetWidth * 0.7 * (9 / 16), // Mantains 16:9 aspect ratio
  };
}

function resizeGrid(container) {
  const dimensions = calcPlayerDimensions(container);
  container.style.gridTemplateColumns = `${
    dimensions.width * 1.03
  }px auto auto`;
  container.style.gridTemplateRows = `${dimensions.height * 1.06}px auto`;
}

function createPlayerBox(channel_names, container, players) {
  insertPlayer(channel_names[0], container);

  const options = {
    ...calcPlayerDimensions(container),
    channel: channel_names[0],
  };

  players.push(new Twitch.Player('player_' + channel_names[0], options));
}

function resizeAll(players, container) {
  const dimensions = calcPlayerDimensions(container);
  players.forEach((player) => resizePlayer(player, dimensions));
}

//
export { calcPlayerDimensions, resizeGrid, createPlayerBox, resizeAll };
