//Disemvowel Trolls
function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
  }

//Correct the date-string
function dateCorrect(datestring) {
    if (!datestring) return datestring;
    const [d, m, y] = datestring.split(".").filter(x => !Number.isNaN(+x));
    if (!y) return null;
    return new Date(+y, +m - 1, +d).toLocaleDateString("ro-RO")
  }

//DNA to RNA Conversion
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }

//Fizz Buzz - Without ifs
const fizzBuzz = n =>
    (n % 3 === 0 && n % 5 === 0 && "FizzBuzz") ||
    (n % 3 === 0 && "Fizz") ||
    (n % 5 === 0 && "Buzz") ||
    n;
  
  console.log(fizzBuzz(6));
  console.log(fizzBuzz(10));
  console.log(fizzBuzz(15));
  console.log(fizzBuzz(17));