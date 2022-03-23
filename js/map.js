import { getSettings } from './settings.js';
import { getElements } from './elements.js';
import { generateCardElement } from './generate-card-element.js';
import { putFormActiveState } from './form-state.js';

const { TOKYO_CENTER, DEFAULT_ZOOM, DIGITS, MAIN_MARKER_ICON, SIMPLE_MARKER_ICON } = getSettings();
const { adForm, mapFilters } = getElements();


const addressField = adForm.querySelector('#address');


const createMainMarker = () => {
  const mainMarker = L.marker(
    TOKYO_CENTER,
    {
      draggable: true,
      icon: L.icon(MAIN_MARKER_ICON),
    }
  );

  mainMarker.on('moveend', (e) => {
    const coordinates = e.target.getLatLng();
    addressField.value = `${ (coordinates.lat).toFixed(DIGITS) }, ${ (coordinates.lng).toFixed(DIGITS) }`;
  });
  return mainMarker;
};


const mapInit = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      addressField.value = `${ TOKYO_CENTER.lat }, ${ TOKYO_CENTER.lng }`;
      putFormActiveState(adForm, mapFilters);
    })
    .setView(TOKYO_CENTER, DEFAULT_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  createMainMarker().addTo(map);
  return map;
};


const createMarker = (point, layer) => {
  const { location: { lat, lng } } = point;
  const marker = L.marker(
    { lat, lng },
    { icon: L.icon(SIMPLE_MARKER_ICON) },
  );

  marker
    .addTo(layer)
    .bindPopup(generateCardElement(point));
};

const createMarkers = (map, advertisements) => {
  const layer = L.layerGroup().addTo(map);

  advertisements.forEach((adPoint) => {
    createMarker(adPoint, layer);
  });
};

export { mapInit, createMarkers };
