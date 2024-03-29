import {createElement} from '../render.js';
const createAvatarTemplate = () => (
  `<section class="header__profile profile">
		<p class="profile__rating">Movie Buff</p>
		<img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
	</section>`
);

export default class AvatarMenuView {
  #element = null;
  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createAvatarTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
