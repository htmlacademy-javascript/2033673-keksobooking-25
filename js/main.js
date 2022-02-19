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

getRandomInteger(3, 10);
