var startSaleTime = +question('Когда начинаются скидки?'),
    endSaleTime,
    currentTime;

if (startSaleTime) {
  endSaleTime = +question('Когда заканчиваются скидки?');
  if (endSaleTime) {
    currentTime = +question('Сколько сейчас времени?');
    if (currentTime) {
      if (startSaleTime < endSaleTime && startSaleTime <= currentTime && currentTime <= endSaleTime) {
        alert('Скидка действует');
      } else if (startSaleTime > endSaleTime && startSaleTime <= currentTime) {
        alert('Скидка действует');
      } else if (startSaleTime > endSaleTime && endSaleTime >= currentTime) {
        alert('Скидка действует');
      } else {
        alert('Скидка сейчас не действует');
      }
    } else {
      alert('Вы вышли из формы');
    }
  } else {
    alert('Вы вышли из формы');
  }
} else {
  alert('Вы вышли из формы');
}

function question(question) {
  var i = prompt(question, '');
  while (isNaN(i) || i < 0 || i > 23) {
    i = prompt('Не верные данные, введите число от 0 до 23\n'  + question, '');
  }
  return i;
}
