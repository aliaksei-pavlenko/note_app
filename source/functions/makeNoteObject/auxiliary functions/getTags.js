let getTags = (string) => {
    let wordsArray = string.split(' ');
    let tagsArray = [];
    wordsArray.forEach(word => {
        if (word.split('')[0] === '#') {
            let lettersArray = word.split('')
            lettersArray.shift();
            tagsArray.push(lettersArray.join(''));
        }
    });

    return tagsArray;
}

export default getTags;


