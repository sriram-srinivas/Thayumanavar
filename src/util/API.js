import Axios from "axios"

const getLanguageList = callback => {
    const url = 'https://thayumanavar-a636f-default-rtdb.firebaseio.com/LanguageList.json'
    Axios.get(url).then((response) => {
        callback({ LanguageList: response.data })
    }, (error) => {
        console.log("Error in getLanguageList", error);
    });
}
const getAuthorList = (callback, Language_ID) => {
    let url = `https://thayumanavar-a636f-default-rtdb.firebaseio.com/Author.json`
    if (Language_ID) url += `?orderBy="Language_ID"&equalTo=${Language_ID}`
    Axios.get(url).then((response) => {
        const result = []
        for (const [key, value] of Object.entries(response.data)) {
            result.push(value)
        }
        callback({ AuthorList: result })
    }, (error) => {
        console.log("Error in getAuthorList", error);
    });
}
const getBookList = (Author_ID, callback) => {
    const url = `https://thayumanavar-a636f-default-rtdb.firebaseio.com/BookList.json`
    if (Author_ID) url += `?orderBy="Author"&equalTo=${Author_ID}`
    Axios.get(url).then((response) => {
        const result = []
        for (const [key, value] of Object.entries(response.data)) {
            result.push(value)
        }
        callback({ BookList: result })
    }, (error) => {
        console.log("Error in getBookList", error);
    });
}

export {
    getLanguageList,
    getAuthorList,
    getBookList
}