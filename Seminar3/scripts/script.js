// const a = Number.parseInt(prompt("Insert a: "));
// const b = Number.parseInt(prompt("Insert b: "));
// alert(`Результат сложения: ${myFunc(a, b)}`);
// console.log(myFunc(a, b));

// function myFunc(x, y) {
//   return x + y;
// }

// const nameInsert = prompt("Insert name: ");
// myFunc(nameInsert);

// function myFunc(n){
//   alert(`Привет, ${n}`);
// }

// const goodLife = confirm("Вам хорошо живется?");

// if (goodLife) {
//   alert("Тогда мы идем к вам!");
// } else {
//   alert("Ну вы держитесь там!");
// }

// alert(goodLife ? "Тогда мы идем к вам!" : "Ну вы держитесь там!");

// const age = Number.parseInt(prompt("Ввведите возраст:"))

// switch (age) {
//   case 18:
//     alert('Вы совершеннолетний, все можно!');
//     break;
//   case 10:
//     alert('Вам надо учить уроки!');
//     break;
//   case 30:
//     alert('Ложитесь спать, завтра на работу');
//   default:
//     alert('Мы не знаем что Вам делать');
//     break;
// }

// const num = 456;
// let copyNum = num;
// const units = copyNum % 10;
// copyNum = (copyNum - units) / 10;
// const dozen = copyNum % 10;
// const hund = (copyNum - dozen) / 10;

// console.log(`В числе ${num} количество сотен: ${hund}, десятков: ${dozen}, единиц: ${units}`);

// const number = Number.parseInt(prompt("Enter your number:"));

// const numbers = number % 10; //
// const tenths = ((number - numbers) / 10) % 10;
// const hundreds = ((number - numbers - (tenths * 10)) / 100) % 10;

// alert(`Hundreds = ${hundreds}, tenths = ${tenths}, numbers = ${numbers}`)

// const arrAges = [0.9, 5, 60.5, 35, 20, 15];
// let minAge = arrAges[0];
// let maxAge = arrAges[0];
// for (let i = 1; i < arrAges.length; i++) {
//   if (arrAges[i] < minAge) {
//     minAge = arrAges[i];
//   }
//   if (arrAges[i] > maxAge) {
//     maxAge = arrAges[i];
//   }
// }
// console.log(Math.floor(maxAge) - Math.floor(minAge));

// function differenceInAges(ages) {
//   const max_age = Math.max(...ages);
//   const min_age = Math.min(...ages);
//   let res = [min_age, max_age, (max_age - min_age)];
//   return res;
// }

// console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
// console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]

const number = Number.parseInt(prompt("Enter your number:"));
console.log(sort_array(number));
function sort_array(number) {
  let numbers = [];
  const strNum = number.toString();
  for (let index = 0; index < strNum.length; index++) {
    const element = strNum[index];
    numbers.push(Number.parseInt(element));
  }
  numbers.sort().reverse();
  return Number.parseInt(numbers.join(''))
}