var startSaleTime = prompt('Когда начинаются скидки? (0 - 24)', '0'),
    endSaleTime = prompt('Когда заканчиваются скидки? (0 - 24)', '0'),
    currentTime;

    if ( startSaleTime <= endSaleTime && endSaleTime <= 24 && startSaleTime >= 0 ) {
      currentTime = prompt('Сколько сейчас времени? (0 - 24)', '0');
      if ( currentTime >= startSaleTime && currentTime <= endSaleTime && currentTime != false) {
        alert('Скидка действует');
      } else if ( currentTime == false ) {
        alert('Вы не ввели текущее время');
      } else if ( currentTime < 0 || currentTime > 24) {
        alert('Вы ввели не вернее текущее время');
      } else {
        alert('Скидка не действует');
      }
    } else {
      alert('Вы ввели не верные данные');
    }
