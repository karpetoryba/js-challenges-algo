// Écris une fonction qui prend un tableau en argument et retourne un tableau contenant uniquement des valeurs uniques.
function uniqueValues(array) {
  return [...new Set(array)];
}

const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(uniqueValues(arr));

uniqueValues(arr); // [1, 2, 3, 4, 5, 6, 7]
