import React from "react";

export default function Search(props) {
  return (
    <form className="searchForm" onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search for a movie....."
        className="searchbar"
        required
      />
      <button type="submit" className="btn btn-light">
        Submit
      </button>
    </form>
  );
}
