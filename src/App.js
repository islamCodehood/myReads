import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import SearchBooks from "./SearchBooks";
import BookList from "./BookList";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    query: ""
  };

  componentDidMount() {
    //get the books in library from the backend server
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }
  componentWillUpdate() {
    console.log(this.state.query);
  }

  //Change the book shelf and move it to the new shelf
  changeShelf = (book, shelf) => {
    //assign the new shelf to the book
    book.shelf = shelf;
    //Change the state by filtering the books array to exclude the changed
    //book. Then concat this book after changing its shelf value to the books array.
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
    //update books in server with the new shelf value
    BooksAPI.update(book, shelf);
  };

  //select shelf for book appear in the search page
  selectShelf = (book, shelf) => {
    //assign the new shelf to the book
    book.shelf = shelf;
    //Change the state by filtering the books array to exclude the changed
    //book. Then concat this book after changing its shelf value to the books array.
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
    this.setState(state => ({
      searchedBooks: state.searchedBooks
        .filter(b => b.id !== book.id)
        .concat([book])
    }));
    //update books in server
    BooksAPI.update(book, shelf).then(data => {});
  };

  //reaction to typing in the search input
  handleSearch = query => {
    //in case of there is a value in query
    if (query) {
      this.setState({
        //to trim white spaces around query text
        query: query.trim()
      });

      BooksAPI.search(query)
        .then(response => {
          let searchedBooks = [];

          if (response.length) {
            /* map through the response array and find the index of books that have id value equal to id
        of books in the library and if so return this book with its shelf value and save it to 
        searchedBooks array or return the book in the response. */
            searchedBooks = response.map(searchedBook => {
              const index = this.state.books.findIndex(
                libraryBook => libraryBook.id === searchedBook.id
              );
              if (index >= 0) {
                return this.state.books[index];
              } else {
                return searchedBook;
              }
            });
          }
          this.setState({
            searchedBooks
          });
        })
        .catch(() => {
          this.setState({
            searchedBooks: []
          });
        });
    } else {
      this.setState({
        searchedBooks: []
      });
    }
  };

  clearQuery = () => {
    this.setState({
      query: ""
    });
    this.handleSearch();
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookList books={this.state.books} changeShelf={this.changeShelf} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              selectShelf={this.selectShelf}
              books={this.state.searchedBooks}
              handleSearch={evt => this.handleSearch(evt.target.value)}
              query={this.state.query}
              clearQuery={this.clearQuery}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
