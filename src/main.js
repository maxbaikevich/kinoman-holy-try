import {renderTemplate,  RenderPosition} from './render';
import {renderElement} from './render';
import AvatarmenuView from './view/avatar-view';
import NavigationList from './view/navigation-list-view';
import NavigationItemsTemplate from './view/navigation-item-view';
import NavigationItemStat from './view/navigation-item-stats-view';
import SortList from './view/sort-list-view';
import filmsView from './view/films-view';
import FilmsListView from './view/films-list-view';
import FilmCardView from './view/film-card-view';
import showMoreBtnView from './view/show-more-view';
import topRatedTView from './view/top-rated-view';
import mostCommentedView from './view/most-commented-view';
import footerStatisticView from './view/footer-statistic-view';
import popUpContainerRenderView from './view/popup-view';
import popUpDetailsCreateView from './view/pop-up-details-view';
import PopUpDetailsControlsView from './view/pop-up-details-controls-view';
import popUpDetailsControlsBtnView from './view/pop-up-details-controls-btn';
import popUpDetailsBottomContainerView from './view/pop-up-details-bottom-container-view';
import popUpDetailsCommentListView from './view/pop-up-details-comments-list-view';
import {createNewCommentTemplate} from './view/pop-up-detail-new-comment-view';
import {createEmojiListTemplate} from './view/pop-up-details-emoji-list-view';
import {createPopUpFilmDetailsCommentItemTemplate} from './view/pop-up-details-comment-view';
import {createCommentEmojiTemplate} from './view/pop-up-details-comment-emoji-view';
import {generateMovie} from './mock/movie';
import {createComments} from './utils';
import {generateFilter} from './utils';
const MOVIE_COUNT = 20;
const MOVIE_COUNT_PER_STEP = 5;
const movie = Array.from({length: MOVIE_COUNT}, generateMovie);
const comments = createComments(movie);
const commentsListData = (movieData, commentsData) => {
  const res = [];
  movieData.comments.forEach((element) => {
    res.push(commentsData.find((comment) => comment.id === element));
  });
  return res;
};
const filterDate = generateFilter(movie);

const detailsControlButton = [
  {styleClass:'film-details__control-button--watchlist',title: 'Add to watchlist', id:'watchlist', name: 'watchlist', active: false},
  {styleClass:'film-details__control-button--watched', title:'Already watched', id:'watched', name: 'watched', active: true},
  {styleClass:'film-details__control-button--favorite', title:'Add to favorites', id:'favorite', name: 'favorite', active: false}
];
const commentEmoji = ['smile','sleeping','puke','angry'];
const countExtra = 2;
// const countComments = 4;
const siteHeaderElement = document.querySelector('.header');
renderElement(siteHeaderElement, new AvatarmenuView().element, RenderPosition.BEFOREEND);
const siteMeinElement = document.querySelector('.main');
renderElement(siteMeinElement, new NavigationList().element, RenderPosition.BEFOREEND);
const siteNavigationList = siteMeinElement.querySelector('.main-navigation');
renderElement(siteNavigationList, new NavigationItemsTemplate(filterDate).element, RenderPosition.BEFOREEND);
renderElement(siteNavigationList, new NavigationItemStat().element, RenderPosition.BEFOREEND);
renderElement(siteMeinElement, new SortList().element, RenderPosition.BEFOREEND);
renderElement(siteMeinElement, new filmsView().element, RenderPosition.BEFOREEND);
const siteFilmsContainer = siteMeinElement.querySelector('.films');
renderElement(siteFilmsContainer, new FilmsListView().element, RenderPosition.BEFOREEND);
const filmsListContainer  = siteMeinElement.querySelector('.films-list__container');

for(let i = 0; i < Math.min(movie.length, MOVIE_COUNT_PER_STEP); i++) {
  renderElement(filmsListContainer, new FilmCardView(movie[i]).element, RenderPosition.BEFOREEND);
}
const siteFilmList = siteFilmsContainer.querySelector('.films-list');
if(movie.length > MOVIE_COUNT_PER_STEP) {
  let renderedMovieCount = MOVIE_COUNT_PER_STEP;
  const showMoreBtn = new showMoreBtnView();
  renderElement(siteFilmList, showMoreBtn.element, RenderPosition.BEFOREEND);
  const loadMoreButton = siteFilmList.querySelector('.films-list__show-more');

  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    movie
      .slice(renderedMovieCount, renderedMovieCount + MOVIE_COUNT_PER_STEP)
      .forEach((movieItem) => renderElement(filmsListContainer, new FilmCardView(movieItem).element, RenderPosition.BEFOREEND));
    renderedMovieCount += MOVIE_COUNT_PER_STEP;
    if(renderedMovieCount >= movie.length) {
      showMoreBtn.element.remove();
      showMoreBtn.removeElement();
    }
  });
}

renderElement(siteFilmsContainer, new topRatedTView().element, RenderPosition.BEFOREEND);
renderElement(siteFilmsContainer, new mostCommentedView().element, RenderPosition.BEFOREEND);
const filmsListExtra = siteFilmsContainer.querySelectorAll('.films-list--extra');

for(const element of filmsListExtra ) {
  const extraContainer = element.querySelector('.films-list__container');
  for(let i = 0; i < countExtra; i++) {
    renderElement(extraContainer, new FilmCardView(movie[i]).element, RenderPosition.BEFOREEND);
  }
}
const footer = document.querySelector('.footer');
renderElement(footer, new footerStatisticView().element, RenderPosition.BEFOREEND);
const bodyElement = document.querySelector('body');
renderElement(bodyElement, new popUpContainerRenderView().element, RenderPosition.BEFOREEND);
const detailsTopContainer = bodyElement.querySelector('.film-details__top-container');
renderElement(detailsTopContainer, new popUpDetailsCreateView(movie[0]).element, RenderPosition.BEFOREEND);
renderElement(detailsTopContainer, new PopUpDetailsControlsView().element, RenderPosition.BEFOREEND);
const filmDetailsControls = document.querySelector('.film-details__controls');
for(let i = 0; i < detailsControlButton.length; i++) {
  let active = '';
  if( detailsControlButton[i].active) {
    active = 'film-details__control-button--active';
  }
  renderElement(filmDetailsControls, new popUpDetailsControlsBtnView(detailsControlButton[i], active).element, RenderPosition.BEFOREEND);
}
const detailsInnerContainer = bodyElement.querySelector('.film-details__inner');
const commentListData = commentsListData(movie[0], comments);
renderElement(detailsInnerContainer, new popUpDetailsBottomContainerView(commentListData.length).element, RenderPosition.BEFOREEND);

const commentsWrap  = detailsInnerContainer.querySelector('.film-details__comments-wrap');

renderElement(commentsWrap, new popUpDetailsCommentListView().element, RenderPosition.BEFOREEND);
const commentsList = commentsWrap.querySelector('.film-details__comments-list');
for(let i=0; i < commentListData.length; i++) {
  renderTemplate(commentsList,createPopUpFilmDetailsCommentItemTemplate(commentListData[i]), RenderPosition.BEFOREEND);
}
renderTemplate(commentsWrap, createNewCommentTemplate(), RenderPosition.BEFOREEND);
const filmDetailsNewComment = commentsWrap.querySelector('.film-details__new-comment');
renderTemplate(filmDetailsNewComment, createEmojiListTemplate(), RenderPosition.BEFOREEND);

const emojiList = filmDetailsNewComment.querySelector('.film-details__emoji-list');
for(let i = 0; i < commentEmoji.length; i++) {
  renderTemplate(emojiList, createCommentEmojiTemplate(commentEmoji[i]), RenderPosition.BEFOREEND);
}

