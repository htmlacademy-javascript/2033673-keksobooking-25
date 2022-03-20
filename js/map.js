import { getSettings } from './settings.js';

const { TOKYO_CENTER, DEFAULT_ZOOM } = getSettings();
let isMapLoaded = false;

const map = L.map('map-canvas')
  .on('load', () => {
    isMapLoaded = true;
  })
  .setView(TOKYO_CENTER, DEFAULT_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

export { isMapLoaded };
