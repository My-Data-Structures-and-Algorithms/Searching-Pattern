/**
 * Binary search precept
 * - in searching for an element within a given list, first find the middle element
 * - if the element you find within the list is the element we are searching for, 
 * - then you've found your element otherwise if the element is greater than the search
 * - element, ignore all the elements that are greater and find those that are smaller
 * - repeat the process again until you find the element you want 
 * 
 * Binary search pseudocode
 * 
 * 1. This function accepts a sorted array and a value
 * 2. Create a left pointer at the start of the array, and a right
 *    pointer at the end of the array. 
 * 3. While the left pointer comes before the right pointer:
 *    - create a pointer in the middle
 *    - If you find the value you want, return the index
 *    - If the value is too small, move the left pointer up
 *    - If the value is too large, move the right pointer down
 * 4. If you never find the value, return -1
 */
// let binarySearch = (sortedArr, val) => {
//    let left = 0;
//    let right = sortedArr.length - 1;

//     while (left <= right) {
//         let middle = Math.floor((left + right)/2);
//         if (sortedArr[middle] === val) {
//             return middle;
//         }

//         if (sortedArr[middle] < val) {
//             left += 1;
//         }

//         if (sortedArr[middle] > val) {
//             right -= 1;
//         }
//     }

//     return -1;

// }

let binarySearch = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5,6],5)); //returns 4
console.log(binarySearch([70,89,90,100,345],100)); //returns 3
console.log(binarySearch([70,89,90,100,345],34)); //returns -1