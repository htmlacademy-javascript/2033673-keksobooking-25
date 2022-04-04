import './price-slider.js';
import './map.js';
import './avatar.js';
import './photo.js';

import { formValidate } from './form.js';
import { getData } from './server-requests.js';
import { createMarkers } from './markers.js';
import { setFilters } from './filters.js';
import { reset } from './utils.js';


getData((advertisements) => {
  createMarkers(advertisements);
  setFilters(advertisements);
});
formValidate();
reset();
