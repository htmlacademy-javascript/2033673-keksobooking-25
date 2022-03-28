const getSettings = () => ({
  GET_DATA_SERVER: 'https://25.javascript.pages.academy/keksobooking/data',
  POST_DATA_SERVER: 'https://25.javascript.pages.academy/keksobookin',
  SIMILAR_ADVERTISEMENTS: 10,
  LOW_PRICE: 0,
  HIGH_PRICE: 100000,
  TYPES: {
    'palace': 'Дворец',
    'flat': 'Квартира',
    'house': 'Дом',
    'bungalow': 'Бунгало',
    'hotel': 'Отель',
  },
  MIN_PRICE: {
    'bungalow': 0,
    'flat': 1000,
    'hotel': 3000,
    'house': 5000,
    'palace': 10000,
  },
  CHECKIN_TIMES: ['12:00', '13:00', '14:00'],
  CHECKOUT_TIMES: ['12:00', '13:00', '14:00'],
  FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  PHOTO_PATHS: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ],
  LOW_LAT: 35.65000,
  HI_LAT: 35.7000,
  LOW_LNG: 139.70000,
  HI_LNG: 139.80000,
  DIGITS: 5,
  LOW_ROOMS: 1,
  HI_ROOMS: 6,
  LOW_GUESTS: 1,
  HI_GUESTS: 10,
  TOKYO_CENTER: {
    lat: 35.6895,
    lng: 139.692,
  },
  DEFAULT_ZOOM: 11,
  MAIN_MARKER_ICON: {
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52]
  },
  SIMPLE_MARKER_ICON: {
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  }
});

export { getSettings };
