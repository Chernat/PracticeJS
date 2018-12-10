var howMuchMoney = prompt('Скільки у Вас грошей?', '');

// if (howMuchMoney >= 100) {
//   order = confirm('Ви можете купити БігМакМеню. Бажаєте?', '');
//
//   if (order == true) {
//     alert('Ви замовили БігМакМеню');
//   } else {
//     alert('Ви нічого не замовили');
//   }
// } else if (howMuchMoney >= 50 && howMuchMoney <= 100) {
//   order = confirm('Ви можете купити Чізбургер і картоплю. Бажаєте?', '');
//
//   if (order == true) {
//     alert('Ви замовили Чізбургер і картоплю');
//   } else {
//     alert('Ви нічого не замовили');
//   }
// } else if (howMuchMoney >= 20 && howMuchMoney <= 50) {
//   order = confirm('Ви можете купити Колу. Бажаєте?', '');
//
//   if (order == true) {
//     alert('Ви замовили Колу');
//   } else {
//     alert('Ви нічого не замовили');
//   }
// } else if (howMuchMoney <= 20) {
//   alert('Пробачте, в нашому закладі немає страв для вас :(');
// }

/* with console log */

if (howMuchMoney >= 100) {
  order = confirm('Ви можете купити БігМакМеню. Бажаєте?', '');
  if (order == true) {
    console.log('Ви замовили БігМакМеню');
  } else {
    console.log('Ви нічого не замовили');
  }
} else if (howMuchMoney >= 50 && howMuchMoney <= 100) {
  order = confirm('Ви можете купити Чізбургер і картоплю. Бажаєте?', '');
  if (order == true) {
    console.log('Ви замовили Чізбургер і картоплю');
  } else {
    console.log('Ви нічого не замовили');
  }
} else if (howMuchMoney >= 20 && howMuchMoney <= 50) {
  order = confirm('Ви можете купити Колу. Бажаєте?', '');
  if (order == true) {
    console.log('Ви замовили Колу');
  } else {
    console.log('Ви нічого не замовили');
  }
} else if (howMuchMoney <= 20) {
  console.log('Пробачте, в нашому закладі немає страв для вас :(');
}
