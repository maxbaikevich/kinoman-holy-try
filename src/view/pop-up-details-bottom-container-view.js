import {createElement} from '../render';

const createPopUpDetailsBottomContainerTemplate = (commentListData) => (
  `<div class="film-details__bottom-container">
    <section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentListData}</span></h3>
    </section>
  </div>`
);
export default class popUpDetailsBottomContainerView {
    #element = null;
    #commentListData = null;
    constructor(commentListData) {
      this.#commentListData = commentListData;
    }

    get element() {
      if(!this.#element) {
        this.#element = createElement(this.template);
      }
      return this.#element;
    }

    get template() {
      return createPopUpDetailsBottomContainerTemplate(this.#commentListData);
    }

    removeElement() {
      this.#element = null;
    }
}
