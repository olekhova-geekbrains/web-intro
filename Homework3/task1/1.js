temperatureCel = Number.parseInt(prompt("Введите температуру в градусах Цельсия: "));
alert(`Цельсий: ${temperatureCel} Фаренгейт: ${conversion(temperatureCel)}`);


function conversion(tCel) {
  tFah = (9 / 5) * tCel + 32;
  return tFah.toFixed(1); 
}