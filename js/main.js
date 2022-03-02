import {getSettings} from './settings.js';
import {createAdvertisement} from './create-advertisement.js';

const {SIMILAR_ADVERTISEMENTS} = getSettings();

Array.from({length: SIMILAR_ADVERTISEMENTS}, createAdvertisement);
