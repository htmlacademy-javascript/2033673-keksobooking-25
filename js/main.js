import { getSettings } from './settings.js';
import { getElements } from './elements.js';
import { createAdvertisement } from './create-advertisement.js';
import { generateCardElement } from './generate-card-element.js';
import { putFormInactiveState, putFormActiveState } from './form-state.js';
import { formValidate } from './form-validate.js';
import { isMapLoaded, createMarkers } from './map.js';
import './map.js';


const { adForm, mapFilters } = getElements();
const { SIMILAR_ADVERTISEMENTS } = getSettings();

const advertisements = Array.from({ length: SIMILAR_ADVERTISEMENTS }, createAdvertisement);

if (!isMapLoaded) {
  putFormInactiveState(adForm, mapFilters);
} else {
  putFormActiveState(adForm, mapFilters);
  // generateCardElements(advertisements);
  createMarkers(advertisements);
  formValidate(adForm);
}
