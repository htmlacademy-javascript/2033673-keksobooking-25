import { getSettings } from './settings.js';
import { createAdvertisement } from './create-advertisement.js';
import { formValidate } from './form-validate.js';
import { mapInit, createMarkers } from './map.js';
import { putFormInactiveState } from './form-state.js';
import { priceSliderInit } from './price-slider.js';


const { SIMILAR_ADVERTISEMENTS } = getSettings();

const advertisements = Array.from({ length: SIMILAR_ADVERTISEMENTS }, createAdvertisement);

priceSliderInit();
putFormInactiveState();
const map = mapInit();
createMarkers(map, advertisements);
formValidate();
