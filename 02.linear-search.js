/**
 * Linear search pseudocode
 * 
 * 1. This function accepts an array and a value
 * 2. Loop through the array and check if the current array element is equal to
 *    the value
 * 3. If it is, return the index at which the element is found
 * 4. If the value is never found, return -1
 */
let linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
} //time complexity is O(n)

console.log(linearSearch([34,56,1,2],1)); //returns 2
console.log(linearSearch([34,56,1,2],0)); //returns -1