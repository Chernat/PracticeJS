var howMuchMoney = question('Скільки у Вас грошей?'),
    bigMac = 'БігМакМеню',
    burgerAndPotates = 'Чізбургер і картоплю',
    cola = 'Колу';

if (howMuchMoney != undefined) {
  if(howMuchMoney >= 100) {
    order(bigMac);
  }
  if(howMuchMoney < 100 && howMuchMoney >= 50) {
    order(burgerAndPotates);
  }
  if(howMuchMoney < 50 && howMuchMoney >= 20) {
    order(cola);
  }
  if(howMuchMoney < 20) {
    console.log('Пробачте, в нашому закладі немає страв для вас :(');
    alert('Пробачте, в нашому закладі немає страв для вас :(');
  }
} else {
  alert('Вы вышли из формы');
}

function question(question) {
  var i = prompt(question, '');
  while (isNaN(i) || i < 0 || i == false) {
    i = prompt('Не верные данные', '');
  }
  return i;
}

function order(product) {
  order = confirm('Ви можете купити ' + product + ' .' + ' Бажаєте?', '');
  if (order == true) {
    console.log('Ви замовили ' + product);
    alert('Ви замовили ' + product);
  } else {
    console.log('Ви нічого не замовили');
    alert('Ви нічого не замовили');
  }
}
