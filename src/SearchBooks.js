import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

class SearchBooks extends Component {
  componentDidMount() {
    //To clear the search input with every mount of the component
    this.props.clearQuery();
  }
  render() {
    return (
      <div className="search-books">
        <SearchForm
          handleChange={this.props.handleSearch}
          query={this.props.query}
        />
        <SearchResults
          books={this.props.books}
          changeShelf={this.props.selectShelf}
        />
      </div>
    );
  }
}

export default SearchBooks;
