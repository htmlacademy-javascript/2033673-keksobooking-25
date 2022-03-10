import { getSettings } from './settings.js';

const {TYPES} = getSettings();

const addTextContent = (parent, selector, text) => {
  parent.querySelector(selector).textContent = text;
};

const addHTMLContent = (parent, selector, html) => {
  parent.querySelector(selector).innerHTML = html;
};

const addFeatures = (cardElement, features) => {
  const featuresElementsList = cardElement.querySelectorAll('.popup__feature');

  featuresElementsList.forEach((element) => {
    const isAvailable = features.some((feature) => element.classList.contains(`popup__feature--${ feature }`));

    if (!isAvailable) {
      element.remove();
    }
  });
};

const addPhotos = (cardElement, paths) => {
  const photosContainer = cardElement.querySelector('.popup__photos');
  const imageTemplate = cardElement.querySelector('.popup__photo');
  photosContainer.innerHTML = '';
  paths.forEach((path) => {
    const img = imageTemplate.cloneNode(true);
    img.src = path;
    photosContainer.append(img);
  });
};

const addAvatar = (cartElement, path) => {
  const avatar = cartElement.querySelector('.popup__avatar');
  avatar.src = path;
};

const generateCardElements = (cards) => {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector('#card').content.querySelector('.popup');
  cards.forEach(({
                   author: {avatar},
                   offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}
                 }) => {
    const cardElement = template.cloneNode(true);
    addTextContent(cardElement, '.popup__title', title);
    addTextContent(cardElement, '.popup__text--address', address);
    addHTMLContent(cardElement, '.popup__text--price', `${ price } <span>\u{20BD}/ночь</span>`);
    addTextContent(cardElement, '.popup__type', `${ TYPES[type] }`);
    addTextContent(cardElement, '.popup__text--capacity', `${ rooms } комнаты для ${ guests } гостей`);
    addTextContent(cardElement, '.popup__text--time', `Заезд после ${ checkin }, выезд до ${ checkout }`);
    addTextContent(cardElement, '.popup__description', description);
    addFeatures(cardElement, features);
    addPhotos(cardElement, photos);
    addAvatar(cardElement, avatar);

    fragment.append(cardElement);
  });
  document.querySelector('#map-canvas').append(fragment.children[0]);
};

export { generateCardElements };
