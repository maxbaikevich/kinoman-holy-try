import {createElement} from '../render.js';
export const createPopUpDetailsCommentListTemplate = () => (
  `<ul class="film-details__comments-list">
   </ul>
  `
);
export default class popUpDetailsCommentListView {
  #element = null;

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return  this.#element;
  }

  get template() {
    return createPopUpDetailsCommentListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}


