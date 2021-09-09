// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    const result = [];
    for(let i = 0; i < arr.length; i+=size) {
        result.push(arr.slice(i, size + i))
    }
    return result
};
