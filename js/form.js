const putInactiveState = (form, filters) => {
  form.classList.add('.ad-form--disabled');
  [...form.children].forEach((element) => {
    element.setAttribute('disabled', true);
  });

  filters.classList.add('.map__filters--disabled');
  [...filters.children].forEach((element) => {
    element.setAttribute('disabled', true);
  });
};

const putActiveState = (form, filters) => {
  form.classList.add('.ad-form--disabled');
  [...form.children].forEach((element) => {
    element.setAttribute('disabled', false);
  });

  filters.classList.add('.map__filters--disabled');
  [...filters.children].forEach((element) => {
    element.setAttribute('disabled', false);
  });
};

const validateForm = (form) => {
  const pristine = new Pristine(form, {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
  });

  const capacityField = form.querySelector('#capacity');
  const roomsField = form.querySelector('#room_number');

  pristine.addValidator(
    capacityField,
    () => {
      if (roomsField.value === '100') {
        return capacityField.value === '0';
      } else {
        return (capacityField.value <= roomsField.value && capacityField.value > 0);
      }
    },
    'Количество гостей больше количества комнат',
  );

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  });
};

export { putInactiveState, putActiveState, validateForm };
