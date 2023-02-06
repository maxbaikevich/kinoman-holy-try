import {renderTemplate,  RenderPosition} from './render';
import {createAvatarTemplate} from './view/avatar-view';
import {createNavigationList} from './view/navigation-list-view';
import {createNavigationItem} from './view/navigation-item-view';
import {createNavigationItemStat} from './view/navigation-item-stats-view';
import {sortListTemplate} from './view/sort-list-view';
import {filmsTemplate} from './view/films-view';
import {filmsListTemplate} from './view/films-list-view';
import {filmCardTemplate} from './view/film-card-view';
import {showMoreBtnTemplate} from './view/show-more-view';
import {topRatedTemplate} from './view/top-rated-view';
import {mostCommentedTemplate} from './view/most-commented-view';
import {footerStatisticTemplate} from './view/footer-statistic-view';
import {popUpContainerRenderTemplate} from './view/popup-view';
import {popUpDetailsCreateTemplate} from './view/pop-up-details-view';
import {createPopUpDetailsControlsTemplate} from './view/pop-up-details-controls-view';
import {createPopUpDetailsControlsBtnTemplate} from './view/pop-up-details-controls-btn';
import {createPopUpDetailsBottomContainerTemplate} from './view/pop-up-details-bottom-container-view';
import {createPopUpDetailsCommentListTemplate} from './view/pop-up-details-comments-list-view';
import {createNewCommentTemplate} from './view/pop-up-detail-new-comment-view';
import {createEmojiListTemplate} from './view/pop-up-details-emoji-list-view';
import {createPopUpFilmDetailsCommentItemTemplate} from './view/pop-up-details-comment-view';
import {createCommentEmojiTemplate} from './view/pop-up-details-comment-emoji-view';

const detailsControlButton = [
  {styleClass:'film-details__control-button--watchlist',title: 'Add to watchlist', id:'watchlist', name: 'watchlist', active: false},
  {styleClass:'film-details__control-button--watched', title:'Already watched', id:'watched', name: 'watched', active: true},
  {styleClass:'film-details__control-button--favorite', title:'Add to favorites', id:'favorite', name: 'favorite', active: false}
];
const commentEmoji = ['smile','sleeping','puke','angry'];
const countFilmsCard = 5;
const countExtra = 2;
const countComments = 4;
const siteHeaderElement = document.querySelector('.header');
renderTemplate(siteHeaderElement, createAvatarTemplate(), RenderPosition.BEFOREEND);
const siteMeinElement = document.querySelector('.main');
renderTemplate(siteMeinElement, createNavigationList(), RenderPosition.BEFOREEND);
const siteNavigationList = siteMeinElement.querySelector('.main-navigation');
renderTemplate(siteNavigationList, createNavigationItem(), RenderPosition.BEFOREEND);
renderTemplate(siteNavigationList, createNavigationItemStat(), RenderPosition.BEFOREEND);
renderTemplate(siteMeinElement, sortListTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMeinElement, filmsTemplate(), RenderPosition.BEFOREEND);
const siteFilmsContainer = siteMeinElement.querySelector('.films');
renderTemplate(siteFilmsContainer, filmsListTemplate(), RenderPosition.BEFOREEND);
const filmsListContainer  = siteMeinElement.querySelector('.films-list__container');

for(let i=0; i < countFilmsCard; i++) {
  renderTemplate(filmsListContainer, filmCardTemplate(), RenderPosition.BEFOREEND);
}
const siteFilmList = siteFilmsContainer.querySelector('.films-list');
renderTemplate(siteFilmList, showMoreBtnTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFilmsContainer, topRatedTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFilmsContainer, mostCommentedTemplate(), RenderPosition.BEFOREEND);
const filmsListExtra = siteFilmsContainer.querySelectorAll('.films-list--extra');

for(const element of filmsListExtra ) {
  const extraContainer = element.querySelector('.films-list__container');
  for(let i = 0; i < countExtra; i++) {
    renderTemplate(extraContainer, filmCardTemplate(), RenderPosition.BEFOREEND);
  }
}
const footer = document.querySelector('.footer');
renderTemplate(footer, footerStatisticTemplate(), RenderPosition.BEFOREEND);
const bodyElement = document.querySelector('body');
renderTemplate(bodyElement, popUpContainerRenderTemplate(), RenderPosition.BEFOREEND);
const detailsTopContainer = bodyElement.querySelector('.film-details__top-container');
renderTemplate(detailsTopContainer, popUpDetailsCreateTemplate(), RenderPosition.BEFOREEND);
renderTemplate(detailsTopContainer, createPopUpDetailsControlsTemplate(), RenderPosition.BEFOREEND);
const filmDetailsControls = document.querySelector('.film-details__controls');
for(let i = 0; i < detailsControlButton.length; i++) {
  let active = '';
  if( detailsControlButton[i].active) {
    active = 'film-details__control-button--active';
  }
  renderTemplate(filmDetailsControls, createPopUpDetailsControlsBtnTemplate(detailsControlButton[i], active), RenderPosition.BEFOREEND);
}
const detailsInnerContainer = bodyElement.querySelector('.film-details__inner');

renderTemplate(detailsInnerContainer, createPopUpDetailsBottomContainerTemplate(), RenderPosition.BEFOREEND);

const commentsWrap  = detailsInnerContainer.querySelector('.film-details__comments-wrap');

renderTemplate(commentsWrap, createPopUpDetailsCommentListTemplate(), RenderPosition.BEFOREEND);
const commentsList = commentsWrap.querySelector('.film-details__comments-list');
for(let i=0; i < countComments; i++) {
  renderTemplate(commentsList,createPopUpFilmDetailsCommentItemTemplate(), RenderPosition.BEFOREEND);
}
renderTemplate(commentsWrap, createNewCommentTemplate(), RenderPosition.BEFOREEND);
const filmDetailsNewComment = commentsWrap.querySelector('.film-details__new-comment');
renderTemplate(filmDetailsNewComment, createEmojiListTemplate(), RenderPosition.BEFOREEND);

const emojiList = filmDetailsNewComment.querySelector('.film-details__emoji-list');
for(let i = 0; i < commentEmoji.length; i++) {
  renderTemplate(emojiList, createCommentEmojiTemplate(commentEmoji[i]), RenderPosition.BEFOREEND);
}
