// Modules
import { insertPlayer, resizePlayer } from './twitch.js';

// Functions

function createPlayerBox(channel_names, container, players) {
  insertPlayer(channel_names[0], container);

  const options = {
    width: '100%',
    height: '100%',
    channel: channel_names[0],
  };

  players.push(new Twitch.Player('player_' + channel_names[0], options));
}

//
export { createPlayerBox };
