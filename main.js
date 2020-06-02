// Variables
const config = {
  channels: [
    'Fedmyster',
    'Fedmyster2',
    'Lilypichu',
    'Pokimane',
    'Scarra',
    'Yvonnie',
  ],
  index: 0,
  container: document.querySelector('#twitch'),
  menu: document.querySelector('.options'),
};

const stored_channel = localStorage.getItem('channel');
if (stored_channel) {
  config.index = config.channels.indexOf(stored_channel);
}

// Main code
import('./modules/single.js').then((module) => {
  config.instance = module.default(config);
});
