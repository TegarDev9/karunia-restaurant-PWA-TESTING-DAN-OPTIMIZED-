const Drawerutils = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    const drawerElement = drawer;
    if (drawerElement.style.maxHeight) {
      drawerElement.style.maxHeight = null;
    } else {
      drawerElement.style.maxHeight = `${drawerElement.scrollHeight}px`;
    }
    event.stopPropagation();
  },

  _closeDrawer(event, drawer) {
    const drawerElement = drawer;
    drawerElement.style.maxHeight = null;
    event.stopPropagation();
  },
};

export default Drawerutils;
