import { generateCardElement } from './generate-card-element.js';
import { getSettings } from './settings.js';
import { getFormFields } from './elements.js';


const { DEFAULT_CENTER, DIGITS, MAIN_MARKER_ICON, SIMPLE_MARKER_ICON, SIMILAR_ADVERTISEMENTS } = getSettings();
const { addressField } = getFormFields();

const createMainMarker = () => {
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
  return mainMarker;
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

  advertisements.slice(0, SIMILAR_ADVERTISEMENTS).forEach((adPoint) => {
    createMarker(adPoint, layer);
  });
};

export { createMainMarker, createMarkers };
