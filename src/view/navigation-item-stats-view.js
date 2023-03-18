import {createElement} from '../render.js';
export const createNavigationItemStat = () => (
  `<a href="#stats" class="main-navigation__additional">Stats</a>
  `
);
export default class NavigationItemStat {
  #element = null;

  get element(){
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createNavigationItemStat();
  }

  removeElement() {
    this.#element = null;
  }
}
