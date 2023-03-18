import {createElement} from '../render.js';

export const createNavigationList = () => (
  `<nav class="main-navigation"></nav>
  `
);
export default class NavigationList {
  #element = null;
  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createNavigationList();
  }

  removeElement() {
    this.#element = null;
  }
}
