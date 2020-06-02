class Button {
  constructor(id, parent, content = '') {
    this.id = id;
    const li = document.createElement('li');
    const node = li.appendChild(document.createElement('button'));
    parent.appendChild(li);
    this.node = node;
    this.node.textContent = content;
  }
}

class StaticButton {
  constructor(id, parent, content = '') {
    this.id = id;
    this.node = parent.querySelector(`#${id}`);
    this.node.textContent = content;
  }
}

class SwitchView extends StaticButton {
  constructor(id, parent, content = '') {
    super(id, parent, content);
  }
}

export { Button };
