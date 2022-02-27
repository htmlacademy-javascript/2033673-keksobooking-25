const SIMILAR_ADVERTISEMENTS = 10;
const LOW_PRICE = 1;
const HIGH_PRICE = 1000;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTO_PATHS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const LOW_LAT = 35.65000;
const HI_LAT = 35.7000;
const LOW_LNG = 139.70000;
const HI_LNG = 139.80000;
const DIGITS = 5;
const LOW_ROOMS = 1;
const HI_ROOMS = 6;
const LOW_GUESTS = 1;
const HI_GUESTS = 10;

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

const getAvatarImage = () => {
  const imageNumber = getRandomNumber(1, SIMILAR_ADVERTISEMENTS);
  return `img/avatars/user${imageNumber < 10 ? '0' + imageNumber : imageNumber}.png`;
};

const getRandomList = (array) => {
  const times = getRandomNumber(1, array.length - 1);
  const result = [];
  for (let i = 0; i < times; i++) {
    result.push(array[getRandomNumber(0, array.length - 1)]);
  }
  return [...new Set(result)];
};

const createAdvertisement = () => {

  const location = {
    lat: getRandomNumber(LOW_LAT, HI_LAT, DIGITS),
    lng: getRandomNumber(LOW_LNG, HI_LNG, DIGITS),
  };

  return {
    author: {
      avatar: getAvatarImage(),
    },
    offer: {
      title: 'Объявление о сдаче помещения в аренду',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(LOW_PRICE, HIGH_PRICE),
      type: TYPES[getRandomNumber(0, TYPES.length - 1)],
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

Array.from({length: SIMILAR_ADVERTISEMENTS}, createAdvertisement);
