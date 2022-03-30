import { getSettings } from './settings.js';
import { getElements, getFormFields } from './elements.js';
import { setActiveState, setInactiveState } from './form-state.js';
import { createMainMarker } from './markers.js';

const { TOKYO_CENTER, DEFAULT_ZOOM } = getSettings();
const { adForm, mapFilters } = getElements();
const { addressField } = getFormFields();


setInactiveState();
const cityMap = L.map('map-canvas')
  .on('load', () => {
    addressField.value = `${ TOKYO_CENTER.lat }, ${ TOKYO_CENTER.lng }`;
    setActiveState(adForm, mapFilters);
  })
  .setView(TOKYO_CENTER, DEFAULT_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(cityMap);

const mainMarker = createMainMarker();
mainMarker.addTo(cityMap);

export { cityMap, mainMarker };
