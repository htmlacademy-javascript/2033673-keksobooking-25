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
  const pristine = new Pristine(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    return pristine.validate();
  });
};

export { putInactiveState, putActiveState, validateForm };
