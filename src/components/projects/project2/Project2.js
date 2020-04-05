import React, { Component } from "react";
// import "./style.css";
import Search from "./Search";
import DisplayMovies from "./DisplayMovies";

export default class Project2 extends Component {
  state = { movies: "" };

  fetchMovies = (searchInput) => {
    const search = searchInput;
    const API = `http://www.omdbapi.com/?apikey=979a7ef5&t=${search}`;
    fetch(API)
      .then((res) => res.json())
      .then((movies) =>
        movies.Error
          ? this.setState({ movies: "" })
          : this.setState({ movies: movies })
      );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchMovies(e.target.search.value);
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Movie Database</h1>
        </header>
        <main>
          <Search handleSubmit={this.handleSubmit} />
          {this.state.movies !== "" ? (
            <DisplayMovies movies={this.state.movies} />
          ) : (
            ""
          )}
        </main>
      </div>
    );
  }
}
