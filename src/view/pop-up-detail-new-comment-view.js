import {createElement} from '../render';
const createNewCommentTemplate = () => (
  `<div class="film-details__new-comment">
      <div class="film-details__add-emoji-label"></div>
        <label class="film-details__comment-label">
          <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
        </label>
      </div>
  </div>`
);
export default class newCommentTemplateView {
  #element = null;
  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createNewCommentTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}

