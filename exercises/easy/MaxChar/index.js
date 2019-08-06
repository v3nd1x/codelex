/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
    let arr = str.split('');
    let count = {};
    let biggest = 0;
    let value;
  
    arr.forEach(element => {
      if (count[element]) {
        count[element] = count[element] + 1;
      } else {
        count[element] = 1;
      };
    });
  
    for (let el in count) {
      if (count[el] > biggest) {
        biggest = count[el]
        value = el;
      }
    }
    return value
  }