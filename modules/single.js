// Modules
import { insertPlayer, autoPauseAll } from './twitch.js';
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

export default function init(channel_names, index, container, menu) {
  // Inserts player
  const players = createPlayerBox(channel_names[index], container);

  // Inserts chat + Chat button w/ logic
  const chat = new Chat(container, channel_names[index]);
  chat.insert();
  console.log(chat.parent);
  console.log(chat.node);
  const chat_button = new ChatButton('hide-chat', menu, 'Hide Chat');
  chat_button.bindChat(chat);

  // Inserts buttons to switch channels
  const switchers = createSwitchers(channel_names, menu, players[0], chat);

  return {
    players: players,
    chat: chat,
    buttons: { chat: chat_button, switchers: switchers },
  };
}
