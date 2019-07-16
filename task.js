// Get the next prime number!

// You will get a numbern (>= 0) and your task is to find the next prime number.

// Make sure to optimize your code: there will numbers tested up to about 1012

// Examples
// 5  ==> 7
// 12 ==> 13

function nextPrime(n) {
  const primes = [];
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    if (primes.indexOf(num) !== -1) {
      return true;
    }
    const max =  Math.sqrt(num);
    for (let i = 0; i < primes.length; i++) {
      if (num % primes[i] === 0 || primes[i] > max) {
        return false;
      }
    }

    for (let i = 2; i <= max; i++) {
      if (num % i === 0 || i * i > num) {
        return false;
      }
    }

    primes.push(num);
    return true;
  }

  for (let i = n + 1; ; i++) {
    if (isPrime(i)) {
      return i;
    }
  }
}
