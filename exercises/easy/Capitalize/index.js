/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str) {
    let newString = str.split(' ');
    let Array = []
  
    newString.forEach(word => {
      word = word.split('');
      word[0] = word[0].toUpperCase();
      word = word.join('');
      console.log(word)
  
      Array.push(word);
    })
  
    console.log(Array);
  
    Array = Array.join(' ');
    return Array
  }
module.exports = capitalize;
