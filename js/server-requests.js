import { getSettings } from './settings.js';

const { GET_DATA_SERVER, SIMILAR_ADVERTISEMENTS } = getSettings();

const getData = (onSuccess, onError) => {
  fetch(GET_DATA_SERVER)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onError('Ошибка в получении данных. Попробуйте ещё раз.');
      }
    })
    .then((data) => onSuccess(data.slice(0, SIMILAR_ADVERTISEMENTS)))
    .catch((err) => onError('Ошибка в получении данных. Попробуйте ещё раз.'));
};

export { getData };
