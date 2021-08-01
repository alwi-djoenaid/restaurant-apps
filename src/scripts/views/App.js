/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */

import routes from '../routes/routes.js';
import UrlParser from '../routes/url-parser.js';
import DrawerInitiator from '../utils/DrawerInitiator.js';

// eslint-disable-next-line require-jsdoc
export default class App {
  /**
    * Represent application shell
    * @param {*} param0
  */
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  /**
   * Initialize application shell
   */
  _initialAppShell() {
    DrawerInitiator.init({
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
  }
};
