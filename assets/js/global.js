'use strict'

const addEventOnElements = function (elements, eventType, callback){
    for(const elem of elements) elem.addEventListener(eventType, callback);
}

/**
 *  Toggle Search box in mobile device || small screen
 */

const searchBox = document.querySelector("[search-box]");
const searchtoggle = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchtoggle,"click" ,function(){
    searchBox.classList.toggle("active");
})