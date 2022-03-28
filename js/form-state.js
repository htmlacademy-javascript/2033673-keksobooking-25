import { getElements } from './elements.js';

const { adForm, mapFilters, priceSlider } = getElements();

const setInactiveState = () => {
  adForm.classList.add('.ad-form--disabled');
  [...adForm.children].forEach((element) => {
    element.setAttribute('disabled', true);
  });

  priceSlider.setAttribute('disabled', true);

  mapFilters.classList.add('.map__filters--disabled');
  [...mapFilters.children].forEach((element) => {
    element.setAttribute('disabled', true);
  });
};

const setActiveState = () => {
  adForm.classList.remove('.ad-form--disabled');
  [...adForm.children].forEach((element) => {
    element.removeAttribute('disabled');
  });

  priceSlider.removeAttribute('disabled');


  mapFilters.classList.remove('.map__filters--disabled');
  [...mapFilters.children].forEach((element) => {
    element.removeAttribute('disabled');
  });
};


export { setInactiveState, setActiveState };
