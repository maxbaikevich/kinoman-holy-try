import {createElement} from '../render';

const createEmojiListTemplate = () => (
  `<div class="film-details__emoji-list"></div>
  `
);
export default class emojiListTemplateView {
  #element = null;

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createEmojiListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}

