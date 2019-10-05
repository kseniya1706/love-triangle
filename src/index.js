/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
let result = 0;

preferences.forEach ((e, i) => {
  let firstElement = i;
  let secondElement = preferences[i] - 1;
  let thirdElement = preferences[secondElement] - 1;
  if (preferences[thirdElement] - 1 === firstElement)
  {
    ++result;
  }
}
);
return Math.floor(result/3);
}
