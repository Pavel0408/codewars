// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function narcissistic(value) {
  const valueArr = (value + ``).split('');
  valueArr.forEach((item, index) => {
    valueArr[index] = Math.pow(+item, valueArr.length);
  })  
  const result = valueArr.reduce((sum, current) => {
    return sum + current;
  });
  console.log(result);
  return value === result;
}