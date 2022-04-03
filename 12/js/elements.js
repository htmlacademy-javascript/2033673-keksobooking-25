const getElements = () => ({
  adForm: document.querySelector('.ad-form'),
  mapFilters: document.querySelector('.map__filters'),
  priceSlider: document.querySelector('.ad-form__slider')
});

const getFormFields = () => ({
  avatarField: document.querySelector('#avatar'),
  avatarPreview: document.querySelector('.ad-form-header__preview img'),
  titleField: document.querySelector('#title'),
  addressField: document.querySelector('#address'),
  typeField: document.querySelector('#type'),
  priceField: document.querySelector('#price'),
  timeinField: document.querySelector('#timein'),
  timeoutField: document.querySelector('#timeout'),
  roomsField: document.querySelector('#room_number'),
  capacityField: document.querySelector('#capacity'),
  featuresFields: document.querySelectorAll('.features__checkbox'),
  descriptionField: document.querySelector('#description'),
  photoField: document.querySelector('#images'),
  photoContainer: document.querySelector('.ad-form__photo'),
});

export { getElements, getFormFields };
