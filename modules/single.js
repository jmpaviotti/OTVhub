// Modules
import { changeView } from './change_view.js';
import { Chat } from './chat.js';
import { Button } from './buttons.js';
import { ChatButton } from './buttons/chat_button.js';
import { createSwitchers } from './buttons/switchers.js';

// Functions

function insertPlayer(name, container) {
  // Inserts the html elements required for a twitch player embed into DOM
  const child = document.createElement('div');
  child.setAttribute('id', 'player_' + name);
  child.setAttribute('class', 'twitch-player');
  container.querySelector('#players').append(child);
  return child;
}

function createPlayerBox(name, container) {
  const players = [];
  insertPlayer(name, container);
  const options = {
    width: '100%',
    height: '100%',
    channel: name,
  };

  players.push(new Twitch.Player('player_' + name, options));
  return players;
}

// Export
export default function init(data) {
  // Parsing
  const { channels, container, menu } = data;
  const name = channels[data.index];

  // Inserts player
  const players = createPlayerBox(name, container);

  // Inserts button to change view
  const change_view = new Button('change-view', menu, 'Grid View');
  change_view.node.addEventListener('click', () => {
    changeView(data);
  });

  // Inserts chat + Chat button w/ logic
  const chat = new Chat(container, name);
  chat.insert();
  const chat_button = new ChatButton('hide-chat', menu, 'Hide Chat');
  chat_button.bindChat(chat);

  // Inserts buttons to switch channels
  const switchers = createSwitchers(channels, menu, players[0], chat);

  return {
    players: players,
    chat: chat,
    buttons: {
      change_view: change_view,
      chat: chat_button,
      switchers: switchers,
    },
  };
}
