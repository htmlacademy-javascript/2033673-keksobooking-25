import { getSettings } from './settings.js';

const {TYPES} = getSettings();

const addTextContent = (parent, selector, text) => {
  parent.querySelector(selector).textContent = text;
};

const generateCardElements = (cards) => {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector('#card').content.querySelector('.popup');
  cards.forEach(({
                   avatar,
                   offer: {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}
                 }) => {
    const cardHTML = template.cloneNode(true);
    addTextContent(cardHTML, '.popup__title', title);
    addTextContent(cardHTML, '.popup__text--address', address);
    addTextContent(cardHTML, '.popup__text--price', `${ price } \u{20BD}/ночь`);
    addTextContent(cardHTML, '.popup__type', `${ TYPES[type] }`);
    addTextContent(cardHTML, '.popup__text--capacity', `${ rooms } комнаты для ${ guests } гостей`);
    addTextContent(cardHTML, '.popup__text--time', `Заезд после ${checkin}, выезд до ${checkout}`)


    fragment.append(cardHTML);
  });
  document.querySelector('#map-canvas').append(fragment.children[0]);
};

export { generateCardElements };
