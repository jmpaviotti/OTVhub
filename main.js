// Modules
import {
  autoPauseAll,
  insertChat,
  removeChat,
  clearContainer,
} from './modules/twitch.js';
import { createSwitchers } from './modules/buttons.js';
import * as grid from './modules/grid.js';
import * as single from './modules/single.js';

// Functions
function chatLogic() {
  if (chat_enabled) {
    removeChat(container);
    button_chat.textContent = 'Show chat';
  } else {
    insertChat(channel_names[0], container);
    button_chat.textContent = 'Hide chat';
  }
  chat_enabled = !chat_enabled;
}

// Variables
const players = [],
  channel_names = [
    'Fedmyster',
    'Fedmyster2',
    'Lilypichu',
    'Pokimane',
    'Scarra',
    'Yvonnie',
  ];
const container = document.querySelector('#twitch');
const menu = document.querySelector('.options');
const button_chat = document.querySelector('#hide-chat');
let chat_enabled = true;
let mode = 'single';

// Main code
// Choose between grid and dynamic view (Eventually change to dynamic import?)

if (mode == 'single') {
  // Single player mode
  single.createPlayerBox(channel_names, container, players);
  const chat = insertChat(channel_names[0], container);
  const switchers = createSwitchers(channel_names, menu, players[0], chat);
  button_chat.addEventListener('click', chatLogic);
} else if (mode == 'grid') {
  // Grid mode
  grid.createPlayerGrid(channel_names, container, players);
}

autoPauseAll(players);

// Switch
// button.onclick = function () {
//   clearContainer(container);
//   if (mode == 'grid') grid.createPlayerGrid(channel_names, container, players);
//   else if (mode == 'single');
// };
