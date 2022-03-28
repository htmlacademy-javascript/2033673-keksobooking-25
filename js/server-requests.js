import { getSettings } from './settings.js';
import { onPostRequestError, onPostRequestSuccess } from './messages.js';

const { GET_DATA_SERVER, SIMILAR_ADVERTISEMENTS, POST_DATA_SERVER } = getSettings();

const renderAdvertisements = (map, onSuccess, onError) => {
  fetch(GET_DATA_SERVER)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onError('Ошибка в получении данных. Попробуйте ещё раз.');
      }
    })
    .then((data) => onSuccess(map, data.slice(0, SIMILAR_ADVERTISEMENTS)))
    .catch((err) => onError('Ошибка в получении данных. Попробуйте ещё раз.'));
};

const sendAdvertisements = (formData) => {
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

export { renderAdvertisements, sendAdvertisements };
