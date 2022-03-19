import { getSettings } from './settings.js';
import { getElements } from './elements.js';
import { createAdvertisement } from './create-advertisement.js';
import { generateCardElements } from './generate-card-elements.js';
import { putInactiveState, putActiveState } from './form.js';
import { validateForm } from './validate-form.js';

import './map.js';


const { adForm, mapFilters } = getElements();
const { SIMILAR_ADVERTISEMENTS } = getSettings();

const advertisements = Array.from({ length: SIMILAR_ADVERTISEMENTS }, createAdvertisement);

putInactiveState(adForm, mapFilters);
generateCardElements(advertisements);
putActiveState(adForm, mapFilters);

validateForm(adForm);
