import Drawerutils from '../utils/drawer-utils';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    Drawerutils.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const mainContent = document.querySelector('#mainContent');
    const skipLink = document.querySelector('.skipcontent');
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      skipLink.blur();
    });
  }
}

export default App;
