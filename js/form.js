const adForm = document.querySelector('.ad-form');
const adFormInteractive = [...adForm.children];
const mapFilters = document.querySelector('.map__filters');
const mapFilterInteractive = [...mapFilters.children];


const putInactiveState = () => {
  adForm.classList.add('.ad-form--disabled');
  adFormInteractive.forEach((element) => element.disabled = true);

  mapFilters.classList.add('.map__filters--disabled');
  mapFilterInteractive.forEach((element) => element.disabled = true);
};

const putActiveState = () => {
  adForm.classList.remove('.ad-form--disabled');
  adFormInteractive.forEach((element) => element.disabled = false);

  mapFilters.classList.remove('.map__filters--disabled');
  mapFilterInteractive.forEach((element) => element.disabled = false);
}

export { putInactiveState, putActiveState };
