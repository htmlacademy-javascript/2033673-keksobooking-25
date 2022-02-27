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

const getPrice = () => {
  return getRandomNumber(LOW_PRICE, HIGH_PRICE);
};

const getType = () => {
  return TYPES[getRandomNumber(0, TYPES.length)];
};

const getRooms = () => {
  return getRandomNumber(LOW_ROOMS, HI_ROOMS);
};

const getGuests = () => {
  return getRandomNumber(LOW_GUESTS, HI_GUESTS);
};


const createAdvertisement = () => {
  return {
    author: {
      avatar: getAvatarImage(),
    },
    offer: {
      title: '',
      address: '',
      price: 0,
      type: '',
      rooms: 0,
      guests: 0,
      checkin: 0,
      checkout: 0,
      features: [],
      description: '',
      photos: [],
    },
    location: {
      lat: 0.0,
      lng: 0.0,
    }
  };
};
