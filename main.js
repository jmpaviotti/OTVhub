// Modules
import { resizePlayer } from './modules/twitch.js';
import * as grid from './modules/grid.js';

// Variables
const players = [],
  channel_names = [
    'fedmyster',
    'fedmyster2',
    'lilypichu',
    'pokimane',
    'scarra',
    'yvonnie',
  ];
const container = document.querySelector('#twitch');

// Main code
// Choose between grid and dynamic view (Eventually change to dynamic import?)
// Grid mode (if grid true, run this)
grid.createPlayerGrid(channel_names, container, players);
grid.autoPause(players);
window.onresize = function () {
  const dimensions = grid.calcPlayerDimensions(container);
  players.forEach((player) => resizePlayer(player, dimensions));
};
//

// Dynamic mode
