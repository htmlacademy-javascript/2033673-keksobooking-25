const SIMILAR_ADVERTISEMENTS = 10;

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

  return +(Math.random() * (end + 1 / 10 ** digits - begin) + begin).toFixed(digits);
};

const getAvatarImage = () => {
  const imageNumber = getRandomNumber(1, SIMILAR_ADVERTISEMENTS)
  return `img/avatars/user${imageNumber < 10 ? '0' + imageNumber : imageNumber}.png`
}

const createAdvertisement = () => {
  return {
    author: {
      avatar: '',
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
  }
};
