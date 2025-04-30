function esParOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  let numero = parseInt(prompt("Ingresa un número entero:"));
  document.writeln(esParOImpar(numero));
  