import './price-slider.js';
import './map.js';
import './avatar.js';
import './photo.js';

import { cityMap } from './map.js';
import { formValidate } from './form-validate.js';
import { getData } from './server-requests.js';
import { formReset } from './form-state.js';
import { createMarkers } from './markers.js';
import { setFilters } from './filters.js';


getData((advertisements) => {
  createMarkers(cityMap, advertisements);
  setFilters(advertisements);
});
formValidate();
formReset();
