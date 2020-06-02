// Modules
import { insertPlayer } from './twitch.js';
import { Chat } from './chat.js';
import { createSwitchers } from './buttons/switchers.js';
import { ChatButton } from './buttons/chat_button.js';

// Functions

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

export default function init(data) {
  // Inserts player
  const players = createPlayerBox(data.channels[data.index], data.container);

  // Inserts chat + Chat button w/ logic
  const chat = new Chat(data.container, data.channels[data.index]);
  chat.insert();
  const chat_button = new ChatButton('hide-chat', data.menu, 'Hide Chat');
  chat_button.bindChat(chat);

  // Inserts buttons to switch channels
  const switchers = createSwitchers(data.channels, data.menu, players[0], chat);

  return {
    players: players,
    chat: chat,
    buttons: { chat: chat_button, switchers: switchers },
  };
}
