import {createElement} from '../render';

const  createPopUpDetailsControlsTemplate = () => (
  `<section class="film-details__controls"></section>
  `
);
export default  class PopUpDetailsControlsView {
  #element = null;
  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createPopUpDetailsControlsTemplate();
  }

  removeElement() {
    this.#element = null;
  }

}

