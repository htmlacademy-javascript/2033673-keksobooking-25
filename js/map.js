import { getSettings } from './settings.js';
import { getFormFields } from './elements.js';
import { setFormState } from './form.js';
import { setFiltersState } from './filters.js';

const { DEFAULT_CENTER, DEFAULT_ZOOM, MAIN_MARKER_ICON, DIGITS, DEFAULT_STATE, WORK_STATE } = getSettings();
const { addressField } = getFormFields();


setFormState(DEFAULT_STATE);
setFiltersState(DEFAULT_STATE);
const cityMap = L.map('map-canvas')
  .on('load', () => {
    addressField.value = `${ DEFAULT_CENTER.lat }, ${ DEFAULT_CENTER.lng }`;
    setFormState(WORK_STATE);
    setFiltersState(WORK_STATE);
  })
  .setView(DEFAULT_CENTER, DEFAULT_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(cityMap);


const mainMarker = L.marker(
  DEFAULT_CENTER,
  {
    draggable: true,
    icon: L.icon(MAIN_MARKER_ICON),
  }
);

mainMarker.on('moveend', (e) => {
  const coordinates = e.target.getLatLng();
  addressField.value = `${ (coordinates.lat).toFixed(DIGITS) }, ${ (coordinates.lng).toFixed(DIGITS) }`;
});
mainMarker.addTo(cityMap);

const layer = L.layerGroup().addTo(cityMap);

export { cityMap, mainMarker, layer };
