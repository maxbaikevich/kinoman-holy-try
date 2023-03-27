import dayjs from 'dayjs';
import {createElement} from '../render.js';

const createPopUpFilmDetailsCommentItemTemplate = (commentData) => {
  const {author, comment, date, emotion} = commentData;
  return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${comment}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${dayjs(date).format('YYYY/DD/MM HH:mm')}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
};
export default class popUpFilmDetailsCommentItemView {
  #element = null;
  #commentData = null;
  constructor(commentData) {
    this.#commentData = commentData;
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createPopUpFilmDetailsCommentItemTemplate(this.#commentData);
  }

  removeElement() {
    this.#element = null;
  }
}
