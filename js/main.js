import { getSettings } from './settings.js';
import { getElements } from './elements.js';
import { createAdvertisement } from './create-advertisement.js';
import { generateCardElements } from './generate-card-elements.js';
import { putFormInactiveState, putFormActiveState } from './form-state.js';
import { formValidate } from './form-validate.js';
import { isMapLoaded } from './map.js';
import './map.js';


const { adForm, mapFilters } = getElements();
const { SIMILAR_ADVERTISEMENTS } = getSettings();

const advertisements = Array.from({ length: SIMILAR_ADVERTISEMENTS }, createAdvertisement);

if (!isMapLoaded) {
  putFormInactiveState(adForm, mapFilters);
} else {
  generateCardElements(advertisements);
  putFormActiveState(adForm, mapFilters);
  formValidate(adForm);
}
