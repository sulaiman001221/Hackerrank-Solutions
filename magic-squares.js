function formingMagicSquare(s) {
  const magic = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
  ];

  function rotateMatrix(m) {
    // Transpose the matrix and then reverse each row
    return m[0].map((_, index) => m.map((row) => row[index])).reverse();
  }

  function getCost(a, b) {
    let totalCost = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        totalCost += Math.abs(a[i][j] - b[i][j]);
      }
    }
    console.log(a, b, totalCost); // For debugging
    return totalCost;
  }

  const costs = [];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
      costs.push(getCost(magic[j], s));
      magic[j] = rotateMatrix(magic[j]);
    }
  }

  return Math.min(...costs);
}
