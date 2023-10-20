// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// describe('multipliedByThree', () => {
//     it('takes in an array of numbers and returns an array with all the numbers multiplied by 3', () => {
//       const numbersArray1 = [6, 7, 8, 9, 10]
//       // Expected output: [18, 21, 24, 27, 30]
//       const numbersArray2 = [24, 27, 30, 33, 36]
//       // Expected output: [72, 81, 90, 99, 108]
//       expect(multipliedByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//       expect(multipliedByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//     })
//   })
// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe('divisibleByThree', () => {
//     it('that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.', () => {
//         const object1 = { number: 15 }
//         // Expected output: "15 is divisible by three"
//         const object2 = { number: 0 }
//         // Expected output: "0 is divisible by three"
//         const object3 = { number: -7 }
//         // Expected output: "-7 is not divisible by three"
//         expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
//         expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
//         expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
//     })
// })
    //   ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// input: 3 individual number objects
// output: return a message depicting whether or not the number inputted is divisible by 3

// const divisibleByThree = (number) => {
//     // use number as placeholder for the arguement that will be console logged
//     if (number % 3 === 0 ){
//         // use mod % op to check if number is divis by three
//         return `${number} is divisible by three`
//         // if true, return message above
//     } else {
//         return `${number} is not divisible by three`
//         // if false, or all else, return message above
//     }
// }
// pass objects through function by console logging into original const(divisibleByThree)
// console.log(divisibleByThree(object1))
// console.log(divisibleByThree(object2))
// console.log(divisibleByThree(object3))




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe('arrAllCaps', () => {
    it('takes in an array of words and returns an array with all the words capitalized.', () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(arrAllCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(arrAllCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])


    })
})
    // ReferenceError: arrAllCaps is not defined


// b) Create the function that makes the test pass.

// Pseudo code:

const arrAllCaps = (words) => {
    // iterate through array using .map to create new array for each value changed
    return words.map( word => word.charAt(0).toUpperCase() + word.slice(1))
    // for each value, use charAt(0).toUpperCase() to capitilize first letter, or index [0]
    // .slice to retain the rest of each value starting from the second letter, or index [1]
}
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// create new var to store the values that get manipulated from the function
const capsNouns1 = arrAllCaps(randomNouns1)
const capsNouns2 = arrAllCaps(randomNouns2)
// console log each new array 
console.log(capsNouns1)
console.log(capsNouns2)