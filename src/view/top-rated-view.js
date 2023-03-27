import {createElement} from '../render.js';
export const topRatedTemplate = () => (
  `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">
  </section>`
);
export default class topRatedTView {
  #element= null;
  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return topRatedTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
