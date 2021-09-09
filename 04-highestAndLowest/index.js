/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    const arr = numbers.split(' ');
    const numbersArr = arr.map(elem => Number(elem))
    const min = Math.min(...numbersArr);
    const max = Math.max(...numbersArr);
    return `${min} ${max}`
}