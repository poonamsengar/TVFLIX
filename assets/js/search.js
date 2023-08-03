'use strict';

import { api_key, fetchDataFromServer } from './api.js';
import { createMovieCard } from './movie-card.js';

    export function search() {
     
    const searchWrapper  = document.querySelector("[search-wrapper]");
    const searchField = document.querySelector("[search-field]");

    const searchResultModal = document.createElement("div");
    searchResultModal.classList.add("search-modal");
    document.querySelector("main").appendChild(searchResultModal);

    let  searchTimeout;
    
    searchField.addEventListener("input", function() {
         
        if(!searchField.value.trim()){
            searchResultModal.classList.remove("active");
            searchWrapper.classList.remove("searching");
            clearTimeout(searchTimeout);
            return;
        }  

        searchWrapper.classList.add("searching");
        clearTimeout(searchTimeout)

        searchTimeout = setTimeout(function() {

            fetchDataFromServer(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchField.value}&page=1&include_adult=false`,
             function({ results: movieList }) {

                searchWrapper.classList.remove("searching");
                searchResultModal.classList.add("active");
                searchResultModal.innerHTML = ""; //remove old result

                searchResultModal.innerHTML = `
                <p class="label">Result for</p>

                <h1 class="heading">${searchField.value}</h1>
                <div class="movie-list">
                    <div class="grid-list"></div>
                </div>
                `;

                for( const movie of movieList) {
                    const movieCard = createMovieCard(movie);

                    searchResultModal.querySelector(".grid-list").appendChild(movieCard)
                }
             })

    }, 500)

    })
}

{/* <div class="movie-card">
<figure class="poster-box card-banner">
    <img src="./assets/images/slider-control.jpg" alt="puss in Boots: The Last Wish"
        class="img-cover" />
</figure>
<h4 class="title">Puss in Boots: The Last Wish</h4>

<div class="meta-list">
    <div class="meta-item">
        <img src="./assets/images/star.png" width="20" height="20" loading="lazy"
            alt="rating" />
        <span class="span"> 8.4</span>
    </div>

    <div class="card-badge">2022</div>
</div>

<a href="./detail.html" class="card-btn" title="Puss in Boots: The Last Wish"></a>
</div> */}
