import { getFilters } from './elements.js';

const { typeFilter } = getFilters();

const setFilters = (advertisements) => {
  let filterAdvertisements;
  typeFilter.addEventListener('change', (e) => {
    filterAdvertisements = advertisements.filter((ad) => ad.offer.type === e.target.value);
    console.log(filterAdvertisements);
  });
};

export { setFilters };
