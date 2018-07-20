import React from "react";
import { Link } from "react-router-dom";

function SearchForm(props) {
  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

export default SearchForm;
