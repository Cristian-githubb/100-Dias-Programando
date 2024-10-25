/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */


primo = (number) => {
  if (number < 2) {
    return false;
  }

  for (i = 2; i < number; i++) {
    if ( number % i === 0 ) {
      return false;
    }
  }
  return true;
};

for (let number = 1; number <= 100; number++) {
  if (primo(number)) {
    console.log(number);
  }
};

