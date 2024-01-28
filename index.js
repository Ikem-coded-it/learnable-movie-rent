const prompt = require('prompt-sync')();

class MovieStore {
  movies = [
    {name: "The Avengers", price: 10},
    {name: "Deadpool", price: 15},
    {name: "Gladiator", price: 20},
    {name: "Spiderman 3", price: 25},
    {name: "Thor", price: 30}
  ]

  startApp() {
    console.log("==========================================================")
    console.log("Welcome to Ikem's Movie Store")
    this.displayMovies();
    const choice = this.getUserMovieChoice();
    const decision = this.handleDecision(choice);
    
    if (decision == "y") this.rentMovie(choice);
    if (decision == 'n') this.dontRentMovie();
  }

  displayMovies() {
    console.log("Pick a movie to rent")
    this.movies.forEach((movie, index) => {
      console.log(`${index + 1}. ${movie.name}`)
    })
  }

  getUserMovieChoice() {
    const choice = parseInt(prompt("Input the number of your movie choice: "));
    if (typeof choice === 'number' && choice <= this.movies.length && choice > 0) return choice

    console.log(`Please input a number between 1 and ${this.movies.length}`)
    return this.getUserMovieChoice()
  }

  handleDecision(choice) {
    console.log(`This movie costs $${this.movies[choice - 1].price}, do you want to rent it? `)
    const decision = prompt('Input "y" for yes or "n" for no: ');

    if (decision === "y" || decision === 'n') return decision;
    return this.handleRenting(choice);
  }

  rentMovie(choice) {
    console.log(`You have successfully rented ${this.movies[choice - 1].name} for ${this.movies[choice - 1].price}!`)
    const rentAgain = prompt("Wanna rent another movie? Input 'y' or 'n': ")
    if (rentAgain === "y") return this.startApp();
    if (rentAgain === 'n') return console.log("Thanks for patronizing us!");
    return this.rentMovie(choice)
  }

  dontRentMovie() {
    const anotherChoice = prompt("Wanna pick another movie? Input 'y' or 'n': ")
    if (anotherChoice === "y") return this.startApp();
    if (anotherChoice === 'n') return console.log("Thanks for patronizing us!");
    return this.dontRentMovie()
  }
}

const movieStore = new MovieStore();
movieStore.startApp();