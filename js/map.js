import { getSettings } from './settings.js';
import { getElements } from './elements.js';

const { TOKYO_CENTER, DEFAULT_ZOOM, DIGITS } = getSettings();
const { adForm } = getElements();


let isMapLoaded = false;
const addressField = adForm.querySelector('#address');


const map = L.map('map-canvas')
  .on('load', () => {
    isMapLoaded = true;
    addressField.value = `${ TOKYO_CENTER.lat }, ${ TOKYO_CENTER.lng }`;
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
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const mainMarker = L.marker(
  TOKYO_CENTER,
  {
    draggable: true,
    icon: mainMarkerIcon,
  }
);

mainMarker.addTo(map);

mainMarker.on('moveend', (e) => {
  const coordinates = e.target.getLatLng();
  addressField.value = `${ (coordinates.lat).toFixed(DIGITS) }, ${ (coordinates.lng).toFixed(DIGITS) }`;
});

const similarAdvertisementsGroup = L.layerGroup().addTo(map);

const simpleIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const createMarker = (lat, lng) => {
  const marker = L.marker(
    { lat, lng },
    { icon: simpleIcon }
  );

  marker.addTo(similarAdvertisementsGroup);
};

const createMarkers = (advertisements) => {
  advertisements.forEach(({ location: { lat, lng } }) => {
    createMarker(lat, lng);
  });
};

export { isMapLoaded, createMarkers };
