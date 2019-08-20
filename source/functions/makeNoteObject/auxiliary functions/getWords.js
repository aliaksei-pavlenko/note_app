let getWords = (string) => {
    let prevWordArray = string.split(' ');
    let newWordArray = [];
    prevWordArray.forEach(word => {
        if (word.split('')[0] === '#') {
            let lettersArray = word.split('')
            lettersArray.shift();
            newWordArray.push(lettersArray.join(''));
        } else {
            newWordArray.push(word);
        }
    });
    return newWordArray;
}

export default getWords;

