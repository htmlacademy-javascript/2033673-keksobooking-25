import { getSettings } from './settings.js';
import { getElements, getFormFields } from './elements.js';
import { sendAdvertisement } from './server-requests.js';


const { adForm: form, priceSlider: slider } = getElements();
const { MIN_PRICE, DEFAULT_CENTER, DEFAULT_AVATAR, MAX_ROOMS } = getSettings();
const {
  capacityField,
  roomsField,
  typeField,
  priceField,
  timeinField,
  timeoutField,
  addressField,
  avatarPreview,
  photoContainer
} = getFormFields();

const checkCapacity = (capacity, rooms) =>
  (rooms === MAX_ROOMS) ?
    capacity === 0 :
    (capacity <= rooms && capacity > 0);

const getCapacityErrorMessage = (capacity, rooms) =>
  (rooms === MAX_ROOMS && capacity !== 0) ?
    'Слишком много комнат для гостей' :
    'Количество гостей больше количества комнат';

const checkPrice = (price, type) => price >= MIN_PRICE[type];

const getPriceErrorMessage = (price, type) => {
  if (price <= MIN_PRICE[type]) {
    return 'Меньше минимального значения';
  }
};

const formValidate = () => {
  const pristine = new Pristine(form, {
    classTo: 'ad-form__element',
    errorTextClass: 'ad-form__error-message',
    errorTextParent: 'ad-form__element',
  });

  pristine.addValidator(
    capacityField,
    () => checkCapacity(+capacityField.value, +roomsField.value),
    () => getCapacityErrorMessage(+capacityField.value, +roomsField.value),
  );

  pristine.addValidator(
    priceField,
    () => checkPrice(+priceField.value, typeField.value),
    () => getPriceErrorMessage(+priceField.value, typeField.value)
  );

  roomsField.addEventListener('change', () => {
    pristine.validate(capacityField);
  });

  typeField.addEventListener('change', (evt) => {
    priceField.placeholder = MIN_PRICE[evt.target.value];
    pristine.validate(priceField);
  });

  slider.noUiSlider.on('update', () => {
    pristine.validate(priceField);
  });

  timeinField.addEventListener('change', (evt) => {
    timeoutField.value = evt.target.value;
  });

  timeoutField.addEventListener('change', (evt) => {
    timeinField.value = evt.target.value;
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      sendAdvertisement(formData);
    }
  });
};


const setFormState = (state) => {
  switch (state) {
    case 'active': {
      form.classList.remove('.ad-form--disabled');
      [...form.children].forEach((element) => {
        element.removeAttribute('disabled');
      });
      slider.removeAttribute('disabled');
      break;
    }
    case 'inactive': {
      form.classList.add('.ad-form--disabled');
      [...form.children].forEach((element) => {
        element.setAttribute('disabled', true);
      });
      slider.setAttribute('disabled', true);
      break;
    }
  }
};

const clearForm = () => {
  form.reset();
  priceField.setAttribute('value', MIN_PRICE['flat']);
  addressField.setAttribute('value', `${ DEFAULT_CENTER.lat }, ${ DEFAULT_CENTER.lng }`);
  slider.noUiSlider.set(MIN_PRICE['flat']);
  avatarPreview.src = DEFAULT_AVATAR;
  photoContainer.innerHTML = '';
};


export { formValidate, setFormState, clearForm };
