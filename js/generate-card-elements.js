const generateCardElements = (cards) => {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector('#card').content.querySelector('.popup');
  cards.forEach((card) => {
    const cardHTML = template.cloneNode(true);
    cardHTML.querySelector('.popup__title').textContent = card.offer.title;
    cardHTML.querySelector('.popup__text--address').textContent = card.offer.address;
    cardHTML.querySelector('.popup__text--price').textContent = `${card.offer.price} \u{20BD}/ночь`;
    fragment.append(cardHTML);
  });
  document.querySelector('#map-canvas').append(fragment.children[0]);
};

export { generateCardElements };
