import { getElements } from './elements.js';
import { createMarkers } from './markers.js';
import { cityMap } from './map.js';
import { debounce } from './utils.js';
import { getSettings } from './settings.js';

const { mapFilters } = getElements();
const { DELAY_TIMEOUT, CHEAP_PRICE, MIDDLE_PRICE } = getSettings();

const typeFilter = (item, type) => item.offer.type === type || type === 'any';

const priceFilter = (item, priceLevel) => {
  switch (priceLevel) {
    case 'any':
      return true;
    case 'middle':
      return item.offer.price >= CHEAP_PRICE && item.offer.price <= MIDDLE_PRICE;
    case 'low':
      return item.offer.price < CHEAP_PRICE;
    case 'high':
      return item.offer.price > MIDDLE_PRICE;
  }
};

const roomsFilter = (item, rooms) => item.offer.rooms === +rooms || rooms === 'any';

const guestsFilter = (item, guests) => item.offer.guests === +guests || guests === 'any';

const getRank = (item) => {
  const featureFilters = [...document.querySelectorAll('.map__checkbox')];
  const features = featureFilters.filter((filter) => filter.checked);
  let rank = 0;
  if (item.offer.features) {
    features.forEach((feature) => {
      if (item.offer.features.includes(feature.value)) {
        rank++;
      }
    });
  }
  return rank;
};

const featuresCompare = (itemA, itemB) => {
  const rankA = getRank(itemA);
  const rankB = getRank(itemB);
  return rankB - rankA;
};

const setFilters = (advertisements) => {
  const filters = {
    type: 'any',
    price: 'any',
    rooms: 'any',
    guests: 'any',
  };
  mapFilters.addEventListener('change', (e) => {
    cityMap.closePopup();
    filters[e.target.dataset.filter] = e.target.value;
    debounce(() => {
      const filterAdvertisements = advertisements
        .filter((item) => typeFilter(item, filters.type))
        .filter((item) => priceFilter(item, filters.price))
        .filter((item) => roomsFilter(item, filters.rooms))
        .filter((item) => guestsFilter(item, filters.guests))
        .sort(featuresCompare);
      createMarkers(cityMap, filterAdvertisements);
    }, DELAY_TIMEOUT)();
  });
};


export { setFilters };
