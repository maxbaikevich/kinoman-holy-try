import {createElement} from '../render';

export const popUpContainerRenderTemplate = () => (
  `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
      </div>
    </form>
  </section>`
);
export default class PopUpContainerRenderView {
  #element = null;

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return popUpContainerRenderTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
