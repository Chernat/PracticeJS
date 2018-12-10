var stepan = confirm ('Стёпа будет?', ''),
    mykola = confirm ('Коля с нами?', ''),
    anjelika = confirm ('Анжелика придет?', '');

    if (anjelika == true && mykola == false && stepan == false) {
      alert('Я счастлива');
    } else if (anjelika == true && mykola == false || anjelika == true && stepan == false) {
      alert('Я счастлива');
    } else if (anjelika == false && mykola == true && stepan == true) {
      alert('Я счастлива');
    } else {
      alert('Испортили Новый Год :(');
    }
