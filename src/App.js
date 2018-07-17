import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books)
      this.setState({
        books
      })
    })
  }

  changeShelf = (value, book) => {
    book.shelf = value
    console.log(value, book.shelf)
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id).concat([book])
    }))

}

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
          ) : (
          <BookList books={this.state.books} changeShelf={this.changeShelf} />
          )}
      </div>
    )
  }
}

export default BooksApp
