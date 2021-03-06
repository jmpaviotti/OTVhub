// Modules
import { changeView } from './change_view.js';
import { Button } from './buttons.js';

// Functions
function insertPlayer(name, container) {
  const child = document.createElement('div');
  child.setAttribute('id', 'player_' + name);
  child.setAttribute('class', 'twitch-player grid');
  container.querySelector('#players').append(child);
  return child;
}

function createPlayerGrid(names, container) {
  const players = [];

  for (let i = 0; i < names.length; i++) {
    insertPlayer(names[i], container);

    const options = {
      width: '100%',
      height: '100%',
      channel: names[i],
    };

    players.push(new Twitch.Player('player_' + names[i], options));
  }
  return players;
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

// Export
export default function init(data) {
  // Parsing
  const { channels, container, menu } = data;

  // Inserts players
  const players = createPlayerGrid(channels, container);

  // Inserts button to change view
  const change_view = new Button('change-view', menu, 'Dynamic View');
  change_view.node.addEventListener('click', () => {
    changeView(data);
  });

  // Autopause
  autoPauseAll(players);

  return {
    players: players,
    buttons: { change_view: change_view },
  };
}
