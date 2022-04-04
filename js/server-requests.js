import { getSettings } from './settings.js';
import { onGetRequestError, onPostRequestError, onPostRequestSuccess } from './messages.js';
import { clearForm } from './form.js';
import { getElements } from './elements.js';

const { GET_DATA_SERVER, POST_DATA_SERVER } = getSettings();
const { submitButton } = getElements();

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
  submitButton.setAttribute('disabled', true);
  fetch(POST_DATA_SERVER, { method: 'POST', body: formData })
    .then((response) => {
      if (response.ok) {
        onPostRequestSuccess();
        clearForm();
      } else {
        onPostRequestError();
      }
    })
    .catch(() => onPostRequestError())
    .finally(() => {
      submitButton.removeAttribute('disabled');
    });
};

export { getData, sendAdvertisement };
