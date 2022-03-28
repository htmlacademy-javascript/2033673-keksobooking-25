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

const onPostRequestSuccess = () => {
  const message = document.querySelector('#success').content.querySelector('.success');
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, TIMEOUT);
};

const onPostRequestError = () => {
  const message = document.querySelector('#error').content.querySelector('.error');
  document.body.appendChild(message);

  const closeButton = message.querySelector('.error__button');
  closeButton.addEventListener('click', () => {
    message.remove();
  });
};

export { onGetRequestError, onPostRequestSuccess, onPostRequestError };
