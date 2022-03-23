import { getSettings } from './settings.js';

const { TYPES } = getSettings();


const addTextContent = (element, text) => {
  element.textContent = text;
};

const addHTMLContent = (element, text) => {
  element.innerHTML = `${ text } <span>\u{20BD}/ночь</span>`;
};

const addFeatures = (element, features) => {
  const featuresElementsList = [...element.children];

  featuresElementsList.forEach((item) => {
    const isAvailable = features.some((feature) => item.classList.contains(`popup__feature--${ feature }`));

    if (!isAvailable) {
      item.remove();
    }
  });
};

const addPhotos = (element, paths) => {
  element.innerHTML =
    paths.map((path) => `<img src="${ path }" class="popup__photo" width="45" height="40" alt="Фотография жилья">`)
      .join('');
};

const addAvatar = (element, path) => {
  element.src = path;
};

const addInfo = (parent, selector, info, func) => {
  const element = parent.querySelector(selector);
  if (!info) {
    element.style.display = 'none';
  } else {
    func(element, info);
  }
};

const generateCardElement = (card) => {
  const template = document.querySelector('#card').content.querySelector('.popup');
  const {
    author: { avatar },
    offer: { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos }
  } = card;
  const cardElement = template.cloneNode(true);
  addInfo(cardElement, '.popup__title', title, addTextContent);
  addInfo(cardElement, '.popup__text--address', address, addTextContent);
  addInfo(cardElement, '.popup__text--price', price, addHTMLContent);
  addInfo(cardElement, '.popup__type', `${ TYPES[type] }`, addTextContent);
  addInfo(cardElement, '.popup__text--capacity', `${ rooms } комнаты для ${ guests } гостей`, addTextContent);
  addInfo(cardElement, '.popup__text--time', `Заезд после ${ checkin }, выезд до ${ checkout }`, addTextContent);
  addInfo(cardElement, '.popup__description', description, addTextContent);
  addInfo(cardElement, '.popup__features', features, addFeatures);
  addInfo(cardElement, '.popup__photos', photos, addPhotos);
  addInfo(cardElement, '.popup__avatar', avatar, addAvatar);

  return cardElement;
};


export { generateCardElement };
