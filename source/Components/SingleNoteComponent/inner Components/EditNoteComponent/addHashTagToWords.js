
let addHashTagToWords = (note) => {
    let newArray = [...note.words];

    note.tagsIds.forEach(index => {
        newArray[index] = `#${newArray[index]}`; 
    });
    return newArray.join(' ');
}

export default addHashTagToWords;