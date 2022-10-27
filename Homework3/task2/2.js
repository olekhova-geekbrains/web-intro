function myName(name) {
  console.log(`Приветствую, ${name}`);
  return name;
}

userName = prompt("Как Вас зовут? ");
alert(`Приветствую, ${myName(userName)}`);
