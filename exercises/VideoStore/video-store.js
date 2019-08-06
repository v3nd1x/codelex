class Video {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
    this.user = null;
  }
  get print() {
    return this.isRented ? `[${this.name}]` : this.name + " | " + "Movie rating:" + " " + this.rating 
  }
  rent(user) {
    this.user = user;
  }
  get isRented() {
    return this.user !== null;
  }
  return() {
    return (this.user = null);
  }
}

class VideoStore {
  constructor() {
    this.movies = [];
  }
  addMovie(name, rating) {
    this.movies.push(new Video(name, rating));
  } 
  get printContent() {
    return this.movies.map(m => m.print).join(",");
  }
  get asChoices() {
    return this.movies 
      .filter(movie => movie.isRented == false) 
      .map(movie => ({ name: movie.print, value: movie}));
     
  }
  rentMovies(movies, user) {
    for (const movie of movies) {
      movie.rent(user);
    }
  }
  returnMovie(movie) {
    movie.return();
  }
  getUserMoviesAsChoices(user) {
    return this.movies
      .filter(movie => movie.user === user)
      .map(movie => ({ name: movie.print, value: movie }));
  }
}
class User {
  constructor(name) {
    this.name = name;
  }
}
exports.Video = Video;
exports.VideoStore = VideoStore;
exports.User = User;
