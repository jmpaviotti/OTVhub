/* global Twitch*/

// Modules
import { insertPlayer, resizePlayer } from './twitch.js';

// Functions
function calcPlayerDimensions(container) {
  // Calculates size of twitch player embeds based on the main container
  return {
    width: container.offsetWidth * 0.32,
    height: container.offsetHeight * 0.46,
  };
}

function createPlayerGrid(channel_names, container, players) {
  // Given a list of channels, puts twitch embeds of each on provided grid container
  for (let i = 0; i < channel_names.length; i++) {
    insertPlayer(channel_names[i], container);

    const options = {
      ...calcPlayerDimensions(container),
      channel: channel_names[i],
    };

    players.push(new Twitch.Player('player_' + channel_names[i], options));
  }
}

function resizeAll(players, container) {
  const dimensions = calcPlayerDimensions(container);
  players.forEach((player) => resizePlayer(player, dimensions));
}

export { createPlayerGrid, resizeAll };
