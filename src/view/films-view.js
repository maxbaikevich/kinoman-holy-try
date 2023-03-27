import {createElement} from '../render.js';
export const filmsTemplate = () => (
  `<section class="films">
   </section>
  `
);
export default class filmsView {
  #element = null;

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return  this.#element;
  }

  get template() {
    return filmsTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
