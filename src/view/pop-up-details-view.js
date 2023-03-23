import {createElement} from '../render.js';
import dayjs from 'dayjs';
import {timeStempDuration} from '../utils';
export const popUpDetailsCreateTemplate = (movie) => {
  const {
    title,
    ageRating,
    description,
    genre,
    poster,
    release,
    runtime,
    actors,
    alternativeTitle,
    totalRating,
    director,
    writers
  } = movie.filmInfo;
  const runtimeDate = timeStempDuration(runtime);
  const createGenre = (genreEl) => {
    const res = genreEl.map((el)=> (`<span class="film-details__genre">${el}</span>`));
    return res.join(' ');
  };

  return  `<div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="${poster}" alt="">

        <p class="film-details__age">${ageRating}+</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${alternativeTitle}</h3>
            <p class="film-details__title-original">Original: ${title}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">${totalRating}</p>
          </div>
        </div>

        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">${director}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">${writers.join(', ')}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">${actors.join(', ')}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">${dayjs(release.date).format('d MMMM YYYY')}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">${runtimeDate.hours}h ${runtimeDate.minutes}m</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">${release.releaseCountry}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Genres</td>
            <td class="film-details__cell">
               ${createGenre(genre)}
            </td>
          </tr>
        </table>
        <p class="film-details__film-description">${description}</p>
      </div>
    </div>`;
};
export default class popUpDetailsCreateView {
  #element = null;
  #movie = null;
  constructor(movie) {
    this.#movie = movie;
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return popUpDetailsCreateTemplate(this.#movie);
  }

  removeElement() {
    this.#element = null;
  }
}

