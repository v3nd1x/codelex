/**
 * Magic Matrix
 *
 * Write a JS function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.
 *
 * The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
 *
 * The output is a Boolean result indicating whether the matrix is magical or not.
 */



 function count(array){
    let current = 0; 
    for (let i in array){
         current = current + array[i]
    }
    return current 
 }

 function countColumn(matrix){
     let first = []; 
    for (var i = 0; i < matrix.length; i++){
    }   let second =[]; 
        for (var j = 0; j < matrix.length; j++){
    }
        first.push(second[j][i]); 
 } 
        

function isMatrixMagical(input){
    console.log(input); 
    
}
module.exports = isMatrixMagical

