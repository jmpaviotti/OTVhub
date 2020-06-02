import { Button } from '../buttons.js';

class Switcher extends Button {
  constructor(id, parent, content) {
    super(id, parent, content);
  }

  bindElements(player, chat) {
    this.node.addEventListener('click', () => {
      player.setChannel(this.id);
      chat.setChannel(this.id);
      localStorage.setItem('channel', this.id);
    });
  }
}

function createSwitchers(channel_names, container, player, chat) {
  const switchers = [];
  for (const name of channel_names) {
    let temp = new Switcher(name, container, name);
    temp.bindElements(player, chat);
    switchers.push(temp);
  }
  return switchers;
}

export { createSwitchers };
