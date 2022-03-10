import { generateCardElements } from './generate-card-elements.js';
import { getSettings } from './settings.js';
import { createAdvertisement } from './create-advertisement.js';

const {SIMILAR_ADVERTISEMENTS} = getSettings();

const advertisements = Array.from({length: SIMILAR_ADVERTISEMENTS}, createAdvertisement);

generateCardElements(advertisements);
