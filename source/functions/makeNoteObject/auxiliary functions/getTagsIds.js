let getTagsIds = (string) => {
    let wordsArray1 = string.split(' ');
    let tagsIdArray = [];
    for (let i = 0; i < wordsArray1.length; i++) {
        if (wordsArray1[i].split('')[0] === '#') {
            tagsIdArray.push(i);
        }
    }
    return tagsIdArray;
}

export default getTagsIds;