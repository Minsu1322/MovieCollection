const cardIntroduction = document.getElementById("movie-list");

function displayMovies(movies) {
  const movieList = document.querySelector('#movie-list #movie-cards');
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const movieCard = `
      <div class="card">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        
          <h1>${movie.title}</h1>
          <p>${movie.overview}</p>
          <p>평점: ${movie.vote_average}</p>
        
      </div>
    `;
    movieList.innerHTML += movieCard;
  });


  const cards = movieList.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.addEventListener('click', function () {
      alertMovie(movies[index].id);
    });
  });
}

function alertMovie(movieId) {
  alert(`영화 id : ${movieId}`);
}