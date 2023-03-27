import {createElement} from '../render.js';
export const showMoreBtnTemplate = () => (
  `<button class="films-list__show-more">Show more</button>
  `
);
export default class showMoreBtnView {
  #element = null;
  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return showMoreBtnTemplate();
  }

  removeElement() {
    this.#element = null;
  }


}
