import { getSettings } from './settings.js';
import { getElements, getFormFields } from './elements.js';
import { setActiveState, setInactiveState } from './form-state.js';
import { createMainMarker } from './markers.js';

const { DEFAULT_CENTER, DEFAULT_ZOOM } = getSettings();
const { adForm, mapFilters } = getElements();
const { addressField } = getFormFields();


setInactiveState();
const cityMap = L.map('map-canvas')
  .on('load', () => {
    addressField.value = `${ DEFAULT_CENTER.lat }, ${ DEFAULT_CENTER.lng }`;
    setActiveState(adForm, mapFilters);
  })
  .setView(DEFAULT_CENTER, DEFAULT_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(cityMap);

const mainMarker = createMainMarker();
mainMarker.addTo(cityMap);

const layer = L.layerGroup().addTo(cityMap);

export { cityMap, mainMarker, layer };
