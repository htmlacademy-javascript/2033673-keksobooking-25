import { getElements } from './elements.js';

const { mapFilters } = getElements();

const typeFilter = (item, type) => {
  return item.offer.type === type || type === 'any';
};

const priceFilter = (item, priceLevel) => {
  switch (priceLevel) {
    case 'any':
      return true;
    case 'middle':
      return item.offer.price >= 10000 && item.offer.price <= 50000;
    case 'low':
      return item.offer.price < 10000;
    case 'high':
      return item.offer.price > 50000;
  }
};

const roomsFilter = (item, rooms) => {
  return item.offer.rooms === +rooms || rooms === 'any';
};

const guestsFilter = (item, guests) => {
  return item.offer.guests === +guests || guests === 'any';
};

const setFilters = (advertisements) => {
  const filters = {
    type: 'any',
    price: 'any',
    rooms: 'any',
    guests: 'any',
  };
  mapFilters.addEventListener('change', (e) => {
    filters[e.target.id.split('-')[1]] = e.target.value;
    const filterAdvertisements = advertisements
      .filter((item) => typeFilter(item, filters.type))
      .filter((item) => priceFilter(item, filters.price))
      .filter((item) => roomsFilter(item, filters.rooms))
      .filter((item) => guestsFilter(item, filters.guests));
    console.log(filterAdvertisements);
  });
};


export { setFilters };
