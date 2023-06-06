// To print odd numbers in a array : 
var num = [5,2,3,4] ;
num.forEach((num) => num % 2 !=  0 && console.log(num));*/


//To convert all strings to caps in a string array.
var names = ['Siva', 'sibi', 'Raja', 'Dhoni'];

var lowercased = names.map(name => name.toLowerCase());

console.log(lowercased);
['Siva', 'sibi', 'Raja', 'Dhoni']

var uppercased = names.map(name => name.toUpperCase());

console.log(uppercased);
 ['SIVA', 'SIBI', 'RAJA', 'DHONI']*/


To sum of all numbers in a array :
function getArraySum(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}

var num = [123,321,456,789,987]; 
var sum = getArraySum(num); //sums up to 2676
console.log(sum);*/


//Return all prime numbers from an array : 

const newArray = [1, 3, 2, 5, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);*/


//Return all the palindromes in an array.

const getAllPalindromes = function (words) {
    return words.filter(function (word) {
       return word.split("").reverse().join("") === word;
     });
   };
   
   console.log(getAllPalindromes(["hello", "noon"]));

   