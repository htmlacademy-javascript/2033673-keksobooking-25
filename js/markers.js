import { createPopup } from './create-popup.js';
import { getSettings } from './settings.js';
import { layer } from './map.js';


const { SIMPLE_MARKER_ICON, SIMILAR_ADVERTISEMENTS } = getSettings();


const createMarker = (point) => {
  const { location: { lat, lng } } = point;
  const marker = L.marker(
    { lat, lng },
    { icon: L.icon(SIMPLE_MARKER_ICON) },
  );

  marker
    .addTo(layer)
    .bindPopup(createPopup(point));
};

const createMarkers = (advertisements) => {
  layer.clearLayers();
  advertisements.slice(0, SIMILAR_ADVERTISEMENTS).forEach((adPoint) => {
    createMarker(adPoint, layer);
  });
};

export { createMarkers };
