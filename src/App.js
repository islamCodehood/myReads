import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import BookList from './BookList'


class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    query: '',
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
//select shelf for searched book
selectShelf = (book, shelf) => {
  book.shelf = shelf
  console.log(shelf, book.shelf)
  //Change the state by filtering the books array to exclude the changed
  //book. Then concat this book after changing its shelf value to the books array.
  this.setState((state) => ({
    books: state.books.filter((b) => b.id !== book.id).concat([book])
  }))
  this.setState(state => ({
    searchedBooks: state.searchedBooks.filter((b) => b.id !== book.id).concat([book])
  }))
  //update books in server
  BooksAPI.update(book, shelf)
}

updateQuery = (query) => {
  this.setState({
    query: query.trim()
  })
  if (query !== '') {
    BooksAPI.search(query).then(searchedBooks => {
      console.log(searchedBooks)
      this.setState({
        searchedBooks
      })
    }).catch(() => {
      this.setState({
        searchedBooks : []
      })
    })
  }else{
      this.setState({
        searchedBooks :[]
      })
  }
}


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList 
            books={this.state.books} 
            changeShelf={this.changeShelf}
            clearQuery={this.clearQuery}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks 
            selectShelf={this.selectShelf} 
            books={this.state.searchedBooks}
            updateQuery={(evt) => this.updateQuery(evt.target.value)}
            query={this.state.query}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
