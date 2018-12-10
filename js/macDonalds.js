var howMuchMoney = prompt('Скільки у Вас грошей?', '0');


if (howMuchMoney == false) {
  alert('Вы не ввели сумму')
  console.log('Вы не ввели сумму');
} else if (howMuchMoney >= 100) {
  order = confirm('Ви можете купити БігМакМеню. Бажаєте?', '');
  if (order == true) {
    alert('Ви замовили БігМакМеню');
    console.log('Ви замовили БігМакМеню');
  } else {
    alert('Ви нічого не замовили');
    console.log('Ви нічого не замовили');
  }
} else if (howMuchMoney >= 50 && howMuchMoney <= 100) {
  order = confirm('Ви можете купити Чізбургер і картоплю. Бажаєте?', '');
  if (order == true) {
    alert('Ви замовили Чізбургер і картоплю');
    console.log('Ви замовили Чізбургер і картоплю');
  } else {
    alert('Ви нічого не замовили');
    console.log('Ви нічого не замовили');
  }
} else if (howMuchMoney >= 20 && howMuchMoney <= 50) {
  order = confirm('Ви можете купити Колу. Бажаєте?', '');
  if (order == true) {
    alert('Ви замовили Колу');
    console.log('Ви замовили Колу');
  } else {
    alert('Ви нічого не замовили');
    console.log('Ви нічого не замовили');
  }
} else if (howMuchMoney <= 20) {
  alert('Пробачте, в нашому закладі немає страв для вас :(');
  console.log('Пробачте, в нашому закладі немає страв для вас :(');
}
