const getRandomInteger = (start, stop) => {
  if (stop < start) {
    return 'ОШИБКА. Неверно указан диапазон.';
  }

  if (start === stop) {
    return 'ОШИБКА. Диапазон не может состоять из одного числа.';
  }

  if (start < 0) {
    return 'ОШИБКА. Возможен только положительный диапазон значений.';
  }

  return Math.floor(Math.random() * (stop + 1 - start) + start);
};

const getRandomFloat = (start, stop, digits) => {
  if (stop < start) {
    return 'ОШИБКА. Неверно указан диапазон.';
  }

  if (start === stop) {
    return 'ОШИБКА. Диапазон не может состоять из одного числа.';
  }

  if (start < 0) {
    return 'ОШИБКА. Возможен только положительный диапазон значений.';
  }

  if (digits < 0) {
    return 'ОШИБКА. Количество знаков после запятой не должно быть отрицательным.';
  }

  return (Math.random() * (stop + 1 / 10 ** digits - start) + start).toFixed(digits);
};

getRandomInteger(3, 10);
getRandomFloat(1.24, 7.89, 2);
