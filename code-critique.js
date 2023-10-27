// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.
function findFirstVowelIndex(str) {
    const vowels = "aeiouAEIOU"; // List of vowels (both lowercase and uppercase)
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            console.log("Index of the first vowel: " + i);
            return i; // Return the index of the first vowel and exit the function
        }
    }
    console.log("No vowels found in the string");
    return -1; // Return -1 if no vowels are found in the string
}

// Example usage
const inputString = "Hello, World!";
findFirstVowelIndex(inputString);



// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

// I like that there is some sort of pseudo explanation within the code. It seems relatively simple, as it just iterates through the inputted string and logs the first vowel. I do also like that there is a return if no vowels are found. I personally would use the same approach, but wouldnt treat upper and lower case as different characters, therefore utilizing .toUpperCase or .toLowerCase. 