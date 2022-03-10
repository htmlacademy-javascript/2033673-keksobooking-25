import { getSettings } from './settings.js';

const {TYPES} = getSettings();

const addTextContent = (parent, selector, text) => {
  parent.querySelector(selector).textContent = text;
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

const generateCardElements = (cards) => {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector('#card').content.querySelector('.popup');
  cards.forEach(({
                   avatar,
                   offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}
                 }) => {
    const cardElement = template.cloneNode(true);
    addTextContent(cardElement, '.popup__title', title);
    addTextContent(cardElement, '.popup__text--address', address);
    addTextContent(cardElement, '.popup__text--price', `${ price } \u{20BD}/ночь`);
    addTextContent(cardElement, '.popup__type', `${ TYPES[type] }`);
    addTextContent(cardElement, '.popup__text--capacity', `${ rooms } комнаты для ${ guests } гостей`);
    addTextContent(cardElement, '.popup__text--time', `Заезд после ${ checkin }, выезд до ${ checkout }`);
    addTextContent(cardElement, '.popup__description', description);
    addFeatures(cardElement, features);


    fragment.append(cardElement);
  });
  document.querySelector('#map-canvas').append(fragment.children[0]);
};

export { generateCardElements };
