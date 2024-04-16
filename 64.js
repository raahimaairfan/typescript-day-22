/* Combine Strings and Numbers: Write a function that merges a piece of text with a number.
For example, if provided with "Age: " and 30, it should give back "Age: 30". */
// This function mixes a text and a number into one text
function combineStringAndNumber(text, number) {
    // Joins the text and number into a single text
    return text + number;
}
// Trying it out with "Age: " and 30
console.log(combineStringAndNumber("Age: ", 30)); // Shows "Age: 30"
