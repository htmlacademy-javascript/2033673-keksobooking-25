import './map.js';

import { formValidate } from './form-validate.js';
import { createMarkers } from './map.js';
import { putFormInactiveState } from './form-state.js';
import { priceSliderInit } from './price-slider.js';
import { getData } from './server-requests.js';
import { onErrorRequest } from './messages.js';


priceSliderInit();
putFormInactiveState();
getData(createMarkers, onErrorRequest);
formValidate();
