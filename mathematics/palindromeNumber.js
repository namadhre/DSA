/**
 * Checks if a given number is a palindrome.
 * A palindrome number reads the same backward as forward.
 *
 * @param {number} number - The number to check for palindrome property.
 * @returns {boolean} - Returns `true` if the number is a palindrome, otherwise `false`.
 */
export default function checkPalindrome(number) {
    let res = 0;
    let temp = number;
    while (temp > 0) {
        let digit = temp % 10;
        res = (res * 10) + digit;
        temp = Math.floor(temp / 10);
    }
    return number === res;
}

/**
 * Time Complexity: O(logN)
 * Space Complexity: O(logN)
 */