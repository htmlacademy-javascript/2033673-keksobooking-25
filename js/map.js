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


const mainMarkerIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

const mainMarker = L.marker(
  TOKYO_CENTER,
  {
    draggable: true,
    icon: mainMarkerIcon,
  }
);

mainMarker.addTo(map);

export { isMapLoaded };
