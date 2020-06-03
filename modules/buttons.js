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

export { Button };
