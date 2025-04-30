function mostrarTabla(numero) {
    for (let i = 1; i <= 10; i++) {
      document.writeln(`${numero} x ${i} = ${numero * i}<br>`);
    }
  }
  
  let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
  mostrarTabla(numero);
  