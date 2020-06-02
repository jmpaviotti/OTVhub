class Chat {
  constructor(container, channel) {
    this.container = container;
    this.channel = channel;
  }

  insert() {
    this.parent = document.createElement('aside');
    this.node = document.createElement('iframe');
    this.parent.setAttribute('id', 'chat');
    this.node.setAttribute(
      'src',
      `https://www.twitch.tv/embed/${this.channel}/chat?parent=otvhub.com`
    );
    this.node.setAttribute('frameborder', '0');
    this.node.setAttribute('scrolling', 'yes');
    this.parent.append(this.node);
    this.container.append(this.parent);
    this.enabled = true;
  }

  remove() {
    this.parent.remove();
    this.enabled = false;
  }

  setChannel(channel) {
    this.channel = channel;
    this.node.setAttribute(
      'src',
      `https://www.twitch.tv/embed/${this.channel}/chat?parent=otvhub.com`
    );
  }
}

function insertChat(name, container) {
  const parent = document.createElement('aside');
  const child = document.createElement('iframe');
  parent.setAttribute('id', 'chat');
  child.setAttribute(
    'src',
    `https://www.twitch.tv/embed/${name}/chat?parent=otvhub.com`
  );
  child.setAttribute('frameborder', '0');
  child.setAttribute('scrolling', 'yes');
  parent.append(child);
  container.append(parent);
  return child;
}

function removeChat(container) {
  const chat = container.querySelector('#chat');
  chat.remove();
}

export { Chat };
