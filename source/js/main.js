let openBtn = document.querySelector('.header__control--menu');
let closeBtn = document.querySelector('.header__control--close');
let headerLogo = document.querySelector('.header__img');
let headerSpan = document.querySelector('.header__span');
let headerControls = document.querySelector('.header__controls');
let headerNav = document.querySelector('.header__nav');
let headerNavigation = document.querySelector('.header__navigation');
let headerText = document.querySelector('.header__text');
let headerButtons = document.querySelector('.header__buttons');
let headerBtnMore = document.querySelector('.header__btn--more');
let headerBtnSign = document.querySelector('.header__btn--sign');
let headerContainer = document.querySelector('.header__container');
let mediaQuery = window.matchMedia('(min-width: 1440px)')

openBtn.addEventListener ('click', function () {
  openBtn.classList.add('header__control--openMenu');
  closeBtn.classList.remove('header__control--openMenu');
  headerLogo.classList.add('header__img--openMenu');
  headerSpan.classList.remove('header__span--openMenu');
  headerControls.classList.add('header__controls--openMenu');
  headerNav.classList.remove('header__nav--closeMenu');
  headerNavigation.classList.add('header__navigation--openMenu');
  headerText.classList.remove('header__text--closeMenu');
  headerText.classList.add('header__text--openMenu');
  headerButtons.classList.add('header__buttons--openMenu');
  headerBtnMore.classList.add('header__btn--openMenu');
  headerBtnSign.classList.remove('header__btn--openMenu');
  headerContainer.classList.add('header__container--openMenu');
})

closeBtn.addEventListener ('click', function () {
  openBtn.classList.remove('header__control--openMenu');
  closeBtn.classList.add('header__control--openMenu');
  headerLogo.classList.remove('header__img--openMenu');
  headerSpan.classList.add('header__span--openMenu');
  headerControls.classList.remove('header__controls--openMenu');
  headerNav.classList.add('header__nav--closeMenu');
  headerNavigation.classList.remove('header__navigation--openMenu');
  headerText.classList.add('header__text--closeMenu');
  headerText.classList.remove('header__text--openMenu');
  headerButtons.classList.remove('header__buttons--openMenu');
  headerBtnMore.classList.remove('header__btn--openMenu');
  headerBtnSign.classList.add('header__btn--openMenu');
  headerContainer.classList.remove('header__container--openMenu');
})

function handleTabletChange(e) {
  if (e.matches) {
    openBtn.classList.remove('header__control--openMenu');
    closeBtn.classList.add('header__control--openMenu');
    headerLogo.classList.remove('header__img--openMenu');
    headerSpan.classList.add('header__span--openMenu');
    headerControls.classList.remove('header__controls--openMenu');
    headerNav.classList.add('header__nav--closeMenu');
    headerNavigation.classList.remove('header__navigation--openMenu');
    headerText.classList.add('header__text--closeMenu');
    headerText.classList.remove('header__text--openMenu');
    headerButtons.classList.remove('header__buttons--openMenu');
    headerBtnMore.classList.remove('header__btn--openMenu');
    headerBtnSign.classList.add('header__btn--openMenu');
    headerContainer.classList.remove('header__container--openMenu');
  }
};

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
