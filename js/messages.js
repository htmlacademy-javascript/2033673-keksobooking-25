import { isEscKey } from './utils.js';

const TIMEOUT = 3000;

const onGetRequestError = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error_request_message');
  errorContainer.textContent = message;
  document.body.appendChild(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, TIMEOUT);
};

const onEscKeydown = (evt, message) => {
  if (isEscKey(evt)) {
    evt.preventDefault();
    message.remove();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

const onPostRequestSuccess = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const message = successTemplate.cloneNode(true);
  document.body.appendChild(message);

  message.addEventListener('click', () => message.remove());
  document.addEventListener('keydown', (evt) => {
    onEscKeydown(evt, message);
  });
};

const onPostRequestError = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const message = errorTemplate.cloneNode(true);
  document.body.appendChild(message);

  message.addEventListener('click', () => message.remove());

  const closeButton = message.querySelector('.error__button');
  closeButton.addEventListener('click', () => message.remove());

  document.addEventListener('keydown', (evt) => {
    onEscKeydown(evt, message);
  });
};

export { onGetRequestError, onPostRequestSuccess, onPostRequestError };
