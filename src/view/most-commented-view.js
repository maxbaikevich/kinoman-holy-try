import {createElement} from '../render.js';
const mostCommentedTemplate = () => (
  `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
  `
);
export default class mostCommentedView {
  #element = null;

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return mostCommentedTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
