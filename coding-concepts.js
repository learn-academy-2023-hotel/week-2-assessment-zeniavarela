// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
console.log(cohort.split(" "))

// a) Your answer: "Hotel" , "2023"
// b) Verify and explain: Output -> [ 'Hotel', '2023' ] I initially thought that the split would just seperate each value, but .split not only does that, it outputs the values into an array. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: I dont think it will log anything, or it may just log [Function: greeter] because theres no return. 
// b) Verify and explain: Output -> undefined. There is nothing to output so it logs as undefined because no 'return' value was given after the anaonymous function call. (line 20, before string interpolation)

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: The odd numbers as a new array. ->  [11, 13, 15]
// b) Verify and explain: Output -> [ 11, 13, 15 ] 
// -> .filter() creates a new array with only the values that pass the conditions set in (number) => number % 2 !== 0). The output of [ 11, 13, 15 ]  pass the conditions and are therefore logged. 

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Output -> JavaScript
// b) Verify and explain: Output -> JavaScript 
// In the console.log, it is looking to access the [0] index of the languages property inside the myCodingSkills object, which would be JavaScript.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: It will log the new object from the original Learn class, but with "George" taking the argument of "this.student = name"
// b) Verify and explain: Output -> Learn { student: 'George', cohort: 'Hotel', year: 2023 }

