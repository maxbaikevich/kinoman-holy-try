import {createElement} from '../render.js';
export const  footerStatisticTemplate = () => (
  `<p>130 291 movies inside</p>
  `
);
export default class footerStatisticView {
  #element = null;

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return footerStatisticTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
