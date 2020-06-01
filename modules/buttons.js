class button {
  constructor(name, parent, content = '') {
    this.name = name;
    const li = document.createElement('li');
    const node = li.appendChild(document.createElement('button'));
    parent.appendChild(li);
    this.node = node;
    this.node.textContent = content;
  }
}

class switcher extends button {
  constructor(name, parent, content) {
    super(name, parent, content);
  }

  bindElements(player, chat) {
    this.node.addEventListener('click', () => {
      player.setChannel(this.name);
      chat.setAttribute(
        'src',
        `https://www.twitch.tv/embed/${this.name}/chat?parent=otvhub.com`
      );
    });
  }
}

function createSwitchers(channel_names, container, player, chat) {
  const switchers = [];
  for (const name of channel_names) {
    let temp = new switcher(name, container, name);
    temp.bindElements(player, chat);
    temp.bindChat;
    switchers.push(temp);
  }
  return switchers;
}

export { createSwitchers };
