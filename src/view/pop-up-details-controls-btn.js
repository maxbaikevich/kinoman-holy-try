import {createElement} from '../render';

export const createPopUpDetailsControlsBtnTemplate = (detailsControl, active) => {
  const {styleClass, title, id, name} = detailsControl;
  return `<button type="button" class="film-details__control-button ${active} ${styleClass}" id="${id}" name="${name}">${title}</button>`;
};

export default class popUpDetailsControlsBtnView {
  #detailsControl = null;
  #active = null;
  #element = null;
  constructor(detailsControl, active) {
    this.#detailsControl = detailsControl;
    this.#active = active;
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createPopUpDetailsControlsBtnTemplate(this.#detailsControl, this.#active);
  }
}
