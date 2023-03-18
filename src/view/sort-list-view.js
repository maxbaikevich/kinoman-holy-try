import {createElement} from '../render.js';
export const sortListTemplate = () => (
  `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
);
export default class SortList {
  #element = null;
  get element() {
    if(!this.#element) {
      return createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return sortListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
