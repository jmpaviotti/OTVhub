// Modules
import { autoPauseAll, clearContainer } from './modules/twitch.js';
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
if (mode == 'grid') {
  // Grid mode
  grid.createPlayerGrid(channel_names, container, players);
  window.addEventListener(
    'resize',
    () => grid.resizeAll(players, container),
    false
  );
} else if (mode == 'single') {
  // Single player mode
  single.createPlayerBox(channel_names, container, players);
  single.resizeGrid(container);
  window.addEventListener(
    'resize',
    () => {
      single.resizeAll(players, container);
      single.resizeGrid(container);
    },
    false
  );
}

// Global actions
autoPauseAll(players);

// Switch
button.onclick = function () {
  clearContainer(container);
  //   if (mode == 'grid') grid.createPlayerGrid(channel_names, container, players);
  //   else if (mode == 'single');
};
