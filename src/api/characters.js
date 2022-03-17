const URL = "https://rickandmortyapi.com/api/character/"

/*function to call all of the characters in the api by page*/
export async function getCharactersApi(){
    try {
        const request = await fetch(`${URL}?page=23`);
        const response = await request.json();
        return response.results;
    } catch (err) {
        throw Error(err);
    }
}
/*function to call a single character from the url, with the varibale of the id */
export async function getCharacterByIdApi(id){
    try {
        const request = await fetch(`${URL}${id}`);
        const response = await request.json();
        return response;
    } catch (err) {
        throw Error(err);
    }
}

export async function getEpisodeName(url){
    try{
        const request = await fetch(url);
        const response = await request.json();
        return response.name;
    }catch (err){
        throw Error(err);
    }
}
