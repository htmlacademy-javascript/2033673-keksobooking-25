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
