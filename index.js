class Movie { 
    constructor(title, duration ,picture, rating){
        this.title=title; 
        this.duration=duration; 
        this.picture=picture; 
        this.rating=rating; 
    }
    getTitle (){
        return this.title;
    }
    getDuration (){
        return this.duration; 
    }
    getPicture(){
        return this.picture; 
    }
    getRating(){
        return this.rating; 
    }
}
const movies=[]; 
const jaws= new Movie("Jaws","1h 45m","./images/movie-pictures/jaws.jpeg",7); 
movies.push(jaws); 
const thor = new Movie("Thor: love and thunder","1h 45m","./images/movie-pictures/loveandthunder.jpeg",7); 
movies.push(thor); 
const matrix = new Movie("The Matrix","1h 45m","./images/movie-pictures/matrix.jpeg",9); 
movies.push(matrix); 
const birdman = new Movie("Birdman","1h 45m","./images/movie-pictures/birdman.jpeg",9); 
movies.push(birdman); 
 
const barbie = new Movie("barbie","1h 45m","./images/movie-pictures/barbie.jpeg",7.0); 
movies.push(barbie); 
const movie1917 = new Movie("1917","2h","./images/movie-pictures/1917.jpeg",8.5); 
movies.push(movie1917); 
const blackSwan = new Movie("Black Swan","1h 50m","./images/movie-pictures/blackswan.jpeg",8.0); 
movies.push(blackSwan); 
const bohemian = new Movie("Bohemian Rhapsody","1h 45m","./images/movie-pictures/bohemian.jpeg",7.5); 
movies.push(bohemian); 
const her = new Movie("Her","1h 30m","./images/movie-pictures/her.jpeg",8.0); 
movies.push(her); 
const jurassic = new Movie("Jurassic Park","1h 45m","./images/movie-pictures/download.jpg",6.0); 
movies.push(jurassic); 
const dunkirk = new Movie("Dunkirk","2h","./images/movie-pictures/dunkirk.jpeg",7.8); 
movies.push(dunkirk); 
const avengers = new Movie("Avengers:End Game","2h 30m","./images/movie-pictures/endgame.jpeg",8.5); 
movies.push(avengers); 





movies.forEach(movie =>{
    let movieDiv = document.createElement("div"); 
    movieDiv.setAttribute("class","movie");
    let vector = document.createElement("img");
    vector.setAttribute("class","vector-img") ;
    vector.setAttribute("src","./images/Vector.svg"); 
    let addImg = document.createElement("img");
    addImg.setAttribute("class","add-img") ;
    addImg.setAttribute("src","./images/tabler-icon-plus.svg");  
    let poster= document.createElement("img"); 
    poster.setAttribute("class","poster");
    poster.setAttribute("src",movie.getPicture());
    let movieInfo= document.createElement("div"); 
    movieInfo.setAttribute("class","flex-container movie-info");
    let movieTitle= document.createElement("a"); 
    movieTitle.setAttribute("href","#"); 
    movieTitle.setAttribute("class","title normal-link"); 
    movieTitle.textContent=movie.getTitle(); 
    let time = document.createElement("p"); 
    time.setAttribute("class","time"); 
    time.textContent=movie.getDuration(); 
    let rateTrailer = document.createElement("div"); 
    rateTrailer.setAttribute("class","flex-container rate-trailer"); 
    let trailer = document.createElement("div"); 
    trailer.setAttribute("class","flex-container trailer"); 
    let playImg= document.createElement("img"); 
    playImg.setAttribute("src","./images/play.svg"); 
    let pt= document.createElement("p"); 
    pt.textContent="Trailer"; 
    let rating = document.createElement("div"); 
    rating.setAttribute("class","flex-container rating"); 
    let starImg= document.createElement("img"); 
    starImg.setAttribute("src","./images/star.svg"); 
    let pRate= document.createElement("p"); 
    pRate.textContent=movie.getRating();
    rating.appendChild(starImg); 
    rating.appendChild(pRate); 
    trailer.appendChild(playImg); 
    trailer.appendChild(pt); 
    rateTrailer.appendChild(trailer); 
    rateTrailer.appendChild(rating); 
    movieInfo.appendChild(movieTitle); 
    movieInfo.appendChild(time); 
    movieInfo.appendChild(rateTrailer);
    movieDiv.appendChild(vector); 
    movieDiv.appendChild(addImg);
    movieDiv.appendChild(poster);
    movieDiv.appendChild(movieInfo); 
    let target= document.querySelector(".movies-list"); 
    target.appendChild(movieDiv); 
});
 
