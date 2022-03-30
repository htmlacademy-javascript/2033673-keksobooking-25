import { getSettings } from './settings.js';
import { onGetRequestError, onPostRequestError, onPostRequestSuccess } from './messages.js';
import { createMarkers } from './markers.js';

const { GET_DATA_SERVER, SIMILAR_ADVERTISEMENTS, POST_DATA_SERVER } = getSettings();

const renderAdvertisements = (map) => {
  fetch(GET_DATA_SERVER)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onGetRequestError('Ошибка в получении данных. Попробуйте ещё раз.');
      }
    })
    .then((data) => createMarkers(map, data.slice(0, SIMILAR_ADVERTISEMENTS)))
    .catch((err) => onGetRequestError('Ошибка в получении данных. Попробуйте ещё раз.'));
};

const sendAdvertisement = (formData) => {
  fetch(POST_DATA_SERVER, { method: 'POST', body: formData })
    .then((response) => {
      if (response.ok) {
        onPostRequestSuccess();
      } else {
        onPostRequestError();
      }
    })
    .catch((err) => onPostRequestError());
};

export { renderAdvertisements, sendAdvertisement };
