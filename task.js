function faroCount(deckSize) {
  function isEquival(arr1, arr2) {
    return arr1.every((elem, index) => {
      return arr1[index] === arr2[index];
    });
  }

  let deckArr = new Array(deckSize).fill(``).map((elem, index) => {
    return index + 1;
  });
  let count = 0;
  let localDeckArr = deckArr.slice();
  do {
    debugger;

    let firstHalf = localDeckArr.slice(0, localDeckArr.length / 2);
    let secondHalf = deckArr.slice(deckArr.length / 2, localDeckArr.length);
    console.log(firstHalf, secondHalf);
    debugger;
    localDeckArr = [];
    for (let i = 0; i < secondHalf.length; i++) {

      localDeckArr.push(firstHalf[i]);
      localDeckArr.push(secondHalf[i]);
      console.log(localDeckArr);
    }

    count++;

    console.log(isEquival(localDeckArr, deckArr), localDeckArr);

  } while (!isEquival(localDeckArr, deckArr));

  return count;
}

console.log(faroCount(52));
