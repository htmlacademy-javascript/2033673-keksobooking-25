const checkCapacity = (capacity, rooms) => {
  if (rooms === 100) {
    return capacity === 0;
  } else {
    return (capacity <= rooms && capacity > 0);
  }
};

const getCapacityErrorMessage = (capacity, rooms) => {
  if (rooms === 100 && capacity !== 0) {
    return 'Слишком много комнат для гостей'
  } else {
    return 'Количество гостей больше количества комнат'
  }
}


const validateForm = (form) => {
  const pristine = new Pristine(form, {
    classTo: 'ad-form__element',
    errorTextClass: 'ad-form__error-message',
    errorTextParent: 'ad-form__element',
  });

  const capacityField = form.querySelector('#capacity');
  const roomsField = form.querySelector('#room_number');

  pristine.addValidator(
    capacityField,
    () => checkCapacity(parseInt(capacityField.value), parseInt(roomsField.value)),
    () => getCapacityErrorMessage(parseInt(capacityField.value), parseInt(roomsField.value)),
  );

  roomsField.addEventListener('change', () => {
    pristine.validate(capacityField);
  });

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


export { validateForm };
