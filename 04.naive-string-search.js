/**
 * Naive string search pseudocode
 * 
 * 1. This function takes a longer string and the pattern we are looking for
 * 2. loop over the longer string
 * 3. loop over the shorter string 
 * 4. If characters don't match, break out of the inner loop
 * 5. If characters match, keep going
 * 6. If you complete the inner loop & find a match, increment the count of matches
 * 7. Return count
 * 
 * 
 * Example: naiveStringSearch('wowomgzomg', 'omg') //2
 */

//Naive solution one
let naiveStringSearch = (str1, str2) => {
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str2[j] !== str1[i+j]) {
                break;
            }

            if (j === (str2.length - 1)) {
                count++;
            }
        }
    }

    return count;
}

console.log(naiveStringSearch('wowomgzomg','omg')); //2
console.log(naiveStringSearch('wowzomg','omg')) //1
console.log(naiveStringSearch('ohlahlahlaohbaby','la')) //3
console.log(naiveStringSearch('lalala','la')) //3
console.log(naiveStringSearch('lalala','le')) //0