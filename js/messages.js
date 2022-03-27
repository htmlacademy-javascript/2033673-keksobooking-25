const ERROR_TIMEOUT = 3000;

const onErrorRequest = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error_request_message');
  errorContainer.textContent = message;
  document.body.appendChild(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, ERROR_TIMEOUT);
};

export { onErrorRequest };
