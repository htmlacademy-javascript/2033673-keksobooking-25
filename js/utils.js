import { getSettings } from './settings.js';

const { SIMILAR_ADVERTISEMENTS } = getSettings();

const getRandomNumber = (begin, end, digits = 0) => {

  if (end < begin) {
    [begin, end] = [end, begin];
  }

  if (begin < 0) {
    begin = 0;
  }

  if (end < 0) {
    end = 0;
  }

  if (digits < 0) {
    digits = 0;
  }

  return +(Math.random() * (end - begin) + begin).toFixed(digits);
};

const generateAvatar = () => {
  const avatarNumbers = [];
  let imageNumber;
  return () => {
    do {
      imageNumber = getRandomNumber(1, SIMILAR_ADVERTISEMENTS);
    } while (avatarNumbers.includes(imageNumber));
    avatarNumbers.push(imageNumber);
    return `img/avatars/user${ imageNumber < 10 ? `0${ imageNumber }` : imageNumber }.png`;
  };
};

const getRandomList = (array) => {
  const times = getRandomNumber(0, array.length);
  const result = [];
  for (let i = 0; i < times; i++) {
    result.push(array[getRandomNumber(0, array.length - 1)]);
  }
  return [...new Set(result)];
};

const getAvatarImage = generateAvatar();


const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomNumber, getAvatarImage, getRandomList, debounce };
