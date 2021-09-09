/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    const maxNumber1 = Math.max(...numbers);
    const maxNumberIndex = numbers.indexOf(maxNumber1);
    numbers.splice(maxNumberIndex, 1);
    const maxNumber2 = Math.max(...numbers);
    return maxNumber1 + maxNumber2
}
