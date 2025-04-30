function calcularPerimetro(a, b) {
    return 2 * (a + b);
  }
  
  let ladoA = parseFloat(prompt("Ingresa el valor del lado A del rectángulo:"));
  let ladoB = parseFloat(prompt("Ingresa el valor del lado B del rectángulo:"));
  let perimetro = calcularPerimetro(ladoA, ladoB);
  
  document.writeln("El perímetro del rectángulo es: " + perimetro);
  