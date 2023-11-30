import {createElement} from '../render';

export default class AbstarctView  {
  #element = null;
  constructor() {
    if (new.target === AbstarctView) {
      throw new Error('Car\'t instatiate AbstarctView, only concrete one');
    }
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    throw new Error('Abstract method note implemented: get template');
  }

  removeElement() {
    this.#element = null;
  }
}
