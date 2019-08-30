let getFilteredNotes = (filterArray,noteObjects,idMask) => {
    let myArray = Object.keys(idMask);
    let targetTags = [];
    filterArray.forEach((filterString)=>{
        let newArray = myArray.filter((word) => word.toLowerCase().indexOf(`${filterString.toLowerCase()}`) !== -1);
        newArray.forEach((tag)=>{
            targetTags.push(tag);
        })
    })
    
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let uniquetargetTags = targetTags.filter(onlyUnique);

    

    let targetIds = [];
    uniquetargetTags.forEach((tag)=>{
        idMask[tag].forEach((id)=>{
            targetIds.push(id)
        })
    })

    
    let uniquetargetIds = targetIds.filter(onlyUnique);


    let filteredNoteObjects = [];
    noteObjects.forEach((obj)=>{
        // if(uniquetargetIds.indexOf(obj.id) !== -1){
        //     filteredNoteObjects.push(obj);
        // }
        if (uniquetargetIds.find(element => element === obj.id) !== undefined) {
            filteredNoteObjects.push(obj);
        }
    })

    return filteredNoteObjects;
}   

export default getFilteredNotes;