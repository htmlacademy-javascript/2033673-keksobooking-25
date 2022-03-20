const putFormInactiveState = (form, filters) => {
  form.classList.add('.ad-form--disabled');
  [...form.children].forEach((element) => {
    element.setAttribute('disabled', true);
  });

  filters.classList.add('.map__filters--disabled');
  [...filters.children].forEach((element) => {
    element.setAttribute('disabled', true);
  });
};

const putFormActiveState = (form, filters) => {
  form.classList.remove('.ad-form--disabled');
  [...form.children].forEach((element) => {
    element.removeAttribute('disabled');
  });

  filters.classList.remove('.map__filters--disabled');
  [...filters.children].forEach((element) => {
    element.removeAttribute('disabled');
  });
};


export { putFormInactiveState, putFormActiveState };
