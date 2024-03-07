function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
return true;
}

// Usage

function printPrime(batas) {
    for (let prime = 2; prime <= batas; prime++) {
        if (isPrime(prime)) {
            console.log(prime);    
        }
    }
}

const printArray = printPrime(1000);
console.log(printArray);
