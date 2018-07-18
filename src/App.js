import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
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
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books)
      this.setState({
        books
      })
    })
  }
//Change the book shelf and move it to the new shelf
  changeShelf = (book, shelf) => {
    book.shelf = shelf
    console.log(shelf, book.shelf)
    //Change the state by filtering the books array to exclude the changed
    //book. Then concat this book after changing its shelf value to the books array.
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id).concat([book])
    }))
    //update books in server
    BooksAPI.update(book, shelf)
}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} changeShelf={this.changeShelf} />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
