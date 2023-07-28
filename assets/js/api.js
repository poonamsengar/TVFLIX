'use strict';


const api_key = "9b319d2e0b0ff1162ef7de620495ff07";
const imageBaseURL = "https://image.tmdb.org/t/p/";


/**
 * fetch data from a server using the 'url' and passes
 * the result in JSON data to a 'callback' function,
 * along with an optional parameter if has 'optionalParam'.
 */


const fetchDataFromServer = function(url, callback, optionalParam){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam))    
}

export { imageBaseURL, api_key, fetchDataFromServer };

