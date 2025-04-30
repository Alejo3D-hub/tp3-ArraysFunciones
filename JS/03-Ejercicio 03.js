let apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  apariciones[suma]++;
}

document.writeln("<h2>Resultados de lanzar dos dados (50 veces):</h2>");
for (let i = 2; i <= 12; i++) {
  document.writeln(`<p>Suma ${i}: ${apariciones[i]} veces</p>`);
}
