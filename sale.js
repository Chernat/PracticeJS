var startSaleTime = prompt('Когда начинаются скидки? (0 - 24)', ''),
    endSaleTime = prompt('Когда заканчиваются скидки? (0 - 24)', ''),
    currentTime;


    if ( startSaleTime <= endSaleTime ) {
      currentTime = prompt('Сколько сейчас времени? (0 - 24)', '');
      if ( currentTime >= startSaleTime && currentTime <= endSaleTime) {
        alert('Скидка действует');
      } else {
        alert('Скидка не действует');
      }
    } else {
      alert('Вы ввели неверные данные');
    }
