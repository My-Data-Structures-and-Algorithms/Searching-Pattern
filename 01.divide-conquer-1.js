/**
 * Given a sorted array of integers, write a function called search that accepts a value
 * and returns the index where the value passed to the function is located. If the value
 * is not found, return -1
 * UEBSL
 * - My words:a function that returns the index of a given value or -1 if the value is 
 *   not found
 * - Inputs: sorted array of integers, value
 * - Outputs: index of entered value if found or -1
 * - All Info: yes
 * - Data pieces: function name: search, input: [sorted Integers], value, output: index, -1
 * 
 * Examples:
 * - search([1,2,3,4,5,6], 4) //returns 3
 * - search([4,8,34,45,89], 11) // returns -1
 * - Ignore Empty inputs
 * - Ignore Invalid inputs
 * 
 * Break it down
 * 1. loop through the array
 * 2. if I find the value I am looking for, I return it's index
 * 3. else if the value is not found, I return -1  
 */

//solve/simplify
//Method one
// let search = (sortedArr, val) => {
//     for (const num of sortedArr) {
//         if (num === val) {
//            return sortedArr.indexOf(num);
//         }
//     }
//     return -1;
// } - time complexity - 0(n**2)

//solve/simplify
//Method two
// let search = (sortedArr, val) => {
//     for (let i = 0; i < sortedArr.length; i++) {
//         if (sortedArr[i] === val) {
//             return i;
//         }
//     }
//     return -1;
// } //time complexity - O(n)

//solve/simplify
//Method three - binary search (use the divide and conquer pattern)
//search([1,2,3,4,5,6],4)
let search = (sortedArr, val) => {
    let min = 0;
    let max = sortedArr.length -1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = sortedArr[middle];

        if (currentElement < val) {
            min = middle + 1;
        }
        else if (currentElement > val) {
            max = middle - 1;
        }
        else {
            return middle
        }
    }
    return -1;
} //time complexity - O(logn)


console.log(search([1,2,3,4,5,6],4)) //returns 3
console.log(search([4,8,34,45,89],11)) // returns -1