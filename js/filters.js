import { getElements, getMapFilters } from './elements.js';
import { createMarkers } from './markers.js';
import { cityMap, mainMarker } from './map.js';
import { debounce } from './utils.js';
import { getSettings } from './settings.js';

const { mapFilters } = getElements();
const {
  DELAY_TIMEOUT,
  CHEAP_PRICE,
  MIDDLE_PRICE,
  DEFAULT_CENTER,
  DEFAULT_ZOOM,
  ANY_LEVEL_PRICE,
  LOW_LEVEL_PRICE,
  MIDDLE_LEVEL_PRICE,
  HIGH_LEVEL_PRICE
} = getSettings();

const { typeFilter, priceFilter, roomsFilter, guestsFilter, featureFilters } = getMapFilters();

const applyMapFilters = (item) => {
  const filterValues = {
    type: typeFilter.value,
    price: priceFilter.value,
    rooms: roomsFilter.value,
    guests: guestsFilter.value,
    features: featureFilters.filter((filter) => filter.checked),
  };

  return Object.keys(filterValues).every((filter) => {
    if (filter === 'type') {
      return item.offer.type === filterValues.type || filterValues.type === 'any';
    }
    if (filter === 'price') {
      switch (filterValues.price) {
        case ANY_LEVEL_PRICE:
          return true;
        case MIDDLE_LEVEL_PRICE:
          return item.offer.price >= CHEAP_PRICE && item.offer.price <= MIDDLE_PRICE;
        case LOW_LEVEL_PRICE:
          return item.offer.price < CHEAP_PRICE;
        case HIGH_LEVEL_PRICE:
          return item.offer.price > MIDDLE_PRICE;
      }
    }
    if (filter === 'rooms') {
      return item.offer.rooms === +filterValues.rooms || filterValues.rooms === 'any';
    }
    if (filter === 'guests') {
      return item.offer.guests === +filterValues.guests || filterValues.guests === 'any';
    }
    if (filter === 'features') {
      if (filterValues.features.length === 0) {
        return true;
      }
      if (item.offer.features) {
        return filterValues.features.every((feature) => item.offer.features.includes(feature.value));
      }
    }
  });
};

const getFilterAdvertisements = (advertisements) => debounce(() => {
  const filterAdvertisements = advertisements.filter((item) => applyMapFilters(item));
  createMarkers(filterAdvertisements);
}, DELAY_TIMEOUT)();

const setFilters = (advertisements) => {
  mapFilters.addEventListener('change', () => {
    cityMap.closePopup();
    getFilterAdvertisements(advertisements);
  });

  mapFilters.addEventListener('reset', () => {
    getFilterAdvertisements(advertisements);
  });
};

const setFiltersState = (state) => {
  switch (state) {
    case 'active': {
      mapFilters.classList.remove('.map__filters--disabled');
      [...mapFilters.children].forEach((element) => {
        element.removeAttribute('disabled');
      });
      break;
    }
    case 'inactive': {
      mapFilters.classList.add('.map__filters--disabled');
      [...mapFilters.children].forEach((element) => {
        element.setAttribute('disabled', true);
      });
      break;
    }
  }
};

const clearFilters = () => {
  mapFilters.reset();
  cityMap.closePopup();
  cityMap.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  mainMarker.setLatLng(DEFAULT_CENTER);
};

export { setFilters, setFiltersState, clearFilters };
