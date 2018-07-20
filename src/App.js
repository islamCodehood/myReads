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
    this.updateQuery()
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
  BooksAPI.update(book, shelf).then(data => {
    console.log(data)

  })
}

updateQuery = (query) => {
  
  if (query) {
    this.setState({
      query: query.trim()
    })
    BooksAPI.search(query).then(response => {
      /* this.setState(state => ({
        searchedBooks: state.searchedBooks.concat([arr])
      })) */
      let searchedBooks = []
      if (response.length) {
        searchedBooks = response.map(searchedBook => {
          const index = this.state.books.findIndex(libraryBook => libraryBook.id === searchedBook.id)
          if (index >= 0) {
            return this.state.books[index]
          } else {
            return searchedBook
          }
        })
      }
      this.setState({
        searchedBooks
        })
        
      })
      
/*       console.log(matched)
      console.log(this.state.searchedBooks) */

.catch(() => {
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

clearQuery = () => {
    this.setState({
      query: ''
    })
    console.log(this.state.query)
    this.updateQuery()
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
            clearQuery={this.clearQuery}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
