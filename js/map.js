import { getSettings } from './settings.js';

const { TOKYO_CENTER } = getSettings();

const map = L.map('map-canvas')
  .setView(TOKYO_CENTER, 11);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
