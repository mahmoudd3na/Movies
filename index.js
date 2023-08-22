class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  }
  getTitle() {
    return this.title;
  }
  getReleaseDate() {
    const date = new Date(this.releaseDate);
    return date.toLocaleDateString();
  }
  getPicture() {
    return this.picture;
  }
  getRating() {
    return this.rating;
  }
}
const API_BASE_URL = "https://api.themoviedb.org/3/";
let target = document.querySelector(".movies-list");
const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2ExOWVkNjU3Y2U1NjZiMTIzM2Y5Y2MwMWJiN2E4OCIsInN1YiI6IjY0ZTQ5M2ZlZTBjYTdmMDExZGRiOTQ3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._6Hk-A3H2yf_RWpfybFA3_T9rERJpqHcLd0tzQIiaEI",
  },
});

const getImage = (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`;

function fetchMovies() {
  fetch(`${API_BASE_URL}movie/popular?language=en-US&page=1`, getHttpOptions())
    .then((response) => response.json())
    .then((response) => {
      response.results.forEach((movie) => {
        const movieObject = new Movie(
          movie.title,
          movie.release_date,
          getImage(movie.poster_path || movie.backdrop_path),
          movie.vote_average
        );
        createMovieCard(movieObject);
      });
    })
    .catch((err) => console.error(err));
}

function createMovieCard(movie) {
  target.innerHTML += `
        <div class="movie">
                        <img class="vector-img" src="./images/Vector.svg"> 
                        <img class="add-img" src="./images/tabler-icon-plus.svg"> 
                    <img class="poster" src=${movie.getPicture()}>
                    <div class="flex-container movie-info">
                        <a href="#" class="title normal-link">${movie.getTitle()}</a>
                        <p class="time">${movie.getReleaseDate()}</p>
                        <div class="flex-container rate-trailer">
                            <div class="flex-container trailer">
                                <img src="./images/play.svg">
                                <p>Trailer</p>
                            </div>
                            <div class="flex-container rating">
                                <img src="./images/star.svg">
                                <p>${movie.getRating()}</p>
                            </div>
                            
                        </div>
                    </div>  
                    </div>`;
}
fetchMovies();
let moviesCount = document.querySelectorAll(".movie"); 
let itemsCount = document.querySelector(".sort-bar p");
itemsCount.textContent=`${moviesCount.length} items`;
