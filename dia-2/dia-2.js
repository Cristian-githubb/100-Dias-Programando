/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

isAnagram = (wordOne, wordTwo) => {
  // We convert both words to lowercase and check if they are the same.
  if (wordOne.toLowerCase() === wordTwo.toLowerCase()) {
    return false;
  }

  // We convert both words to character arrays, sort them and compare
  const sortewordOne = wordOne.toLowerCase().split('').sort().join('');
  const sortewordTwo = wordTwo.toLowerCase().split('').sort().join('');

  return sortewordOne === sortewordTwo;
}


main = () => {
  console.log(isAnagram("Dog", "God")); // true
}

main();