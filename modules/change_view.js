function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function resetView(config) {
  const {
    container,
    menu,
    instance: { players },
  } = config;

  // Clear players code/markup, chat markup
  clearContainer(container);
  players.length = 0;

  // Clear switchers/chat button from menu
  clearContainer(menu);

  // Remake container default markup
  container.innerHTML = '<section id="players"></section>';
}

function changeView(config) {
  resetView(config);
  if (config.mode == 'grid') {
    import('./single.js').then((module) => {
      config.instance = module.default(config);
    });
    config.mode = 'single';
    config.change_view.node.textContent = 'Grid View';
  } else if (config.mode == 'single') {
    import('./grid.js').then((module) => {
      config.instance = module.default(config);
    });
    config.mode = 'grid';
    config.change_view.node.textContent = 'Dynamic View';
  }
}

export { changeView };
