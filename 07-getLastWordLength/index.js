export const getLastWordLength = str => {
    const wordsArr = str.trim().split(' ');
    const lastWord = wordsArr[wordsArr.length - 1];
    return lastWord.length;
};
