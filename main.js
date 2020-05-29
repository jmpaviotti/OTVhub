// Modules
import { autoPauseAll, insertChat, clearContainer } from './modules/twitch.js';
import * as grid from './modules/grid.js';
import * as single from './modules/single.js';

// Functions

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
const button = document.querySelector('#swap');
let mode = 'single';

// Main code
// Choose between grid and dynamic view (Eventually change to dynamic import?)

if (mode == 'single') {
  // Single player mode
  single.createPlayerBox(channel_names, container, players);
  insertChat(channel_names[0], container);
} else if (mode == 'grid') {
  // Grid mode
  grid.createPlayerGrid(channel_names, container, players);
  autoPauseAll(players);
}

// Switch
// button.onclick = function () {
//   clearContainer(container);
//   if (mode == 'grid') grid.createPlayerGrid(channel_names, container, players);
//   else if (mode == 'single');
// };
