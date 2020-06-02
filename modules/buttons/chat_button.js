import { Button } from '../buttons.js';

class ChatButton extends Button {
  constructor(id, parent, content = '') {
    super(id, parent, content);
  }

  bindChat(chat) {
    this.node.addEventListener('click', () => {
      if (chat.enabled) {
        chat.remove();
        this.node.textContent = 'Show chat';
      } else {
        chat.insert();
        this.node.textContent = 'Hide chat';
      }
      this.chat_enabled = !this.chat_enabled;
    });
  }
}

export { ChatButton };
