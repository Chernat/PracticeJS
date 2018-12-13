var stepan = confirm ('Стёпа будет?', ''),
    mykola = confirm ('Коля с нами?', ''),
    anjelika = confirm ('Анжелика придет?', '');

if (anjelika && !mykola && !stepan) {
  alert('Я счастлива');
} else if ((anjelika && !mykola) || (anjelika && !stepan)) {
  alert('Я счастлива');
} else if (!anjelika && mykola && stepan) {
  alert('Я счастлива');
} else {
  alert('Испортили Новый Год :(');
}
