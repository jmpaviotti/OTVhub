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
      `https://www.twitch.tv/embed/${this.channel}/chat?darkpopout`
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
      `https://www.twitch.tv/embed/${this.channel}/chat?darkpopout`
    );
  }
}

export { Chat };
