import './price-slider.js';
import './map.js';
import './avatar.js';
import './photo.js';

import { formValidate } from './form.js';
import { getData } from './server-requests.js';
import { createMarkers } from './markers.js';
import { setFilters, setFiltersState } from './filters.js';
import { reset } from './utils.js';
import { getSettings } from './settings.js';

const { WORK_STATE } = getSettings();

getData((advertisements) => {
  setFiltersState(WORK_STATE);
  createMarkers(advertisements);
  setFilters(advertisements);
});
formValidate();
reset();
