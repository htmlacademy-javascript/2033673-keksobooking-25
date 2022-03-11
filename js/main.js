import { getSettings } from './settings.js';
import { createAdvertisement } from './create-advertisement.js';
import { generateCardElements } from './generate-card-elements.js';
import { putInactiveState } from './form.js';

putInactiveState();

const {SIMILAR_ADVERTISEMENTS} = getSettings();

const advertisements = Array.from({length: SIMILAR_ADVERTISEMENTS}, createAdvertisement);

generateCardElements(advertisements);
