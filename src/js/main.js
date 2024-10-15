function navToggle() {
  const $nav = document.querySelector('.js-nav-toggle');
  $nav.dataset.state = $nav.dataset.state === 'open' ? 'close' : 'open';
}

function gridHighlight(type) {
  const $grid = document.querySelector('.js-grid');
  $grid.dataset.selected = type
}