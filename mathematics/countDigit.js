
/**
 * Counts the number of digits in a given positive integer.
 * 
 * This function takes a positive integer as input and iteratively divides
 * the number by 10, incrementing a counter until the number becomes 0.
 * It returns the total count of digits in the input number.
 * 
 * Note: The function assumes the input is a non-negative integer.
 * 
 * @function
 * @name countDigits
 * @param {number} num - The number whose digits are to be counted. Must be a non-negative integer.
 * @returns {number} The count of digits in the given number.
 * 
 * 
 * @throws {TypeError} Throws an error if the input is not a number or is negative.
 * 
 */

export default function countDigits(num) {
    let result = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        result += 1;
    }
    return result;
}

/**
 * Time Complexity: log(n)
 * Space Complexity: log(n)
 */

