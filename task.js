const fibonacci = function (n) {
  const fibArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    const newFib = fibArr[i - 2] + fibArr[i - 1];
    fibArr.push(newFib);
  }
  return fibArr[n];
};
