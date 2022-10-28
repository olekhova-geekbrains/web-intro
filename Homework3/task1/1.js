const temperatureCel = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
alert(`Цельсий: ${temperatureCel} Фаренгейт: ${conversion(temperatureCel).toFixed(1)}`);


function conversion(tCel) {
  const tFah = (9 / 5) * tCel + 32;
  return tFah;
}