export const addFav= (character)=> {
    return {type: "ADD_fAV", payload: character}
}

export const removeFav = (id)=>{
    return {type: "REMOVE_FAV",payload:id}
}