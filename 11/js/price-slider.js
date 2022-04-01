import { getElements } from './elements.js';
import { getSettings } from './settings.js';


const { priceSlider: slider, adForm: form } = getElements();
const { MIN_PRICE, HIGH_PRICE, LOW_PRICE } = getSettings();

const priceField = form.querySelector('#price');
const typeField = form.querySelector('#type');


noUiSlider.create(slider, {
  range: {
    min: LOW_PRICE,
    max: HIGH_PRICE,
  },
  start: MIN_PRICE['flat'],
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => parseInt(value, 10),
  }
});

slider.noUiSlider.on('update', () => {
  priceField.value = slider.noUiSlider.get();
});

priceField.addEventListener('input', (e) => {
  slider.noUiSlider.set(+e.target.value);
});

typeField.addEventListener('change', (e) => {
  slider.noUiSlider.updateOptions({
    range: {
      min: LOW_PRICE,
      max: HIGH_PRICE
    },
    start: MIN_PRICE[e.target.value],
    step: 1,
  });
});
