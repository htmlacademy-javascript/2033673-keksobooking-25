import { getElements, getFormFields } from './elements.js';
import { getSettings } from './settings.js';
import { cityMap, mainMarker } from './map.js';

const { adForm, mapFilters, priceSlider } = getElements();
const {
  avatarField,
  titleField,
  typeField,
  addressField,
  timeinField,
  timeoutField,
  roomsField,
  capacityField,
  descriptionField,
  featuresFields,
  photoField,
  priceField,
} = getFormFields();

const { MIN_PRICE, DEFAULT_CENTER, DEFAULT_ZOOM, DEFAULT_AVATAR } = getSettings();

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

const clearFields = () => {
  adForm.reset();
  priceField.setAttribute('value', MIN_PRICE['flat']);
  addressField.setAttribute('value', `${ DEFAULT_CENTER.lat }, ${ DEFAULT_CENTER.lng }`);
  priceSlider.noUiSlider.set(MIN_PRICE['flat']);

  cityMap.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  mainMarker.setLatLng(DEFAULT_CENTER);
};

const formReset = () => {
  const resetButton = document.querySelector('.ad-form__reset');
  resetButton.addEventListener('click', clearFields);
};


export { setInactiveState, setActiveState, clearFields, formReset };
