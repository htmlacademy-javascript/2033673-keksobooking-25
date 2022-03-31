import { getSettings } from './settings.js';
import { onGetRequestError, onPostRequestError, onPostRequestSuccess } from './messages.js';
import { clearFields } from './form-state.js';

const { GET_DATA_SERVER, POST_DATA_SERVER } = getSettings();

const getData = (onSuccess) => {
  fetch(GET_DATA_SERVER)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onGetRequestError('Ошибка в получении данных. Попробуйте ещё раз.');
      }
    })
    .then((data) => onSuccess(data))
    .catch(() => onGetRequestError('Ошибка в получении данных. Попробуйте ещё раз.'));
};

const sendAdvertisement = (formData) => {
  fetch(POST_DATA_SERVER, { method: 'POST', body: formData })
    .then((response) => {
      if (response.ok) {
        onPostRequestSuccess();
        clearFields();
      } else {
        onPostRequestError();
      }
    })
    .catch(() => onPostRequestError());
};

export { getData, sendAdvertisement };
