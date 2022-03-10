import {getSettings} from './settings.js';
import {getRandomNumber, getRandomList, getAvatarImage} from './utils.js';

const {
  LOW_PRICE,
  HIGH_PRICE,
  TYPES,
  CHECKIN_TIMES,
  CHECKOUT_TIMES,
  FEATURES,
  PHOTO_PATHS,
  LOW_LAT,
  HI_LAT,
  LOW_LNG,
  HI_LNG,
  DIGITS,
  LOW_ROOMS,
  HI_ROOMS,
  LOW_GUESTS,
  HI_GUESTS,
} = getSettings();

const createAdvertisement = () => {
  const types = Object.keys(TYPES);

  const location = {
    lat: getRandomNumber(LOW_LAT, HI_LAT, DIGITS), lng: getRandomNumber(LOW_LNG, HI_LNG, DIGITS),
  };

  return {
    author: {
      avatar: getAvatarImage(),
    },
    offer: {
      title: 'Объявление о сдаче помещения в аренду',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(LOW_PRICE, HIGH_PRICE),
      type: types[getRandomNumber(0, types.length - 1)],
      rooms: getRandomNumber(LOW_ROOMS, HI_ROOMS),
      guests: getRandomNumber(LOW_GUESTS, HI_GUESTS),
      checkin: CHECKIN_TIMES[getRandomNumber(0, CHECKOUT_TIMES.length - 1)],
      checkout: CHECKOUT_TIMES[getRandomNumber(0, CHECKOUT_TIMES.length - 1)],
      features: getRandomList(FEATURES),
      description: 'Просторное помещение неподалёку',
      photos: getRandomList(PHOTO_PATHS),
    },
    location,
  };
};

export {createAdvertisement};
