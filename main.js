// Modules
import initSingle from './modules/single.js';

// Variables
const channel_names = [
  'Fedmyster',
  'Fedmyster2',
  'Lilypichu',
  'Pokimane',
  'Scarra',
  'Yvonnie',
];
const container = document.querySelector('#twitch');
const menu = document.querySelector('.options');
let mode = 'single';

// Main code
initSingle(channel_names, 0, container, menu);
